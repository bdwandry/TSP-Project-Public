import React, { Component } from 'react';
import './App.css';
import './bb.css';
import './App';
import TableData from "./TableData";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
        };

        this.pageUpdate = this.pageUpdate.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout() {
        window.location.reload();
    }

    pageUpdate() {
        this.setState({
            counter: this.state.counter = 2
        })
    }

    render() {

        while (true) {
            return (
                <MuiThemeProvider>
                    <div className={"b"}>
                        <AppBar position="static" onChange={this.pageUpdate}>
                            <Toolbar variant="dense" style={{backgroundColor: '#ffbf00'}} onChange={this.pageUpdate}>
                                <Typography variant="h5" className="a">
                                    Husky Lights
                                </Typography>
                                <Button color="inherit" onClick={this.logout}>Logout</Button>
                                <Typography> User: {this.state.username}</Typography>
                            </Toolbar>
                        </AppBar>
                        <div onClick={this.pageUpdate}>
                        <TableData onChange={this.pageUpdate}/>
                        </div>
                    </div>
                </MuiThemeProvider>
            );
        }
    }

}


export default MainPage;