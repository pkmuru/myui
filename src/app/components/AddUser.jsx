/**
 * Created by muru on 5/31/2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';

export  default class AddUser extends React.Component {
    render() {
        return <Paper>
            <input type="text" className="form-control"/>
            <input type="button" class="form-control"/>
        </Paper>
    }
}