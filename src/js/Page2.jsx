import React from 'react';
import ReactDom from 'react-dom'
class Page2 extends React.Component {
    render() {
        return <H1>I am from second component</H1>;
    }
}

ReactDom.render(<Page2></Page2>, document.getElementById('world'));