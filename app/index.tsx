// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import { VisaCardSvg } from 'assets/svg';
// import { RNText, Card, RNTextInput } from 'components';

// const Home = () => {
//     return (
//         <View style={styles.container}>
//             {/* <View style={styles.innerContainer}>
//                 <VisaCardSvg />
//             </View>
//             <View style={styles.innerContainer}>
//                 <RNText>No Cards Found</RNText>
//             </View>
//             <View style={styles.innerContainer}>
//                 <RNText style={styles.middleTextStyle}>We recommend adding a card for easy payment</RNText>
//             </View>
//             <TouchableOpacity style={styles.innerContainer} activeOpacity={0.7}>
//                 <RNText style={styles.newCardTextStyle}>Add New Card</RNText>
//             </TouchableOpacity> */}
//             {/* <Card /> */}
//             <View>
//                 <RNTextInput name="cardNumber" />
//                 <View>
//                     <RNText>ATM/Debit/Credit card number</RNText>
//                 </View>
//                 <View>
//                     <RNText>Name on Card</RNText>
//                 </View>
//                 <View>
//                     <RNText>Expiry date</RNText>
//                 </View>
//                 <View>
//                     <RNText>CVV</RNText>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         paddingHorizontal: 20
//     },
//     innerContainer: {
//         marginVertical: 10
//     },
//     middleTextStyle: {
//         textAlign: 'center'
//     },
//     newCardTextStyle: {
//         color: '#4AD8DA'
//     }
// });

import { View, StyleSheet } from 'react-native';
import React from 'react';
import { RNText, RNTextInput } from 'components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardSchema, CreditCardSchema } from 'validation/CreditCardValidation';
import { UseFormReturn, FieldValues } from 'react-hook-form';
import { VisaCardListSvg, VisaListSvg } from 'assets/svg';

interface MyFormChildProps extends UseFormReturn<FieldValues> {}

const CreditCardInfo = () => {
    const methods = useForm<CreditCardSchema>({
        resolver: zodResolver(creditCardSchema),
        reValidateMode: 'onChange'
    });

    return (
        <View style={styles.container}>
            <FormProvider {...methods}>
                <View>
                    <RNTextInput name="cardNumber" label="ATM/Debit/Credit card number" />
                </View>
                <View>
                    <RNTextInput name="cardNumber" label="Name on Card" />
                </View>
                <View>
                    <RNTextInput name="cardNumber" label="Expiry date" />
                </View>
                <View>
                    <RNTextInput name="cardNumber" label="CVV" />
                </View>
            </FormProvider>
            <VisaListSvg />
        </View>
    );
};

export default CreditCardInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    innerContainer: {
        marginVertical: 10
    },
    middleTextStyle: {
        textAlign: 'center'
    },
    newCardTextStyle: {
        color: '#4AD8DA'
    }
});
