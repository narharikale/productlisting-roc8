function ProductCard ( { product }) {
    return (
        <div className='w-72'>
        <a href="#">
            <img className="w-fit h-96 object-cover" src={product.imgURL} alt="product img" />
        </a>
        <div className="pt-1">
            <a href="#">
                <p className="mb-2 font-bold ">{product.name}</p>
            </a> 
            <p className="mb-3 font-normal ">Price : {product.price}</p> 

            <p className="mb-3 font-normal ">Size :{
                product.availabelSize.map((size) => {
                    return <span key={size} className="m-1">{size}</span>
                } )
            } </p>
            <p className="mb-3 font-normal ">Brand : { product.brandName}</p>
            
        </div>
    </div>
    )
}

export { ProductCard }