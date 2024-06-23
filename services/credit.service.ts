import Omise from 'omise-react-native';
import Config from 'react-native-config';
import { CreditCard } from 'utils';

// Omise.config(Config.PUBLIC_KEY, Config.SECRET_KEY, '2024-06-23');
Omise.config('pkey_test_5wvisbxphp1zapg8ie6', 'skey_test_5wvisdjjoqmfof5npzw', '2017-11-12');

export type CreditCardParams = {
    cardNumber: string;
    cardName: string;
    expireDate: string;
    cvv: number;
};

const MONTH = 0;
const YEAR = 1;

export const createCreditCard = async (params: CreditCardParams) => {
    console.log(Config.PUBLIC_KEY, Config.SECRET_KEY, Config);
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
        console.log(request);
        const data = await Omise.createToken(request);
        console.log(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};
