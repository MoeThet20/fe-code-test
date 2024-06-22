import React from 'react';
import { Text, type TextStyle, StyleSheet } from 'react-native';
import { FONTS } from 'styles';

type TextProps = {
    style?: TextStyle;
    children: string | string[];
};
export default function CustomText(props: TextProps) {
    return (
        <Text {...props} style={[{ ...props?.style }, styles.fontName]}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    fontName: {
        fontFamily: FONTS.regular
    }
});
