import React, { Component } from 'react';
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
    Button,
    Form,
    FormGroup,
    Table,
    Label,
    Input,
    Alert
} from 'reactstrap';

class App extends Component {

    state = {
        name: "",
        text_box: ""
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = () => {
        console.log("func called");
        this.setState({text_box: this.state.name})
        axios.get("/ping", {
                params: {
                    some: "123"
                }
            }).then((res) => console.log(res));
    }

    render = () => (
        <div className="App">
            <Form>
            <FormGroup style={{marginRight: '1rem', marginLeft: '1rem', marginTop: '1rem', textAlign: "left"}}>
            <Label for="name">Name</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={this.onChange}
            />
        <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" value={this.state.text_box}/>
        </FormGroup>

        <Button
        color="primary"
        block
        onClick={this.onSubmit}
        >Send</Button>
        </FormGroup>
        </Form>
        </div>
    );
}

export default App;
