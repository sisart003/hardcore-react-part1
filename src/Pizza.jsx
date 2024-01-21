

const Pizza = ({pizzaObj}) => {

  // if(props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? ('sold out') : ('$' + pizzaObj.price)}</span>
      </div>
    </li>    
  )
}

export default Pizza