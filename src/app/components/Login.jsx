import React from 'react';
import Paper from  'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
    render() {
        return <Paper className="text-center view">
            <h2 >{tr.t('login')}</h2>

            <div>


                <div className="strike"><span className="or"></span></div>
                <div>


                    <form>
                        <div className="signup-options text-center form">
                            {this.renderError()}
                            <div className='form-group username'>
                                <TextField
                                    id='username'
                                    ref="username"
                                    hintText={tr.t('Username')}
                                    errorText={errors.username && errors.username[0]}
                                />
                            </div>
                            <div className='form-group password'>
                                <TextField
                                    id='password'
                                    ref="password"
                                    hintText={tr.t('password')}
                                    type='password'
                                    errorText={errors.password && errors.password[0]}
                                />
                            </div>

                            <div>

                            </div>
                        </div>
                    </form>
                </div>
                <div className="strike"><span className="or"></span></div>
                <FlatButton
                    label={tr.t('forgotPassword')}
                    containerElement={<Link to="/forgot" />}
                    linkButton={true}
                />
            </div>
        </Paper>
    }
}