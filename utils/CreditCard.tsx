const formatExpirationDate = (value: string) => {
    let formattedDate = value.replace(/\D/g, '');

    if (formattedDate.length > 2) {
        formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    }

    if (formattedDate.length > 5) {
        formattedDate = formattedDate.slice(0, 5);
    }
    return formattedDate;
};

const creditCardFormat = (cardNumber: string) => {
    let formattedNumber = cardNumber.replace(/ /g, '');

    for (let i = 4; i < formattedNumber.length; i += 5) {
        formattedNumber = `${formattedNumber.slice(0, i)} ${formattedNumber.slice(i)}`;
    }

    if (formattedNumber.length > 19) {
        formattedNumber = formattedNumber.slice(0, 19);
    }
    return formattedNumber;
};

export default {
    formatExpirationDate,
    creditCardFormat
};
