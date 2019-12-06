import React, { Component } from 'react';
import './App.css';
import './bb.css'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.switchCounter = this.switchCounter.bind(this)
    }

    switchCounter() {
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
                            id="filled-basic"
                            variant="filled"
                            label="Username"
                            placeholder={"Enter a Username"}
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
                        />
                        </div>
                        <br/>
                        <div>
                            <Button variant="contained" style={{ backgroundColor: '#ffbf00'}}>Login</Button>
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
                </MuiThemeProvider>
            )
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
                                id="filled-basic"
                                variant="filled"
                                label="Username"
                                placeholder={"Enter a Username"}
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
                        />
                    </div>

                    <br/>

                        <div>
                            <TextField
                                id="filled-basic"
                                variant="filled"
                                label="Email"
                                placeholder={"Enter a Email"}
                            />
                        </div>

                        <br/>

                        <div>
                            <Button variant="contained" style={{ backgroundColor: '#ffbf00'}}>Sign-Up</Button>
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
