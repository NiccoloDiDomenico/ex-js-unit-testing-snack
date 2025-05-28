const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require('./snacks.js');

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

    let posts;

    beforeEach(() => {
        posts = [
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
    })

    // Snack 7
    test(`La funzione findPostById restituisce il post corretto dato l'array di post e l'id`, () => {
        expect(findPostById(posts, 1)).toBe(posts[0]);
        expect(() => findPostById(posts, "1")).toThrow();
        expect(() => findPostById(posts, "1")).toThrow();
        expect(() => findPostById(posts, 11)).toThrow();
        expect(() => findPostById("posts", 1)).toThrow();
    });

    // Snack 8 (Bonus)
    test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
        addPost(posts, { id: 4, title: "il quarto post", slug: "il-quarto-post" });
        expect(posts).toHaveLength(4);
    })

    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(2);
    })

    // Snack 9 (Bonus)
    test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
        expect(() => addPost(posts, { id: 1, title: "Il primo post", slug: "il-primo-post" })).toThrow();
        expect(() => addPost(posts, { id: 4, title: "Il quarto post", slug: "il-primo-post" })).toThrow();
    })

    // Snack 10 (Bonus)
    test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
        expect(createSlug("Il primo post", posts)).toBe("il-primo-post-1");
    })
});