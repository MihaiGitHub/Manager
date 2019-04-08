import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    // As soon as this component is about to show on the device get employee list
    componentWillMount(){
        this.props.employeesFetch();

        // Call helper method to create datasource
        // No matter from where this component is accessed, will always create datasource*
        this.createDataSource(this.props);
    }

    // Good lifecycle method for reacting to any change in the component props object
    // Gets called whenever are about to receive a new set of props to rerender the component with
    // Gets called with the first set of props that the component is about to get fed; captured as first argument
    componentWillReceiveProps(nextProps){
        // Get access to both set of props old/new
        // nextProps are the next set of props that this component will be rendered with
        // this.props is still the old set of props
        // Inside here can recreate data source and will have access to this.props.employees
        this.createDataSource(nextProps);
    }

    // Destructure employees out of arguments object
    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee} />;
    }

    render(){
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    // Loop over state.employees object and for each key value pair run the => function
    // uid is the key of the employee; the key of the record
    // Create an employees array from the object; 0: { shift: 'Monday', name: 'S', id: '123' }
    const employees = _.map(state.employees, (val, uid) => {
        // return a new object with all the properties of the employee model and the user id
        return { ...val, uid }; // { shift: 'Monday', name: 'S', id: '123' }
    });

    return {employees};
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);