import React, { Component } from 'react';
// Connect component to redux to access app state and action creators
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { connect } from 'net';

class EmployeeEdit extends Component {
    render(){
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect()(EmployeeEdit);