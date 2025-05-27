const getInitials = (fullName) => {
    const [name, lastName] = fullName.split(' ');
    return `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

const createSlug = (string) => {
    if (!string) {
        throw new Error("Inserire una stringa valida!");
    }
    return string.toLowerCase().replaceAll(" ", "-");
}

const average = (numbers) => {
    if (!numbers.every(num => typeof num === 'number')) {
        throw new Error("Usare solo numeri!");
    }
    let sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length
}

const isPalindrome = (string) => {
    if (string.split("").reverse().join("") === string) {
        return true
    }
}

const findPostById = (array, id) => {
    if (typeof id !== 'number' || id <= 0 || !array.some(elem => elem.id === id)) {
        throw new Error("Inserire un ID valido!");
    }
    if (!Array.isArray(array)) {
        throw new Error("Inserire un array valido!");
    }
    return array.find(elem => elem.id === id)
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}