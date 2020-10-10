import React, { Component } from 'react';
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
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
  render() {
    //let form = (
    //<div className="App">
        //{ this.state.error_msg ?
            //<Alert color="danger" style={{marginRight: '1rem', marginLeft: '1rem', marginTop: '1rem'}}>
                //{ this.state.error_msg }</Alert> :
            //null }
        //<Form>
            //<FormGroup
                //style={{marginRight: '1rem', marginLeft: '1rem', marginTop: '1rem', textAlign: "left"}}>
                //<Label for="name">Name</Label>
                //<Input
                    //type="text"
                    //name="name"
                    //id="name"
                    //placeholder="Name"
                    //className="mb-3"
                    //onChange={this.onChange}
                ///>
                //<Label for="passowrd">Password</Label>
                //<Input
                    //type="password"
                    //name="password"
                    //id="password"
                    //placeholder="Password"
                    //className="mb-3"
                    //onChange={this.onChange}
                ///>
//
                //<Table borderless>
                    //<th>
                        //<Button
                            //color="dark"
                            //style={{marginRight: "1rem"}}
                            //block
                            //onClick={this.onSubmit.bind(this, "login")}
                        //>Login</Button>
                    //</th>
                    //<th>
                        //<Button
                            //color="primary"
                            //block
                            //onClick={this.onSubmit.bind(this, "register")}
                        //>Register</Button>
                    //</th>
                //</Table>
            //</FormGroup>
        //</Form>
    //</div>
    //);

    return (
        <div className="App">
        <Form>
            <FormGroup
                style={{marginRight: '1rem', marginLeft: '1rem', marginTop: '1rem', textAlign: "left"}}>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="mb-3"
                    //onChange={this.onChange}
                />
                <Label for="passowrd">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="mb-3"
                    //onChange={this.onChange}
                />

                <Table borderless>
                    <th>
                        <Button
                            color="dark"
                            style={{marginRight: "1rem"}}
                            block
                            //onClick={this.onSubmit.bind(this, "login")}
                        >Login</Button>
                    </th>
                    <th>
                        <Button
                            color="primary"
                            block
                            //onClick={this.onSubmit.bind(this, "register")}
                        >Register</Button>
                    </th>
                </Table>
            </FormGroup>
        </Form>
        </div>
      );

  }
}

export default App;
