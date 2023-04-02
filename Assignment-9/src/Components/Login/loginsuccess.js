import React, { Component } from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavBar from '../NavBar/navbar';
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
            filter: "drop-shadow(0px 0px 5px #666)",

        };

        return (
            <div style={cardStyle}>
                <Label color={this.props.color} />
            </div>
        );
    }
}

function LoginSuccess() {

    const [InputEmail, setEmail] = useState("");
    const [InputPassword, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    var details = {
        email: InputEmail,
        password: InputPassword,
    };

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
            },
            body: formBody,
        };
        fetch("http://localhost:80/user/login", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.exist === true) {
                    setSuccess(true);
                    sessionStorage.setItem("user", JSON.stringify(data.data));
                    //setIsLogged(true);
                } else {
                    alert("Your email or password is not valid");
                    //setIsLogged(false);
                }
            });
    };

    const userStored = sessionStorage.getItem("user");


    return (

        <div className="panel">
            <NavBar />
            <br></br><br></br><br></br><br></br>
            <h1 id='success'>Login Success</h1>
            <br></br>
            <div className='panel2'>
                <br></br>
                <Card color="Your Login has been successful." />
                <br></br>

                <br></br>
                <br></br>
            </div>

        </div>

    );

}

export default LoginSuccess
