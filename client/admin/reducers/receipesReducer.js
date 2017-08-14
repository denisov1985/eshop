
export const initialState = {
    recipes: null,
    recipe: null,
    fetching: false,
    baseUrl: '/',
    location: '/',
};

export default function recipesReducer(state = initialState, action) {
    switch (action.type) {
        case 'a':
            return { ...state, fetching: true }

        case 'b':
            return { ...state, recipe: null, recipes: action.recipes, fetching: false }

        case 'c':
            return { ...state, fetching: true }

        case 'd':
            return { ...state, recipes: null, recipe: action.recipe, fetching: false }

        default:
            return state
    }
}