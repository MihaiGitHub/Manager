import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmployeeCreate } from '../actions';
import { Card, CardSection, InputAccessoryView, Button, Input } from './common';

class EmployeeCreate extends Component {
    render(){
        return (
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="Jane" />
                </CardSection>

                <CardSection>
                    <Input label="Phone" placeholder="555-555-5555" />
                </CardSection>

                <CardSection>
                    <Button>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { employeeCreate })(EmployeeCreate);