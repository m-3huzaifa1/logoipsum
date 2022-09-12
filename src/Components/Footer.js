import React from "react";

export default function Footer() {
 return(
    <div className="footer">
        <div className="container">
      <div className="row">
      <div className="col-4 ">
          <h1>Let's Work<br/>Together</h1>
      </div>
      <div className="col-6 offset-2 ">
          <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.Et ut nunc<br/>
          libero dolor,gravida.In metus,tortor,nunc sed egestus erat diam<br/>arcu.</p>
          <div className="bluebtn" style={{color: 'black',font: 'bolder'}}>Let's Talk</div>
      </div>
      </div>
      <br/>
      <div className="row">
         <div className="col-2 ">
            <span className="fa fa-square-o"></span><span className="fa fa-circle-o"></span><span className="fa fa-circle-o"></span><br/>
            <h6>logoipsum`</h6><br/>
            <i id='smedia' class="fa fa-fw fa-instagram" ></i>
            <i id='smedia' class="fa fa-fw fa-twitter" ></i>
            <i id='smedia' class="fa fa-fw fa-facebook" ></i>
         </div>
         <div className="col-4 col-md-2 offset-2">
            <h3>Address</h3><br/>
            <p>0199 Taylor Park,<br/>North Dakota,USA</p>
         </div>
         <div className="col-4 col-md-2 ">
         <h3>Call us on</h3><br/>
            <p>+1 98723 42023<br/>info@logoipsum.com</p>
         </div>
         <div className="col-4 col-md-2 ">
         <h3>Our Policies</h3><br/>
            <p>Privacy Policy<br/>Terms of Use<br/>Refund Policy</p>
         </div>
      </div>
      <div className="row justify-content-center" >
        <hr style={{color:'white', width: '100%'}}/>
         <p>Copyright &copy; Webalar.All Rights Reserved</p>
      </div>
    </div>
    </div>
 );
}