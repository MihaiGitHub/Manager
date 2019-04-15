import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress(){
        const { name, phone, shift } = this.props;

        // have access to this action in props because it is in the connect function at the bottom
        // If a shift is not provided than use Monday
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render(){
        return (
            <Card> {/* Any props passed to this EmployeeCreate component will be passed on to EmployeeForm as well */}
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

// mapStateToProps is needed when properties from state are needed in this component
const mapStateToProps = (state) => {
    // Pulling off properties from state employeeForm which is created from reducer
    const { name, phone, shift } = state.employeeForm;

    // Return these values to be available in component after it rerenders
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);