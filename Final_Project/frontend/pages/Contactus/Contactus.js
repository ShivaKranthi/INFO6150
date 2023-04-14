import React, { useState } from 'react'
	
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Image,
} from "@chakra-ui/react";
import { Helmet } from 'react-helmet';
import cover from './cover.jpg'
import { Input, InputGroup, InputLeftElement, Textarea, Button } from "@chakra-ui/react"
import { BsEnvelope, GiPositionMarker, HiOutlinePhone } from 'react-icons/all'
import './contactuscss.css'
import { Form } from "react-bootstrap";

const Contactus = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

	
    let handleInputChange = (e) => setbody(e.target.value);
    let isEmail = false;
    let isbody = false;
    function ValidateEmail(email) {
        console.log("In validate");
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            isEmail = true;
        }
    }
    function Validatemessage(body) {
        console.log("In body validate");
        if (body == "") {
            isbody = false;
        } else {
            isbody = true;
        }
    }

	
        const handlesubmit = () => {
            ValidateEmail(email);
            Validatemessage(body);
            if (isEmail == true && isbody == true) {
                console.log(body);
                window.open(`mailto:team4ifix@gmail.com?subject=Sample&body=${body}`);
            } else if (isEmail == false) {
                //res.status(400);
                console.log("Email is false");
                alert("Please enter a valid email");
            } else if (isbody == false) {
                alert("Please enter message");
            }
        };

    return (
        
        <div className="contactUs">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="headerContact">
            
                <div className="text">
                </div>
            </div>
            <div className="card-contact">
                <div className="sendMsg">
                    <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            <InputLeftElement pointerEvents="none" children={<BsEnvelope className='envolope' color="gray.300" />} />
                            <Input value={email} onChange={e => setemail(e.target.value)} type="text" placeholder="Your Email Address" />
                        </InputGroup>
                    </div>
                    <div className="textAreaCnt">
                        <Textarea value={body} onChange={e => setbody(e.target.value)} width="450px" placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick={handlesubmit} borderRadius="90px" colorScheme="teal" variant="solid" size="180px" className="contactBtn">Submit</Button>
                    </div>
                </div>
                <div className="showAdrss">
                    <div className="box">
                        <div className="iconCtn"><GiPositionMarker opacity="0.8" /></div>
                        <div className="adressCtn">
                            <h3> Address</h3>
                            <p className="infoCtn">Northeastern University, Boston, MA, 02110</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="iconCtn"><HiOutlinePhone opacity="0.8" /></div>
                        <div className="adressCtn">
                            <h3>Lets Talk</h3>
                            <p className="infoCtn"><a href="tel:+1(999)999-9999"> +1 (999)999-9999 </a></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="iconCtn"><BsEnvelope opacity="0.8" /></div>
                        <div className="adressCtn">
                            <h3>Sale Support</h3>
                            <p className="infoCtn"><a href = "mailto: team4ifix@gmail.com">team4ifix@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )



    





};







export default Contactus;
