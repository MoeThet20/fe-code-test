import { View, StyleSheet } from 'react-native';
import React from 'react';
import RNText from './RNText';
import { COLORS, SIZES } from 'styles';
import { VisaSvg } from 'assets/svg';

const PART_ONE = 0;
const PART_TWO = 1;
const FIRST_INDEX = 0;

const Card = () => {
    const number = '1234567890123456';

    const transformStringToArray = (input: string): [number[], number[]] => {
        const part1: number[] =
            input
                .slice(0, 12)
                .match(/.{1,4}/g)
                ?.map(Number) || [];
        const part2: number[] = [Number(input.slice(12))];
        return [part1, part2];
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <VisaSvg />
                </View>
                <View style={styles.cardNumberWrapper}>
                    {transformStringToArray(number)[PART_ONE].map((_, index) => (
                        <View style={styles.dotWrapper} key={index}>
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </View>
                    ))}
                    <RNText style={styles.lastNumber}>
                        {JSON.stringify(transformStringToArray(number)[PART_TWO][FIRST_INDEX])}
                    </RNText>
                </View>
                <View style={styles.nameExpire}>
                    <View>
                        <RNText style={styles.textHeader}>Name on Card</RNText>
                        <RNText style={styles.textValue}>Ty Lee</RNText>
                    </View>
                    <View>
                        <RNText style={styles.textHeader}>Expires</RNText>
                        <RNText style={styles.textValue}>12/25</RNText>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 25,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 15
    },
    wrapper: {
        width: '80%'
    },
    cardNumberWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    nameExpire: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textHeader: {
        fontSize: SIZES.xs,
        color: COLORS.gray,
        marginBottom: 15
    },
    textValue: {
        fontSize: SIZES.sm,
        fontWeight: 'bold'
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.dot,
        marginRight: 5
    },
    dotWrapper: {
        flexDirection: 'row'
    },
    lastNumber: {
        letterSpacing: 2,
        fontWeight: '700',
        color: COLORS.gray
    }
});
