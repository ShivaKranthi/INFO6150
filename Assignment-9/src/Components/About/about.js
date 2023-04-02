import React, { Component } from 'react'
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
            height: 170,
            width: 690,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        if (!sessionStorage.getItem("user")) {
            return (
                <Navigate to="/" />
            )
        }
        return (
            <div style={cardStyle}>
                <Label color={this.props.color} />
            </div>
        );
    }
}

export class About extends Component {
    render() {
        return (
            <div className='contact'>
                <NavBar />
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className='contactdetails6'>
                    <br></br>
                    Hellooo My Friend!!
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='contactdetails5'>
                    <br></br>
                    <Card color="The NU dance industry includes roles and positions that support dance performance, or applications of dance toward other goals. Dancers, choreographers, and technicians may find work in ballet, modern concert settings, music videos, touring shows, or musical theater. They frequently work with regional dance companies or at prestigious dance festivals. Los Angeles and New York City, the two most popular cities for professional dancers, are home to industries that frequently employ dancers: film, television, video, and theater. " />
                    <br></br>
                </div>
            </div>
        )
    }
}

export default About;