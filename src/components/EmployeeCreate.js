import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, InputAccessoryView, Button, Input } from './common';

class EmployeeCreate extends Component {
    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Jane" 
                        value={this.props.name} 
                        onChangeText={text => this.props.employeeCreate({ prop: 'name', value: text })} />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone" 
                        placeholder="555-555-5555" 
                        value={this.props.phone} 
                        onChangeText={text => this.props.employeeCreate({ prop: 'phone', value: text })} />
                </CardSection>

                <CardSection>
                    <Button>Create</Button>
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

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);