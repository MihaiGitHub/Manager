import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
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
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 25
    }
};

// MapStateToProps to pull in the name, phone, and shift of employee
const mapStateToProps = (state) => {
    // Reach out to the state of employee form and pull off values to bring to this component properties
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);