export default function arrayToStringService() {
    return {
        convertArray(arrayOfStrings) {
            let arrayLength = arrayOfStrings.length;
            if (arrayLength === 1) {
                return arrayOfStrings[0];
            } else if (arrayLength === 2) {
                return `${arrayOfStrings[0]} and ${arrayOfStrings[1]}`;
            } else if (arrayLength >= 3) {
                let newString = '';
                arrayOfStrings.forEach((element, index) => {
                    if (index < (arrayLength - 1)) newString += `${element}, `;
                    else newString += `and ${element}`;
                });
                return newString;
            } else {
                return '';
            };
        }
    };
};