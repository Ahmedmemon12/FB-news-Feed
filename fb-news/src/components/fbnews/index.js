import React, { useState, useEffect } from 'react';
import Card from '../cardComponent';

function FbNews() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(res => {
                setproducts(res.products);
                console.log(res.products);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);
    console.log(products);

    return (

        <div className='App'>
            <div style={{ marginBottom: '100px' }} className='fbNews'>
                {products.map(item => (

                    <Card
                        prodTitle={item.title}
                        prodDesc={item.description}
                        prodImgs={item.images} />))}
            </div>
        </div>
    );
}

export default FbNews;