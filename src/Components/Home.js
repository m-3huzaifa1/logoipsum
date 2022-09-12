import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import img1 from '../pana.svg';
import img2 from '../images/logoipsum-215.svg';
import img3 from '../images/logoipsum-216.svg';
import img4 from '../images/logoipsum-218.svg';
import img5 from '../images/logoipsum-217.svg';
import { Card} from "reactstrap";

export default function Home() {
 return(
    <div className="container">
      <div className="row">
            <Header/>
            <br/>
      </div>
      <br/>      
      <div className="row">
         <div className="col-12 col-md-6">
            <h1 style={{color: '#364F6B'}}>Let's Create <br/>Something Great<br/>Together</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Augue nec ultrices<br/> venenatis
            in.Sed elit aenean mattis vulputate aliquet vitae</p> <br/>
            <div className="bluebtn" style={{color: 'black',margin: 20}}>Let's Talk</div>
            
         </div>
         <div className="col-12 col-md-6">
            <img src={img1} alt='img1'/>
         </div>
      </div>
      <div className="row info" style={{margin: 30}}>
      <div style={{float:'right', width:'42%'}}><hr/></div>
      Trusted Companies
      <div style={{float:'right', width: '42%'}}><hr/></div>

         <br/>
         <br/>
         <div className="col-1">
         <i className="fa fa-2x fa-angle-left" aria-hidden="true"></i>
         </div>
         <div className="col-4 col-md-2">
            <img src={img2}  alt='img2'/>
         </div>
         <div className="col-4 col-md-2">
            <img src={img3} alt='img3'/>
         </div>
         <div className="col-4 col-md-2">
            <img src={img4} alt='img4'/>
         </div>
         <div className="col-4 col-md-2">
            <img src={img5} className=' logo' alt='img5'/>
         </div>
         <div className="col-2">
         <span className="fa fa-2x fa-angle-right" aria-hidden="true"></span>
         </div>
         <br/>
         
         <hr className="l" style={{margin: 30}}/>
         <br/>
         <div className="col-12 col-md-6">
            <h1 style={{color: 'white'}}>Our Services <br/>that we provide</h1>
         </div>
         <div className="col-12 col-md-6">
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Et ut nunc<br/>
            libero dolor,gravida.In metus,tortor,nunc sed egestas erat diam<br/>
            arcu.Laoreet orci nisl etiam risus ut nec.Facilisi ipsum viverra diam<br/>
            arcu massa amet non metus ornare</p>
         </div>
         <br />
         
         <div className="col-12 col-md-4 dd">
         
            <h3>Design</h3>
            <p>Lorem ipsum dolor sit amet,consectetur<br/>
            adipiscing elit.Et ut nunc,libero dolor,<br/>
            gravida.In metus,tortor,nunc sed egestas<br/>
            erat diam arcu</p>
         </div>
         <div className="col-12 col-md-4 dd">
            <h3>Developement</h3>
            <p>Lorem ipsum dolor sit amet,consectetur<br/>
            adipiscing elit.Et ut nunc,libero dolor,<br/>
            gravida.In metus,tortor,nunc sed egestas<br/>
            erat diam arcu</p>
         </div>
         <div className="col-12 col-md-4 m">
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet,consectetur<br/>
            adipiscing elit.Et ut nunc,libero dolor,<br/>
            gravida.In metus,tortor,nunc sed egestas<br/>
            erat diam arcu</p>
         </div>
      </div>
      <br/>
      <div className="row">
         <div className="col-12 " >
            <h1 style={{color: '#364F6B',display: "flex",justifyContent: 'center',margin: 30}} >Our Works</h1>
         </div>
      </div>
      <div className="row">
         <div className="col-12 col-sm-6 col-md-4" >
            <Card style={{background: 'gray',height: 300}} >
            </Card> 
            <div className="col-8">
               <h2>Project 1</h2>
               <p>Lorem ipsum dolor sit amet,<br/>
               consectetur adipiscing elit</p>
            </div>
            <div className="col-4 ">
                
            </div>
         </div>
         <div className="col-12 col-sm-6 col-md-4" >
            <Card style={{background: 'gray',height: 300 }}>
            </Card>
            <div className="col-8">
               <h2>Project 2</h2>
               <p>Lorem ipsum dolor sit amet,<br/>
               consectetur adipiscing elit</p>
            </div>
            <div className="col-4 ">
                
            </div>

         </div>

         <div className="col-12 col-sm-6 col-md-4" >
            <Card style={{background: 'gray',height: 300 }}>
            </Card>
            <div className="col-8">
               <h2>Project 3</h2>
               <p>Lorem ipsum dolor sit amet,<br/>
               consectetur adipiscing elit</p>
            </div>
            <div className="col-4 ">
                
            </div>

         </div>
      </div>

      <br/>
      <div className="row">
         <div className="col-12 viewm" >
      <div className="bluebtn" style={{color: 'black',margin: 30}}>View More</div>
      </div>
      </div>
      <br/>  
            <Footer/>
    </div>
 );
}