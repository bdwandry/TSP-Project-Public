import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import axios from "axios";
import './App.css';
import './bb.css';
import './App';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 100,
    },
});


let AllLightsBoolean = false;
function AllLights () {
    if (AllLightsBoolean === false) {
        AllLightsBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "1"});
    } else {
        AllLightsBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "1"})
    }
}

let lightsTwoStr = "Off";
let lightsTwoBoolean = false;
function lightTwo () {
    if (lightsTwoBoolean === false) {
        lightsTwoBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "2"})
    } else {
        lightsTwoBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "2"})
    }

}

let lightsThreeBoolean = false;
function lightThree () {
    if (lightsThreeBoolean === false) {
        lightsThreeBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "3"})

    } else {
        lightsThreeBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "3"})
    }
}

let lightsFourBoolean = false;
function lightsFour () {
    if (lightsFourBoolean === false) {
        lightsFourBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "4"})
    } else {
        lightsFourBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "4"})
    }
}

let lightsFiveBoolean = false;
function lightsFive () {
    if (lightsFiveBoolean === false) {
        lightsFiveBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "5"})
    } else {
        lightsFiveBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "5"})
    }
}

let lightsSixBoolean = false;
function lightsSix () {
    if (lightsSixBoolean === false) {
        lightsSixBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "6"})
    } else {
        lightsSixBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "6"})
    }
}

let lightsSevenBoolean = false;
function lightsSeven () {
    if (lightsSevenBoolean === false) {
        lightsSevenBoolean = true;
        axios.put('http://localhost:5601/lights/', {"state": "true", "roomNumber": "7"})
    } else {
        lightsSevenBoolean = false;
        axios.put('http://localhost:5601/lights/', {"state": "false", "roomNumber": "7"})
    }
}

function createData(LightID, RoomNumber, Switches) {
    return {LightID, RoomNumber,Switches};
}

let rows = [
    createData('All Lights', "Light Location: All", <Switch  onChange={AllLights}/>),
    createData('5db7ac181c9d440000a1da98', "Light Location: 2",<Switch id={"LED2"} onChange={lightTwo} />),
    createData('5db7ac661c9d440000a1da9a', "Light Location: 3",<Switch id={"LED3"} onChange={lightThree} />),
    createData('5db7ac8f1c9d440000a1da9c', "Light Location: 4",<Switch id={"LED4"} onChange={lightsFour}/>),
    createData('5db7acae1c9d440000a1da9e', "Light Location: 5",<Switch id={"LED5"} onChange={lightsFive}/>),
    createData('5db7ace91c9d440000a1daa0', "Light Location: 6",<Switch id={"LED6"} onChange={lightsSix}/>),
    createData('5daa9cd71c9d4400003919d4', "Light Location: 7",<Switch id={"LED7"} onChange={lightsSeven}/>)
];


export default function DataTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead style={{backgroundColor: '#D3D3D3'}}>
                    <TableRow >
                        <TableCell variant="h5" align="center">Light ID</TableCell>
                        <TableCell variant="h5" align="center">Location</TableCell>
                        <TableCell variant="h5" align="center">Switches</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{backgroundColor: '#D3D3D3'}}>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="center">
                                {row.LightID}
                            </TableCell>
                            <TableCell align="center">{row.RoomNumber}</TableCell>
                            <TableCell align="center">{row.Switches}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}