const getInitials = (fullName) => {
    const [name, lastName] = fullName.split(' ');
    return `${name.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

const createSlug = (string, array) => {
    if (!string) {
        throw new Error("Inserire una stringa valida!");
    }
    let slug = string.toLowerCase().replaceAll(" ", "-");
    let counter = 1;
    if (array && array.some(post => post.slug === slug)) {
        return slug + "-" + counter++;
    }
    return slug;
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

const addPost = (array, post) => {
    const alreadyExistsId = array.some(existingPost => existingPost.id === post.id);
    if (alreadyExistsId) {
        throw new Error("Id già esistente");
    }
    const alreadyExistsSlug = array.some(existingPost => existingPost.slug === post.slug);
    if (alreadyExistsSlug) {
        throw new Error("Slug già esistente");
    }
    return array.push(post)
}

const removePost = (array, id) => {
    const index = array.findIndex(post => post.id === id);
    return array.splice(index, 1);
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost
}