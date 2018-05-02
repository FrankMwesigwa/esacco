import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {logInAction} from '../../actions/auth/AuthActions'
import { connect } from 'react-redux'

class Login extends Component {

  submit = (values) => {
    this.props.dispatch(logInAction(values, this.props.history));
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="error-message">
          <p>{this.props.errorMessage}</p>
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <body class="hold-transition login-page">
      <div class="login-box">
      <div class="login-logo">
        <a href=""><b>e</b>Tracker</a>
      </div>
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
        
        {this.errorMessage()}
          
          <div class="form-group has-feedback">
            <Field name="username" className="form-control" component="input" type="text" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          
          <div class="form-group has-feedback"> 
            <Field name="password" className="form-control" component="input" type="password" />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"/> Remember Me
                </label>
              </div>
            </div>
            
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
           
          </div>
        </form>

        <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>

    <a href="#">I forgot my password</a><br/>
    <a href="register.html" class="text-center">Register a new membership</a>
    
      </div>
    </div>
    </body>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    errorMessage: state.auth.error 
  };
}

const reduxFormLogin = reduxForm({form: 'login'})(Login);
export default connect(mapStateToProps)(reduxFormLogin);
