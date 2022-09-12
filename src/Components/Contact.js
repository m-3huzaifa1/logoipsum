import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Form,FormGroup,Col,Label,FormFeedback,Input, Button } from "reactstrap";
import emailjs from '@emailjs/browser';

class Contact extends Component {
 constructor(props) {
   super(props);
    
   this.state={
      title: '',
      body: '',
      email: '',
      telnum: '',
      touched: {
         title: false,
         body: false,
         telnum: false,
         email: false
      }
   };
    this.handleInputChange=this.handleInputChange.bind(this);
    
    this.handleBlur=this.handleBlur.bind(this);
 }

handleInputChange(event) {
   const target=event.target;
   const value = target.value;
   const name=target.name;

   this.setState({
       [name]:value
   });
 }


 handleBlur = (field) => (event) => {
     this.setState({
         touched: { ...this.state.touched, [field]: true }
     });
 }

 validate(title,body,email,telnum) {
     const errors = {
         title: '',
         body: '',
         email: '',
         telnum: ''
     };

     if (this.state.touched.title && title.length < 3)
         errors.title = 'Title should be >= 3 characters';
     else if (this.state.touched.title && title.length > 10)
         errors.title = 'Title should be <= 10 characters';

     if (this.state.touched.body && body.length < 5)
         errors.body = 'Body Text should be >= 5 characters';
     else if (this.state.touched.body && body.length > 50)
         errors.body = 'Body Text should be <= 50 characters';
 
         const reg = /^\d+$/;
         if (this.state.touched.telnum && !reg.test(telnum))
             errors.telnum = 'Tel. Number should contain only numbers';
 
         if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
             errors.email = 'Email should contain a @';
 
         return errors;
 }




render() {
   const errors = this.validate(this.state.title, this.state.body,this.state.email,this.state.telnum);
   const form = React.createRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67traca', 'template_bm5Xe0j', form.current, 'yaPkbNWApKqdXYz-I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

   return(

      <div>
    <div className="container">
      <div className="row">
            <Header/>
            <br/>
            <br/>
      </div>
      <br/>
      <div className="row">
      
      <div className="col-12 col-sm-6">
          <h1 style={{color: '#364F6B',font: 100}}>Connect With Us</h1>
          <br/>
         </div> 
      </div>
      <div className="row ">
         <div className="col-12 col-sm-6 info">
          <Form ref={form} onSubmit={sendEmail}>
          <Col md={12}>
             <h3>Tell us about your project</h3>
          </Col>
          <Col md={12}>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cum lobortis mi<br/>
             vulputate potenti orci</p>
          </Col>
          <br/>
                           <FormGroup row>
                                <Label htmlFor="title" md={12}>Title</Label>
                                <Col md={12}>
                                    <Input type="title" name="title" style={{background: '#202c3a',color: 'white'}}
                                        placeholder="Title"
                                        value={this.state.title}
                                        valid={errors.title === ''}
                                        invalid={errors.title !== ''}
                                        onBlur={this.handleBlur('title')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.title}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={6}>
                                    <Label htmlFor="email" >Email</Label>
                                    <Input type="email" name="email" style={{background: '#202c3a',color: 'white'}}
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                                
                                <Col md={6}>
                                    <Label htmlFor="telnum" >Phone Number</Label>
                                    <Input type="telnum" name="telnum" style={{background: '#202c3a',color: 'white'}}
                                        placeholder="phone no."
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="body" md={12}>Body</Label>
                                <Col md={12}>
                                    <Input type="body" name="body" style={{background: '#202c3a',color: 'white'}}
                                        placeholder="Body"
                                        value={this.state.body}
                                        valid={errors.body === ''}
                                        invalid={errors.body !== ''}
                                        onBlur={this.handleBlur('body')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.body}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 12}}>
                                    <Button type="submit" color="primary" className="bluebtn" style={{color: 'black'}}>
                                        Submit
                                    </Button>
                                </Col>
                                </FormGroup>
                           </Form>
                           
          <br/>
         </div>
         <div className="col-12 col-sm-5 offset-1" >
            <br/>
            <br/>
            <br/>
            <h3>Address</h3>
            <p>0199 Taylor Park, North Dakota,USA</p>
            <hr width={400}/>
            <h3>Call us on</h3>
            <p>+1 98723 42023<br/>
            info@logoipsum.com</p>
            <hr width={400}/>
            <h3>Social Media</h3>
            <i id='smedia' class="fa fa-fw fa-instagram" ></i>
            <i id='smedia' class="fa fa-fw fa-twitter" ></i>
            <i id='smedia' class="fa fa-fw fa-facebook" ></i>
         </div>
         
      </div>
      <br/>
      <div className="row">
      <Footer/>
      </div>
    </div>
    </div>
 );
}
}

export default Contact;