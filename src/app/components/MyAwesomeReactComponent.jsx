import React from 'react';
import Login from './Login';
import RaisedButton from 'material-ui/RaisedButton';
import Heaader from './Header'
export default class MyAwesomeReactComponent extends React.Component {
    render() {
        return <div>

            <Heaader title="My App"
                     iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

           
            <input type="text" className="form-control"/>
            <input type="button" className="btn btn-default" value="Click here"/>

        </div>
    }
}

