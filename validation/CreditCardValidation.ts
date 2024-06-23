import { FormPropertyName } from 'utils';
const { CARD_NUMBER, CARD_NAME, CARD_EXPIRE_DATE, CARD_CVV } = FormPropertyName.CreditCardPropertyName;
import { z } from 'zod';

export const creditCardSchema = z.object({
    [CARD_NUMBER]: z
        .string({
            required_error: 'Card number is required'
        })
        .min(19, { message: 'Card Number must be 16' })
        .regex(/^[0-9 ]*$/, 'Invalid card number'),
    [CARD_NAME]: z.string({ required_error: 'Card name is required.' }).min(1, { message: 'Card name is required.' }),
    [CARD_EXPIRE_DATE]: z
        .string({ required_error: 'Card expire date is required.' })
        .min(5, { message: 'Month and year is required' }),
    [CARD_CVV]: z.string({ required_error: 'CVV is required.' }).min(3, { message: 'CVV require 3 digits.' })
});

export type CreditCardSchema = z.infer<typeof creditCardSchema>;
