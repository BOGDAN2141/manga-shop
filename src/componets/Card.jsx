import '../Styles/Card.css';
const Card = ({ card, toggleCard, removeFromCard }) => {
  const totalPrice = card.reduce(
    (total, product) => total + Number(product.price),
    0
  );

  return (
    <div className="cart-overlay" onClick={toggleCard}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={toggleCard}>Закрыть</button>
        <h2>Ваша корзина</h2>

        {card.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {card.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Цена: {product.price} тг</p>
                <button onClick={() => removeFromCard(product.id)}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        )}

        <h3>Общая стоимость: {totalPrice} тг</h3>
      </div>
    </div>
  );
};

export default Card;