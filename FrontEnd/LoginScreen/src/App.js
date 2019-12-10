import React, { Component } from 'react';
import './App.css';
import './bb.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            username: "",
            password: "",
            passwordCheck: "",
            email: "",
        };

        this.switchCounter = this.switchCounter.bind(this);
        this.log = this.log.bind(this);
        this.donotmatch = this.donotmatch.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    donotmatch() {
        if (this.state.password !== this.state.passwordCheck) {
            alert("Passwords don't match")
        } else if (this.state.username === "" || this.state.password === "" || this.state.passwordCheck === "" || this.state.email === "") {
            alert("Some or All Text-Fields are Empty. Please Fill them out.")
        } else {
            this.signup()
        }
    }

    login() {
        console.log(this.state.username);
        console.log(this.state.password);
        axios.post('http://localhost:5601/login', {userName: this.state.username, password: this.state.password})
            .then(res => {
                console.log(res);
            })
    }

    signup() {
        console.log(this.state.username);
        console.log(this.state.password);
        axios.post('http://localhost:5601/users', {userName: this.state.username, email: this.state.email, password: this.state.password, admin: "false"})
            .then(res => {
                console.log(res);
            })
    }

    log() {
        console.log("Username: " + this.state.username);
        console.log("Password: " + this.state.password);
        console.log("PasswordCheck: " + this.state.passwordCheck);
        console.log("Email: " + this.state.email);
    }

    switchCounter() {
        this.state.username="";
        this.state.password="";
        this.state.passwordCheck="";
        this.state.email="";
        if (this.state.counter === 1) {
            this.setState({
                counter: this.state.counter = 0
            })
        } else {
            this.setState({
                counter: this.state.counter = 1
            })
        }
    }


    render() {
        //Login Screen
        if (this.state.counter === 0) {
            return (
                <MuiThemeProvider >
                    <div className={"b"}>
                        <AppBar position="static" >
                            <Toolbar variant="dense" style={{ backgroundColor: '#ffbf00'}}>
                                <Typography variant="h5" className="a">
                                    Login
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <br/>
                        <br/>

                        <div>
                            <TextField
                            id="filled-basic-Login"
                            variant="filled"
                            label="Username"
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                            onClick={this.log()}
                        />
                        </div>
                        <br/>
                        <div>
                        <TextField
                            id="filled-basic-Login"
                            type="Password"
                            variant="filled"
                            label="Password"
                            placeholder={"Enter a Password"}
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            onClick={this.log()}
                        />
                        </div>
                        <br/>
                        <div>
                            <Button variant="contained"
                                    style={{ backgroundColor: '#ffbf00'}}
                                    onClick={this.login}
                            >Login</Button>
                        </div>
                        <br/>
                        <div>
                            Don't have an account? Sign-Up here
                        </div>
                        <br/>
                        <div>
                        <Button variant="contained" style={{ backgroundColor: '#ffbf00'}} onClick={this.switchCounter}>Sign-Up</Button>
                        </div>
                    </div>
                </MuiThemeProvider>)
        }

        //Register Screen
        if (this.state.counter === 1) {
            return (
                <MuiThemeProvider >
                    <div className={"b"}>
                        <AppBar position="static" >
                            <Toolbar variant="dense" style={{ backgroundColor: '#ffbf00'}}>
                                <Typography variant="h5" className="a" >
                                    Sign-Up
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <br/>
                        <br/>

                        <div>
                            <TextField
                                id="filled-basic-Register"
                                variant="filled"
                                label="Username"
                                placeholder={"Enter a Username"}
                                value={this.state.username}
                                onChange={e => this.setState({ username: e.target.value })}
                                onClick={this.log()}
                            />
                        </div>

                        <br/>

                        <div>
                            <TextField
                                id="filled-basic"
                                type="Password"
                                variant="filled"
                                label="Password"
                                placeholder={"Enter a Password"}
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                                onClick={this.log()}
                            />
                        </div>

                        <br/>

                        <div>
                        <TextField
                            id="filled-basic"
                            type="password"
                            variant="filled"
                            label="Re-Type Password"
                            placeholder={"Re-Type Password"}
                            value={this.state.passwordCheck}
                            onChange={e => this.setState({ passwordCheck: e.target.value })}
                            onClick={this.log()}
                        />
                    </div>

                    <br/>

                        <div>
                            <TextField
                                id="filled-basic"
                                variant="filled"
                                label="Email"
                                placeholder={"Enter a Email"}
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                onClick={this.log()}
                            />
                        </div>

                        <br/>

                        <div>
                            <Button variant="contained" style={{ backgroundColor: '#ffbf00'}} onClick={this.donotmatch}>Sign-Up</Button>
                        </div>

                        <br/>

                        <div>
                            Already have an account? Login here
                        </div>

                        <br/>

                        <div>
                            <Button variant="contained" style={{ backgroundColor: '#ffbf00'}} onClick={this.switchCounter}>Login</Button>
                        </div>
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}

export default App;
