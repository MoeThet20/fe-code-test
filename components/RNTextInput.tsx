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
import { useController, useFormContext } from 'react-hook-form';
import { CreditCard } from 'utils';

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
    isExpirationDate?: boolean;
    isCreditCardNumber?: boolean;
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
        isExpirationDate,
        isCreditCardNumber,
        ...inputProps
    } = props;

    const formContext = useFormContext();
    const { formState } = formContext;
    const hasError = Boolean(formState?.errors[name]);

    const { field } = useController({ name, rules, defaultValue });

    const handleChange = (text: string) => {
        if (isExpirationDate) {
            text = CreditCard.formatExpirationDate(text);
        }
        if (isCreditCardNumber) {
            text = CreditCard.creditCardFormat(text);
        }
        field.onChange(text);
    };

    return (
        <View style={styles.container}>
            {label && <RNText style={styles.label}>{label}</RNText>}
            <View style={rightIcon && styles.textInputWrapper}>
                <TextInput
                    style={rightIcon ? styles.textInputRightIcon : styles.textInput}
                    onChangeText={handleChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    placeholderTextColor={COLORS.gray}
                    {...inputProps}
                />
                {rightIcon && rightIcon}
            </View>
            {hasError ? (
                <View>
                    <RNText style={styles.errorMessage}>{formState?.errors[name]?.message?.toString() || ''}</RNText>
                </View>
            ) : null}
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
    textInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 5
    },
    textInput: {
        fontFamily: FONTS.regular,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 5
    },
    textInputRightIcon: {
        fontFamily: FONTS.regular,
        borderColor: COLORS.gray,
        width: '75%',
        letterSpacing: 2
    },
    errorMessage: {
        color: COLORS.red
    }
});
