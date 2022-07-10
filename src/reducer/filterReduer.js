const initialState = {
    sortByPrice:null,
    filterByGender:null,
    filterBySize:[],
    filterByBrand:[],
} 

const filterReducer = (state , action ) => {
    const { filterBySize , filterByBrand  } = state ;

    switch (action.type) {
        case "CLEARALL":
            return initialState
        case "SORTBY":
            return { ...state , sortByPrice:action.payload };
        case "FILTERBYGENDER":
            return { ...state , filterByGender:action.payload };
        case "FILTERBYSIZE":
          return { ...state, filterBySize: filterBySize.some((size) => size === action.payload)
            ? filterBySize.filter((size) => size !== action.payload)
            : [...state.filterBySize, action.payload] };
        case "FILTERBYBRAND":
            return { ...state, filterByBrand: filterByBrand.some((brand) => brand === action.payload)
                ? filterByBrand.filter((brand) => brand !== action.payload)
                : [...state.filterByBrand, action.payload] };
        default:
            return { ...state };
    }
}

export { initialState , filterReducer }