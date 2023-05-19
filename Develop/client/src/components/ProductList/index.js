import React from 'react';


const ProductList = ({products=[]}) => {
	return (
        <ul>
            {products.map((product) => <li>{product.name}</li>)}
        </ul>
	)
};

export default ProductList;
