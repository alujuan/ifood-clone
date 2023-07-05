import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pagamentos() {
    return (
        <View style={StyleSheet.container}>
            <Text>Pagamentos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});