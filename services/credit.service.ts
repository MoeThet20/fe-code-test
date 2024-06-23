import Omise from 'omise-react-native';
import { addCreditCard } from 'redux/slices/creditCardSlice';
import { store } from 'redux/store';
import { CreditCard } from 'utils';

Omise.config(process.env.EXPO_PUBLIC_KEY, process.env.EXPO_SECRET_KEY, '2024-06-23');

export type CreditCardParams = {
    cardNumber: string;
    cardName: string;
    expireDate: string;
    cvv: number;
};

const MONTH = 0;
const YEAR = 1;

export const createCreditCard = async (params: CreditCardParams) => {
    const splittedMothYear = params.expireDate.split('/');
    try {
        const request = {
            card: {
                name: params.cardName,
                city: 'Bangkok',
                postal_code: 10320,
                number: params.cardNumber.trim(),
                expiration_month: Number(splittedMothYear[MONTH]),
                expiration_year: CreditCard.convertTwoDigitYearToFourDigit(splittedMothYear[YEAR]),
                security_code: Number(params.cvv)
            }
        };
        const data = await Omise.createToken(request);

        if (data) {
            store.dispatch(addCreditCard(request.card));
            return true;
        }
    } catch (error) {
        return false;
    }
};
