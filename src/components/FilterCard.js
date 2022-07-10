import { useFilter } from "../filtercontext"

function FilterCard() {

    const { state, dispatch, brandArr } = useFilter()


    return (
        <div>

            <form
                action=""
                className="border-t border-gray-200 lg:border-t-0 m-1 w-52"
            >
                <div className="flex justify-between px-1 py-3 border-t border-gray-200">
                    <button
                        name="reset"
                        type="button"
                        className="font-medium text-gray-600 underline rounded"
                        onClick={() => dispatch({ type:'CLEARALL', payload: '' })}
                    >
                        Reset All
                    </button>
                </div>
                <fieldset>
                    <legend className="block w-full px-1 py-3 text-sm font-medium bg-gray-50">
                        Price
                    </legend>

                    <div className="px-1 py-1 space-y-2">
                        <div className="flex items-center">
                            <input
                                id="HIGHTOLOW"
                                type="radio"
                                name="HIGHTOLOW"
                                checked={state.sortByPrice === 'HIGHTOLOW'}
                                onChange={() => dispatch({ type: 'SORTBY', payload: 'HIGHTOLOW' })}
                                className="w-5 h-5 border-gray-300 rounded"
                            />

                            <label
                                htmlFor="HIGHTOLOW"
                                className="ml-3 text-sm font-medium"
                            >
                                high to low
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="LOWTOHIGH"
                                type="radio"
                                name="HIGHTOLOW"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.sortByPrice === 'LOWTOHIGH'}
                                onChange={() => dispatch({ type: 'SORTBY', payload: 'LOWTOHIGH' })}
                            />

                            <label
                                htmlFor="LOWTOHIGH"
                                className="ml-3 text-sm font-medium"
                            >
                                Low to high
                            </label>
                        </div>

                    </div>
                </fieldset>
                <fieldset>
                    <legend className="block w-full px-1 py-3 text-sm font-medium bg-gray-50">
                        Ideal for
                    </legend>

                    <div className="px-1 py-1 space-y-2">
                        <div className="flex items-center">
                            <input
                                id="toy"
                                type="radio"
                                name="type[toy]"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.filterByGender === 'MEN'}
                                onChange={() => dispatch({ type: 'FILTERBYGENDER', payload: 'MEN' })}
                            />

                            <label
                                htmlFor="toy"
                                className="ml-3 text-sm font-medium"
                            >
                                Men
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="game"
                                type="radio"
                                name="type[game]"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.filterByGender === 'WOMEN'}
                                onChange={() => dispatch({ type: 'FILTERBYGENDER', payload: 'WOMEN' })}
                            />

                            <label
                                htmlFor="game"
                                className="ml-3 text-sm font-medium"
                            >
                                Women
                            </label>
                        </div>


                    </div>
                </fieldset>
                <fieldset>
                    <legend className="block w-full px-1 py-3 text-sm font-medium bg-gray-50">
                        Size
                    </legend>

                    <div className="px-1 py-1 space-y-2">
                        <div className="flex items-center">
                            <input
                                id="XL"
                                type="checkbox"
                                name="XL"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.filterBySize.some((item) => item === "XL")}
                                onChange={() => dispatch({ type: 'FILTERBYSIZE', payload: 'XL' })}
                            />

                            <label
                                htmlFor="XL"
                                className="ml-3 text-sm font-medium"
                            >
                                XL
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="L"
                                type="checkbox"
                                name="age[16+]"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.filterBySize.some((item) => item === "L")}
                                onChange={() => dispatch({ type: 'FILTERBYSIZE', payload: 'L' })}
                            />

                            <label
                                htmlFor="L"
                                className="ml-3 text-sm font-medium"
                            >
                                L
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="M"
                                type="checkbox"
                                name="M"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.filterBySize.some((item) => item === "M")}
                                onChange={() => dispatch({ type: 'FILTERBYSIZE', payload: 'M' })}
                            />

                            <label
                                htmlFor="M"
                                className="ml-3 text-sm font-medium"

                            >
                                M
                            </label>
                        </div>



                        <div className="flex items-center">
                            <input
                                id="S"
                                type="checkbox"
                                name="S"
                                className="w-5 h-5 border-gray-300 rounded"
                                checked={state.filterBySize.some((item) => item === "S")}
                                onChange={() => dispatch({ type: 'FILTERBYSIZE', payload: 'S' })}
                            />

                            <label
                                htmlFor="S"
                                className="ml-3 text-sm font-medium"
                            >
                                S
                            </label>
                        </div>


                    </div>
                </fieldset>
                <fieldset>
                    <legend className="block w-full px-1 py-3 text-sm font-medium bg-gray-50">
                        Brand
                    </legend>

                    {brandArr && brandArr.map((brandName) => {
                        return (
                            <div key={brandName} className="px-1 py-1 space-y-2">
                                <div className="flex items-center">
                                    <input
                                        id={brandName}
                                        type="checkbox"
                                        name="brand"
                                        className="w-5 h-5 border-gray-300 rounded"
                                        checked={state.filterByBrand.some((val) => val === brandName)}
                                        onChange={() => dispatch({ type: 'FILTERBYBRAND', payload: brandName })}
                                    />

                                    <label
                                        htmlFor={brandName}
                                        className="ml-3 text-sm font-medium"
                                    >
                                        {brandName}
                                    </label>
                                </div>

                            </div>
                        )
                    })
                    }

                </fieldset>
            </form>
        </div>

    )
}

export { FilterCard }