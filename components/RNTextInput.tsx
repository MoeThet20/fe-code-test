import {
    View,
    TextInput,
    StyleSheet,
    type StyleProp,
    type ViewStyle,
    type TextStyle,
    TextInputProps as RNTextInputProps
} from 'react-native';
import React from 'react';
import RNText from './RNText';
import { COLORS, FONTS } from 'styles';
import { useController } from 'react-hook-form';

export interface TextInputProps extends RNTextInputProps {
    name: string;
    rules?: Object;
    label?: string;
    defaultValue?: string;
    containerStyle?: StyleProp<ViewStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
    isTextArea?: boolean;
    password?: boolean;
    rightIcon?: JSX.Element;
}

const RNTextInput = (props: TextInputProps) => {
    return <ControlledInput {...props} />;
};

const ControlledInput = (props: TextInputProps): JSX.Element => {
    const {
        name,
        rules,
        label,
        isTextArea,
        password,
        defaultValue,
        containerStyle,
        errorTextStyle,
        rightIcon,
        ...inputProps
    } = props;

    const { field } = useController({ name, rules, defaultValue });
    return (
        <View style={styles.container}>
            {label && <RNText style={styles.label}>{label}</RNText>}
            <TextInput
                style={{
                    ...styles.textInput
                }}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                placeholderTextColor={COLORS.gray}
                {...inputProps}
            />
        </View>
    );
};

export default RNTextInput;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    label: {
        fontFamily: FONTS.regular,
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 5,
        padding: 10,
        marginTop: 5
    }
});
