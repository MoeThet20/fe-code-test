import { FormPropertyName } from 'utils';
const { CARD_NUMBER, CARD_NAME, CARD_EXPIRE_DATE, CARD_CVV } = FormPropertyName.CreditCardPropertyName;
import { z } from 'zod';

export const creditCardSchema = z.object({
    [CARD_NUMBER]: z.string({ required_error: 'Card number is required.' }),
    [CARD_NAME]: z.string({ required_error: 'Card name is required.' }),
    [CARD_EXPIRE_DATE]: z.string({ required_error: 'Card expire date is required.' }),
    [CARD_CVV]: z.string({ required_error: 'CVV is required.' })
});

export type CreditCardSchema = z.infer<typeof creditCardSchema>;
