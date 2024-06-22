import { Link } from 'expo-router';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { PlusSvg, VisaCardSvg } from 'assets/svg';
import { RNText, Card } from 'components';
import { CARD_ADD } from 'const/routes';
import { COLORS, SIZES } from 'styles';
import Layout from 'layout';
import { useAppSelector } from 'hooks/ReduxHooks';

const HEADER = 'Cards';
const ZERO = 0;

const Home = () => {
    const { creditCards } = useAppSelector((state) => state.creditCard);
    const hasCreditCard = creditCards.length > ZERO;

    const rightIcon = (
        <Link href={CARD_ADD}>
            <PlusSvg />
        </Link>
    );

    return (
        <Layout header={HEADER} rightIcon={rightIcon}>
            {hasCreditCard ? (
                <View style={styles.cardContainer}>
                    <Card />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <VisaCardSvg />
                    </View>
                    <View style={styles.innerContainer}>
                        <RNText style={styles.noCardText}>No Cards Found</RNText>
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
        alignItems: 'center',
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
    noCardText: {
        fontSize: SIZES.lg
    },
    middleTextStyle: {
        textAlign: 'center',
        fontSize: SIZES.lg
    },
    newCardTextStyle: {
        color: COLORS.cyan,
        fontSize: SIZES.lg
    }
});
