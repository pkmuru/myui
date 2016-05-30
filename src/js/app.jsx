import React from 'react';
import ReactDom from 'react-dom'

class Hello extends React.Component {
    render() {
        return <h1>Hello es6 and react3</h1>
    }
}

ReactDom.render(<Hello></Hello>, document.getElementById('hello'));
