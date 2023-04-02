import React, { Component } from 'react'
import { Navigate, Route } from 'react-router-dom';
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
            height: 60,
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
const textAreaStyles = {
    width: 235,
    margin: 5
};

export class Jobs extends Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            userInput: '',
            toDoList: []
        }

        // change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map((items) =>
            <li>{items}</li>
        )
        if (!sessionStorage.getItem("user")) {
            return (
                <Navigate to="/" />
            )
        }


        return (
            <div className='contact'>
                <NavBar />
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className='contactdetails'>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.userInput}
                        style={textAreaStyles}
                        placeholder="Enter Your Field" /><br />
                    <button onClick={this.handleSubmit}>Create Jobs</button>
                    <br></br>
                    <br></br>
                    <h3>Jobs List:</h3>
                    <ul>
                        {items}
                    </ul>
                </div>
                <br></br>
                <div className='contactdetails7'>
                    <Card color="A Dance Institution which will change your Life." />
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Jobs;