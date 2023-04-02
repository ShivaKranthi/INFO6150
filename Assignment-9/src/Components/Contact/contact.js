import React, { Component } from 'react'
import NavBar from '../NavBar/navbar';
import { Navigate } from 'react-router-dom';
class Label extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };

        return (
            <p style={labelStyle}>{this.props.color}</p>
        );
    }
}

class Card extends React.Component {
    render() {
        var cardStyle = {
            height: 100,
            width: 450,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle}>
                <Label color={this.props.color} />
            </div>
        );
    }
}

export class Contact extends Component {
    render() {
        if (!sessionStorage.getItem("user")) {
            return (
                <Navigate to="/" />
            )
        }
        return (

            <div className='contact'>
                <NavBar />
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className='contactdetails'>
                    <br></br>
                    Contact Details :
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='contactdetails1'>
                    <br></br>
                    <Card color="This is the contact page.
                     Wanna Contact Us?? 
                     Please email us at ma*****@gmail.com 
                                    or
                      call us at +1-(857)-312-1851" />
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Contact