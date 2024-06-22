import { router } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { RNText, RNTextInput } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardSchema, CreditCardSchema } from 'validation/CreditCardValidation';
import { VisaCardListSvg, VisaListSvg } from 'assets/svg';
import { COLORS, SIZES } from 'styles';
import Layout from 'layout';

const CARD_NUMBER_PLACEHOLDER = '0000 0000 0000 0000';
const CARD_NAME_PLACEHOLDER = 'Ty Lee';
const EXPIRY_DATE_PLACEHOLDER = 'MM/YY';
const CARD_NUMBER_LENGTH = 19;
const EXPIRY_DATE_LENGTH = 5;
const CVV_LENGTH = 3;

const CreditCardInfo = () => {
    const methods = useForm<CreditCardSchema>({
        resolver: zodResolver(creditCardSchema),
        reValidateMode: 'onChange'
    });

    const handleGoBack = () => router.back();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Layout onPress={handleGoBack}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <FormProvider {...methods}>
                        <View style={styles.cardContainer}>
                            <RNTextInput
                                name="cardNumber"
                                label="ATM/Debit/Credit card number"
                                isCreditCardNumber
                                maxLength={CARD_NUMBER_LENGTH}
                                placeholder={CARD_NUMBER_PLACEHOLDER}
                                rightIcon={<VisaCardListSvg />}
                            />
                            <RNTextInput name="cardName" label="Name on Card" placeholder={CARD_NAME_PLACEHOLDER} />
                            <View style={styles.expireCvvWrapper}>
                                <View style={styles.expireCvv}>
                                    <RNTextInput
                                        name="expireDate"
                                        label="Expiry date"
                                        isExpirationDate
                                        maxLength={EXPIRY_DATE_LENGTH}
                                        placeholder={EXPIRY_DATE_PLACEHOLDER}
                                    />
                                </View>
                                <View style={styles.expireCvv}>
                                    <RNTextInput name="cvv" label="CVV" maxLength={CVV_LENGTH} secureTextEntry />
                                </View>
                            </View>
                        </View>
                    </FormProvider>
                    <View style={styles.svgWrapper}>
                        <VisaListSvg />
                    </View>
                </View>
                <TouchableOpacity onPress={methods.handleSubmit(onSubmit)} style={styles.submitButton}>
                    <RNText style={styles.submitText}>Add Card</RNText>
                </TouchableOpacity>
            </View>
        </Layout>
    );
};

export default CreditCardInfo;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    wrapper: {
        alignItems: 'center'
    },
    cardContainer: {
        width: '100%'
    },
    expireCvvWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expireCvv: {
        width: '45%'
    },
    svgWrapper: {
        marginTop: 40
    },
    submitButton: {
        width: '100%',
        backgroundColor: COLORS.cyan,
        padding: 10,
        borderRadius: 20,
        marginVertical: 10
    },
    submitText: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: SIZES.lg,
        fontWeight: 'bold'
    }
});
