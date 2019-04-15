import _ from 'lodash';
import React, { Component } from 'react';
// Connect component to redux to access app state and action creators
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
// This action creator is what changes the state of the reducer with new employee data
import { employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
    componentWillMount(){
        // Loop through the employee model coming into this component
        // Update reducer with every property on that object
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;

    }

    render(){
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);