import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        // Call action creator passwordChanged
        this.props.passwordChanged(text);
    }

    render(){
        <Card>
            <CardSection>
                <Input 
                    label="Email" 
                    placeholder="email@gmail.com" 
                    onChangeText={this.onEmailChange.bind(this)} 
                    value={this.props.email} />
            </CardSection>

            <CardSection>
                <Input 
                    secureTextEntry 
                    label="Password" 
                    placeholder="password" 
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password} />
            </CardSection>

            <CardSection>
                <Button>Login</Button>
            </CardSection>
        </Card>
    };
}

const mapStateToProps = state => {
    // email and password will be available as this.props.password in this component
    return {
        email: state.auth.email,
        password: state.auth.password
    };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);