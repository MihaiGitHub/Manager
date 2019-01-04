import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, InputAccessoryView, Button, Input } from './common';

class EmployeeCreate extends Component {
    onButtonPress(){
        const { name, phone, shift } = this.props;

        // have access to this action in props because it is in the connect function at the bottom
        // If a shift is not provided than use Monday
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Jane" 
                        value={this.props.name} 
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone" 
                        placeholder="555-555-5555" 
                        value={this.props.phone} 
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </CardSection>
{/* This is a custom created component and style is only a property passed down into it 
Cardsection default style is flexDirection: 'row' (all it's children being layed out left to right)  
flexDirection: 'column' will place the CardSection children in a column (one on top of the other)*/}
               <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>

                        <Picker style={{ width: '90%', alignSelf: 'center' }}
                            selectedValue={this.props.shift} 
                            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })} 
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>

                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 25
    }
};

// mapStateToProps is needed when properties from state are needed in this component
const mapStateToProps = (state) => {
    // Pulling off properties from state employeeForm which is created from reducer
    const { name, phone, shift } = state.employeeForm;

    // Return these values to be available in component after it rerenders
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);