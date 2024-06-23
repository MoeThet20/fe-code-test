import { router } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RNText, RNTextInput, ErrorMessage } from 'components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardSchema } from 'validation/CreditCardValidation';
import { VisaCardListSvg, VisaListSvg } from 'assets/svg';
import { COLORS, SIZES } from 'styles';
import Layout from 'layout';
import { FormPropertyName } from 'utils';
import { CreditCardParams, createCreditCard } from 'services/credit.service';

const CARD_NUMBER_PLACEHOLDER = '0000 0000 0000 0000';
const CARD_NAME_PLACEHOLDER = 'Ty Lee';
const EXPIRY_DATE_PLACEHOLDER = 'MM/YY';
const CARD_NUMBER_LENGTH = 19;
const EXPIRY_DATE_LENGTH = 5;
const CVV_LENGTH = 3;

const CreditCardInfo = () => {
    const { CARD_NUMBER, CARD_NAME, CARD_EXPIRE_DATE, CARD_CVV } = FormPropertyName.CreditCardPropertyName;

    const methods = useForm<CreditCardParams>({
        resolver: zodResolver(creditCardSchema),
        reValidateMode: 'onChange'
    });
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleGoBack = () => router.back();

    const onSubmit: SubmitHandler<CreditCardParams> = async (data) => {
        const response = await createCreditCard(data);
        if (!response) {
            toggleErrorMessage();
            return;
        }
        router.back();
    };

    const toggleErrorMessage = () => setShowErrorMessage((prev) => !prev);

    return (
        <>
            <Layout onPress={handleGoBack}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <FormProvider {...methods}>
                            <View style={styles.cardContainer}>
                                <RNTextInput
                                    name={CARD_NUMBER}
                                    label="ATM/Debit/Credit card number"
                                    isCreditCardNumber
                                    maxLength={CARD_NUMBER_LENGTH}
                                    placeholder={CARD_NUMBER_PLACEHOLDER}
                                    rightIcon={<VisaCardListSvg />}
                                    keyboardType="number-pad"
                                />
                                <RNTextInput
                                    name={CARD_NAME}
                                    label="Name on Card"
                                    placeholder={CARD_NAME_PLACEHOLDER}
                                />
                                <View style={styles.expireCvvWrapper}>
                                    <View style={styles.expireCvv}>
                                        <RNTextInput
                                            name={CARD_EXPIRE_DATE}
                                            label="Expiry date"
                                            isExpirationDate
                                            maxLength={EXPIRY_DATE_LENGTH}
                                            placeholder={EXPIRY_DATE_PLACEHOLDER}
                                        />
                                    </View>
                                    <View style={styles.expireCvv}>
                                        <RNTextInput
                                            name={CARD_CVV}
                                            label="CVV"
                                            maxLength={CVV_LENGTH}
                                            secureTextEntry
                                        />
                                    </View>
                                </View>
                            </View>
                        </FormProvider>
                        <View style={styles.svgWrapper}>
                            <VisaListSvg />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={methods.handleSubmit(onSubmit)}
                        style={styles.submitButton}
                        activeOpacity={0.7}
                    >
                        <RNText style={styles.submitText}>Add Card</RNText>
                    </TouchableOpacity>
                </View>
            </Layout>
            <ErrorMessage
                description="Adding card is fail. Try again!"
                isOpen={showErrorMessage}
                onClose={toggleErrorMessage}
            />
        </>
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
