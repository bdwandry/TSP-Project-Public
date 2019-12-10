import React, { Component } from 'react';
import './App.css';
import './bb.css';
import './App'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            lights: {}
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        window.location.reload();
    }

    componentDidMount() {
        axios.get(`http://localhost:5601/lights`)
            .then(res => {
                lights: this.state.lights = res.data;
                console.log(this.state.lights)
            })
    }

    render() {
        return (
            <MuiThemeProvider >
                <div>
                    <AppBar position="static" >
                        <Toolbar variant="dense" style={{ backgroundColor: '#ffbf00'}}>
                            <Typography variant="h5" className="a" >
                                Husky Lights
                            </Typography>
                            <Button color="inherit" onClick={this.logout}>Logout</Button>
                            <Typography>            User: {this.state.username}</Typography>
                        </Toolbar>
                    </AppBar>

                </div>
            </MuiThemeProvider>
        );
    }
}


export default MainPage;