import React from "react";
import { Navbar, NavbarBrand, Nav,NavbarToggler,
    Collapse,  NavItem,NavLink } from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

 return(
<div className='header'>
<div className='container'>
            <Navbar expand='md'>
              
                
                
                <NavbarBrand className="mr-auto" href="/home">
                            <span className="fa fa-square"></span><span className="fa fa-circle"></span><span className="fa fa-circle"></span><br/>
                            <h6>logoipsum`</h6>
                </NavbarBrand>
                
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                
                <Nav horizontal='end' id='head' className='col-10'>
                    <NavItem>
                        <NavLink className='nav-link' style={{color: 'black'}} href='/home'>
                           Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' style={{color: 'black'}} to='#'>
                        About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' style={{color: 'black'}} href='/contact'>
                        Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' style={{color: 'black'}} to='#'>
                        <div className="bluebtn">Get in Touch</div>
                        </NavLink>
                    </NavItem>
                    
                </Nav>
                
                </Collapse>
                
                
            </Navbar>
            </div>
        </div>
    )
}