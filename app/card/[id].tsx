import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { VisaCardSvg } from 'assets/svg';
import { RNText } from 'components';

const Home = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingHorizontal: 20
            }}
        >
            <View style={{ marginBottom: 7 }}>
                <VisaCardSvg />
            </View>
            <View style={{ marginVertical: 10 }}>
                <RNText>No Cards Found List</RNText>
            </View>
            <View style={{ marginVertical: 5 }}>
                <RNText style={{ textAlign: 'center' }}>We recommend adding a card for easy payment</RNText>
            </View>
            <TouchableOpacity style={{ marginVertical: 10 }} activeOpacity={0.7}>
                <RNText style={{ color: '#4AD8DA' }}>Add New Card</RNText>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
