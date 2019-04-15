import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
    render(){
        return (
            <Card>
                <CardSection>
                    <Button>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}