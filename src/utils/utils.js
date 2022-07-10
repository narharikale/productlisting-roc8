
export const sortData = (state, data) => {
    const { sortByPrice } = state;
    if (sortByPrice && sortByPrice === "HIGHTOLOW") {
        return [...data].sort((a, b) => b.price - a.price)
    }
    if (sortByPrice && sortByPrice === "LOWTOHIGH") {
        return [...data].sort((a, b) => a.price - b.price)
    }

    return data
}


export const filterGenderData = (state, data) => {
    const { filterByGender } = state;
    if (filterByGender && filterByGender === "MEN") {
        return data.filter((product) => product.idealFor === "Men")
    }
    if (filterByGender && filterByGender === "WOMEN") {
        return data.filter((product) => product.idealFor === "Women")
    }

    return data
}

export const filterBySizeData  = (state , data) => {
    if(state.filterBySize.length === 0 ){
        return data
    }
    return data.filter((product) => product.availabelSize.filter((size) => state.filterBySize.includes(size)).length > 0 )
}

export const filterByBrandData  = (state , data) => {
    if(state.filterByBrand.length !==0 ){
        return data.filter((product) => state.filterByBrand.includes(product.brandName))
    }
    return data
}