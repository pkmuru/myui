import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from 'components/MyAwesomeReactComponent.jsx'
const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>

        <MyAwesomeReactComponent/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);