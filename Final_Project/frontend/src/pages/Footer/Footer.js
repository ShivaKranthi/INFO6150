import React, { useState } from "react";
import {FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input, Stack, Button } from "@chakra-ui/react";
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const [email, setemail] = useState("");
    let isEmail = false;

    function ValidateEmail(email) {
        console.log("In validation");
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          isEmail = true;
        }
      }
    
      function handleSubscribe() {
        console.log("In handlesubs");
        ValidateEmail(email);
        console.log(isEmail);
        if (isEmail == true) {
          alert("You have successfully subscribed");
        } else {
          alert("Please enter a valid email");
        }
      }

    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Phones'>Phones</Link></li>
                        <li><Link to = '/shop/?cg=Computers'>Computers</Link></li>
                        <li><Link to = '/shop/?cg=Others'>Others</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Track Order</li>
                        <li>Track Returns</li>
                        <li>Track Shipping</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Any queries?</h1>
                    <ul>
                        <li><Link to=''>Contact Us: (999)999-9999</Link></li>
                        <li><Link to=''>Email Us: team4ifix@gmail.com</Link></li>
                        <li><Link to=''>Address: Northeastern University, Boston, MA, 02110</Link></li>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
          <h1>Newsletter</h1>
          <ul>
            <li>
              <Stack spacing={3}>
                <Input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  placeholder="Your Email Address"
                />
              </Stack>
            </li>
            <li>
              <Button onClick={handleSubscribe} className="footerBtn">
                Subscribe
              </Button>
            </li>
          </ul>
        </div>

                <div className="creditsIcons">
                    <ul>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img1"/></li>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img2" /></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" /></li>
                        <li><img src="https://i.imgur.com/IDHC2iv.png" className="img4" /></li>
                    </ul>
                    
                </div>
                
                <div className="paragraphFooter"><p>Copyright ©2023 All rights reserved.</p>
                <p>Kshitij || Ashwin || Kranthi || Tejaswi</p>
                </div>



            </footer>

        </div>
    )
}

export default Footer;
