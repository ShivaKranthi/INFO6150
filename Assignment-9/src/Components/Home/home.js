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
            height: 150,
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

export class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            auth: 0,
        };
    }





    render() {
        if (!sessionStorage.getItem("user")) {
            return (
                <Navigate to="/" />
            )
        }
        return (

            <div>
                <NavBar />
                <br></br><br></br><br></br><br></br>
                <div className='contact'>

                    <br></br><br></br><br></br>
                    <div className='contactdetails'>
                        <br></br>
                        NU MOVES - A Non-profit Dance Institution for Huskies on the move
                        <br></br>
                        <br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='contactdetails1'>
                        <br></br>
                        <Card color="Have you been wanting to lose weight,but hate the gym?Dance lessons are an excellent way to burn calories.Best news?You’ll be having so much fun,you won’t even realize you’re working out.Sure,the salsa and the swing are great cardio workouts.But slower dances also burn serious calories, with movement requiring you to have great posture." />
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;