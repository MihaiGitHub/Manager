import _ from 'lodash';
import React, { Component } from 'react';
// Connect component to redux to access app state and action creators
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
// This action creator is what changes the state of the reducer with new employee data
import { employeeUpdate, employeeSave } from '../actions';
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
        // employee is passed in as a prop from Actions.employeeEdit in ListItem.js
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress(){
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
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
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
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

export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave 
})(EmployeeEdit);