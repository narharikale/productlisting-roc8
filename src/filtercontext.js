import { createContext, useContext, useReducer } from "react";
import { filterReducer , initialState } from "./reducer/filterReduer";
import { filterGenderData, sortData, filterByBrandData, filterBySizeData } from "./utils/utils";
import  allProducts from './data.json'

const filterContext = createContext(null);

const FilterProvider = ( {children}) => {
    
    const allBrands = allProducts.products.map((product) => product.brandName)
    const brandArr = [...new Set( allBrands)];

    const [state , dispatch] = useReducer(filterReducer , initialState);
    
    const getSortedData = sortData(state , allProducts.products)
    const getDataByGender = filterGenderData( state , getSortedData )
    const getSizeData = filterByBrandData(state , getDataByGender)
    const filteredData = filterBySizeData(state ,getSizeData )

    return (
        <filterContext.Provider value={{ state , dispatch , filteredData  , brandArr }}>
            { children }
        </filterContext.Provider>
    )
}

const useFilter = () => useContext(filterContext)

export { FilterProvider  , useFilter }