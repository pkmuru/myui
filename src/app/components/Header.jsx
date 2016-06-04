import React from 'react';


const style = {
    margin: 12,
};

export default class Header extends React.Component {


    render() {
        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Console</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Users <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false">Site <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#">AMERICAS</a></li>
                                <li><a href="#">EMEA</a></li>
                                <li><a href="#">APAC</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li className="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">

                        <li>
                            <div class="input-group">
                                <input type="text" className="form-control" placeholder="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}