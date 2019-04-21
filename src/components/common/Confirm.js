import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles;
    return (
        <Modal
            transparent /* see through */
            visible={visible} /* true or false */
            animationType="slide"
            onRequestClose={() => {}} /* on Android required to pass this prop */
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    {/* No bind, no (); Passing a reference to the function, not invoking it */}
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center' // Center content
    },
    textStyle: {
        flex: 1, // Text can properly wrap on the page
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40 // Space between each line of text
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Black with opacity of .75 (a bit see through)
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };