/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return []; // Return an empty array for an empty input.
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]]; // Return the single element twice for a single-element input.
    } else {
        return [numbers[0], numbers[numbers.length - 1]]; // Return the first and last elements for other cases.
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledArray = numbers.map((number) => number * 3);
    return tripledArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(strings: string[]): number[] {
    const integers = strings.map((str) => {
        const parsedInt = parseInt(str, 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers = amounts.map((amount) => {
        // Remove "$" symbols, if present, and then parse as an integer.
        const parsedInt = parseInt(amount.replace("$", ""), 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });

    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const processedMessages = messages
        .filter((message) => !message.endsWith("?"))
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );

    return processedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true; // Return true for an empty list.
    }

    const validColors = ["red", "blue", "green"];
    return colors.every((color) => validColors.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((acc, num) => acc + num, 0);
    const addendsString = addends.join("+");

    return `${sum}=${addendsString}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let foundNegative = false;
    const result: number[] = [];

    for (const value of values) {
        if (value < 0 && !foundNegative) {
            result.push(value);
            result.push(sum);
            foundNegative = true;
        } else {
            result.push(value);
            sum += value;
        }
    }

    if (!foundNegative) {
        result.push(sum);
    }

    return result;
}
