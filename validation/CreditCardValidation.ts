import { FormPropertyName } from 'utils';
const { CARD_NUMBER } = FormPropertyName.CreditCardPropertyName;
import { z } from 'zod';

export const creditCardSchema = z.object({
    [CARD_NUMBER]: z.string({ required_error: 'Phone number is required!' })
});

export type CreditCardSchema = z.infer<typeof creditCardSchema>;
