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

const convertTwoDigitYearToFourDigit = (year: string): number => {
    const currentYear = new Date().getFullYear();
    const yearNumber = parseInt(year, 10);
    const centuryCutoff = currentYear % 100;

    return Number(`${Math.floor(currentYear / 100)}${yearNumber}`);
};

const removeSpaces = (str: string): string => {
    return str.replace(/\s+/g, '');
};
const convertToTwoDigitMonth = (month: number): string => {
    return month < 10 ? '0' + month : month.toString();
};

const convertToTwoDigitYear = (year: number): string => {
    return year.toString().slice(-2);
};

export default {
    formatExpirationDate,
    creditCardFormat,
    convertTwoDigitYearToFourDigit,
    removeSpaces,
    convertToTwoDigitMonth,
    convertToTwoDigitYear
};
