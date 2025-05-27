const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./snacks.js');

describe('Manipolazione di stringhe', () => {
    // Snack 1 
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials('Emma Marrone')).toBe('EM');
        expect(getInitials('emma marrone')).toBe('EM');
    })

    // Snack 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug('Gladiatore')).toBe('gladiatore');
    })

    // Snack 4
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug("Il Gladiatore")).toBe("il-gladiatore");
    })

    // Snack 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("anna")).toBeTruthy();
        expect(isPalindrome("annamaria")).toBeFalsy();
    })

    // Snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow();
        expect(() => createSlug(null)).toThrow();
    })
});

describe('Manipolazione di array e numeri', () => {
    // Snack 3 
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([5, 5, 5])).toBe(5);
        expect(() => average([5, "5", 5])).toThrow();
    });

    // Snack 7
    const posts = [
        {
            id: 1,
            title: "Il primo post",
            slug: "il-primo-post"
        },
        {
            id: 2,
            title: "Il secondo post",
            slug: "il-secondo-post"
        },
        {
            id: 3,
            title: "Il terzo post",
            slug: "il-terzo-post"
        }
    ];

    test(`La funzione findPostById restituisce il post corretto dato l'array di post e l'id`, () => {
        expect(findPostById(posts, 1)).toBe(posts[0]);
        expect(() => findPostById(posts, "1")).toThrow();
        expect(() => findPostById(posts, "1")).toThrow();
        expect(() => findPostById(posts, 11)).toThrow();
        expect(() => findPostById("posts", 1)).toThrow();
    });
});