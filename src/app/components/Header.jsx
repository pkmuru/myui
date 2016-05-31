import React from 'react';
import AppBar from  'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 12,
};

export default class Header extends React.Component {


    render() {
        return <div>

            <AppBar
                title="My Application Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

            <RaisedButton label="Default" style={style}/>
            <RaisedButton label="Primary" primary={true} style={style}/>
            <RaisedButton label="Secondary" secondary={true} style={style}/>
            <RaisedButton label="Disabled" disabled={true} style={style}/>
        </div>
    }
}