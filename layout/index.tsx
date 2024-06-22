import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from 'styles';
import { BackArrowSvg } from 'assets/svg';

type LayoutProps = {
    customStyle?: Object;
    onPress?: () => void;
    leftIcon?: JSX.Element;
    header?: string;
    rightIcon?: JSX.Element;
    children: JSX.Element;
};

export default function Layout(props: LayoutProps) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={{ ...styles.headerContainer, ...props.customStyle }}>
                    <StatusBar backgroundColor={COLORS.white} />
                    <TouchableOpacity onPress={props.onPress} style={styles.leftBtn}>
                        {props.leftIcon ? props.leftIcon : <BackArrowSvg />}
                    </TouchableOpacity>
                    <View style={styles.headerText}>
                        {props.header && <Text style={styles.header}>{props.header}</Text>}
                    </View>
                    <View style={styles.rightBtn}>{props.rightIcon && props.rightIcon}</View>
                </View>
            </SafeAreaView>
            <View style={styles.children}>{props.children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 12,
        paddingVertical: 30
    },
    leftBtn: {
        flex: 0.1
    },
    headerText: {
        flex: 0.8,
        alignItems: 'center'
    },
    header: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.lg,
        fontWeight: 'bold'
    },
    rightBtn: {
        flex: 0.1
    },
    children: {
        flex: 1,
        backgroundColor: COLORS.white
    }
});
