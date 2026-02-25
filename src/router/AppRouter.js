import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../componets/Home';
import ProductList from "../componets/ProductList";
import Contacts from "../componets/Contacts";
import Card from '../componets/Card'
const AppRouter = () =>{
    const [card , setCard] = useState([]);
    const [isCardOpen , setIsCartOpen] = useState(false);

    const tonggleCard = () => {
        setIsCartOpen(!isCardOpen)
    }
    
    const addToCard = (product) => {
        setCard((prevCard) => [...prevCard , product])
    }
    
    const removeFromCard = (productId) => {
        setCard((prevCard) => prevCard.filter((product) => product.id !== productId))
    }

    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/manga">Манга</Link>
                <Link to="/contacts">Контакты</Link>
                <button onClick={tonggleCard}>Корзина({card.length})</button>
            </nav>
            {isCardOpen && (
  <Card 
    toggleCard={tonggleCard}
    removeFromCard={removeFromCard}
    card={card}
  />
)}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/manga" element={<ProductList addToCard={addToCard}/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
