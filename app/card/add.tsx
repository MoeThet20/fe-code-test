import { router } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { RNTextInput } from 'components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardSchema, CreditCardSchema } from 'validation/CreditCardValidation';
import { VisaCardListSvg, VisaListSvg } from 'assets/svg';
import { COLORS } from 'styles';
import Layout from 'layout';

const CreditCardInfo = () => {
    const methods = useForm<CreditCardSchema>({
        resolver: zodResolver(creditCardSchema),
        reValidateMode: 'onChange'
    });

    const handleGoBack = () => router.back();

    return (
        <Layout onPress={handleGoBack}>
            <View style={styles.container}>
                <FormProvider {...methods}>
                    <View style={styles.cardContainer}>
                        <RNTextInput name="cardNumber" label="ATM/Debit/Credit card number" />
                        <RNTextInput name="cardName" label="Name on Card" />

                        <View style={styles.expireCvvWrapper}>
                            <View style={styles.expireCvv}>
                                <RNTextInput name="expireDate" label="Expiry date" />
                            </View>
                            <View style={styles.expireCvv}>
                                <RNTextInput name="cvv" label="CVV" />
                            </View>
                        </View>
                    </View>
                </FormProvider>
                <View style={styles.svgWrapper}>
                    <VisaListSvg />
                </View>
            </View>
        </Layout>
    );
};

export default CreditCardInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
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
    }
});
