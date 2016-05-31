import React from 'react';
import Paper from  'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
    render() {
        return <div className="col-sm-6 col-md-4">
            <h2 >Login</h2>

            <div className="thumbnail">


                <div className="strike"><span className="or"></span></div>
                <div>


                    <form>
                        <div className="signup-options text-center form">

                            <div className='form-group username'>
                                <TextField
                                    id='username'
                                    ref="username"
                                    hintText="Username"

                                />
                            </div>
                            <div className='form-group password'>
                                <TextField
                                    id='password'
                                    ref="password"
                                    hintText="Password"
                                    type='password'

                                />
                            </div>


                        </div>


                    </form>
                </div>
                <div className="strike"><span className="or"></span></div>

            </div>
        </div>

    }
}