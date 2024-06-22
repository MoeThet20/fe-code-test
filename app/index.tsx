import { Link } from 'expo-router';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { PlusSvg, VisaCardSvg } from 'assets/svg';
import { RNText, Card } from 'components';
import { CARD_ADD } from 'const/routes';
import { COLORS } from 'styles';
import Layout from 'layout';

const HEADER = 'Cards';
const isCard = false;

const Home = () => {
    const rightIcon = (
        <Link href={CARD_ADD}>
            <PlusSvg />
        </Link>
    );

    return (
        <Layout header={HEADER} rightIcon={rightIcon}>
            {isCard ? (
                <View style={styles.cardContainer}>
                    <Card />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <VisaCardSvg />
                    </View>
                    <View style={styles.innerContainer}>
                        <RNText>No Cards Found</RNText>
                    </View>
                    <View style={styles.innerContainer}>
                        <RNText style={styles.middleTextStyle}>We recommend adding a card for easy payment</RNText>
                    </View>
                    <Link href={CARD_ADD} style={styles.innerContainer}>
                        <RNText style={styles.newCardTextStyle}>Add New Card</RNText>
                    </Link>
                </View>
            )}
        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    innerContainer: {
        marginVertical: 10
    },
    middleTextStyle: {
        textAlign: 'center'
    },
    newCardTextStyle: {
        color: '#4AD8DA'
    }
});
