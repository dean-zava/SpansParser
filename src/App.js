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
        text_box: "",
        error_msg: "",
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = () => {
        console.log("func called");
        let cond_reg = ["([^=<>]+)[=<>]([^=<>]+)"];
        let multiply_cond_reg = `(${cond_reg}(((\s*)&&(\s*)${cond_reg}(\s*))*))`;
        let final_regexp = `^${multiply_cond_reg}{0,1}$`;

        if (!(new RegExp(final_regexp).test(this.state.name))) {
            console.log(`check did not pass for ${this.state.name}`)
            this.setState({ error_msg: "Invalid input"});
            return;
        }
        this.setState({ error_msg: ""});


        this.setState({text_box: this.state.name})
        axios.get("/ping", {
                params: {
                    some: "123"
                }
            }).then((res) => console.log(res));
    }

    render = () => (
        <div className="App">
            { this.state.error_msg ?
                <Alert color="danger" style={{marginRight: '1rem', marginLeft: '1rem', marginTop: '1rem'}}>
                    { this.state.error_msg }</Alert> :
                null }
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
