import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pagamentos() {
    return (
        <view style={StyleSheet.container}>
            <Text>Pagamentos</Text>
        </view>
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