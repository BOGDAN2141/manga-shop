import React, { useState, useEffect} from "react";
import {db} from '../firebaseConfig';
import { collection , getDocs } from "firebase/firestore";

const ProductList = ({addToCard}) =>{
    const [products , setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() =>{
        const fetchProduct = async() =>{
            try{
                const querySnapshot = await getDocs(collection(db , 'mangas'));
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productsData);
            }
            catch (error){
                console.log('Ошибка', error)
            }
        };
        fetchProduct()
    }, []);


    const handleSearchChancge = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    }

    const filterProducts = products.filter((product) => 
        product.name.toLowerCase().includes(searchQuery)
    )
return (
    <div className="page">
        <div className="first">
        <h1>Список манги</h1>
        <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={handleSearchChancge}/>
        </div>
        <div className="product-grid">
            
            {filterProducts.map((product) => (
                <div className="product-card" key={product.id}>
                    <img 
                        className="product-image"
                        src={product.image} 
                        alt={product.name} 
                    />
                    <h2 className="product-title">
                        {product.name}
                    </h2>

                    <p className="product-description">
                        {product.description}
                    </p>

                    <p className="product-price">
                        {product.price} тг
                    </p>
                    <button onClick={() => addToCard(product)}>Добавить в корзину</button>
                </div>
            ))}
        </div>
        
    </div>
)


}

export default ProductList;