import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';

var OPERATORS = ["<", ">", "="]

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
        let unite_operators = OPERATORS.join("")
        let cond_reg = [`([^${unite_operators}]+)[${unite_operators}]([^${unite_operators}]+)`];
        let multiply_cond_reg = `(${cond_reg}(((s*)&&(s*)${cond_reg}(s*))*))`;
        let final_regexp = `^${multiply_cond_reg}{0,1}$`;

        if (!(new RegExp(final_regexp).test(this.state.name))) {
            console.log(`check did not pass for ${this.state.name}`)
            this.setState({ error_msg: "Invalid input"});
            return;
        }
        this.setState({ error_msg: ""});

        let conditions = this.state.name.split("&&").map(cond => {
            let operator = OPERATORS.reduce((last_op, op) => cond.includes(op) ? op : last_op);
            let operands = cond.split(operator).map(operand => operand.trim());
            return {operands, operator}
        })

        console.log(conditions)


        this.setState({text_box: this.state.name})
        axios.get("/ping", {
                params: conditions
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
