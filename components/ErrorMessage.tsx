import React from 'react';
import { Text, type TextStyle, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS, FONTS, SIZES } from 'styles';

type TextProps = {
    style?: TextStyle;
    description: string;
    isOpen: boolean;
    onClose: () => void;
};
export default function ErrorMessage(props: TextProps) {
    return (
        props.isOpen && (
            <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <Text style={styles.description}>{props.description}</Text>
                    <TouchableOpacity style={styles.button} onPress={props.onClose}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    secondContainer: {
        padding: 20,
        alignItems: 'center',
        width: '90%',
        borderRadius: 12,
        backgroundColor: COLORS.white
    },
    description: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.lg,
        fontWeight: 'bold',
        color: COLORS.black
    },
    button: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.red,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginTop: 12,
        width: '50%'
    },
    buttonText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.md,
        fontWeight: 'bold',
        color: COLORS.white
    }
});
