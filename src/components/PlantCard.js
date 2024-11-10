import React, { useState } from "react";
import DeletePlant from "./DeletePlant";
import UpdatePrice from "./UpdatePrice";

function PlantCard({ id, name, image, price, onDeletePlant, onUpdatePrice }) {
  const [isInStock, setIsInStock] = useState(true);

  const handleStockToggle = () => {
    setIsInStock((prevStock) => !prevStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      
      {/* Price Update Component */}
      <UpdatePrice
        plantId={id}
        currentPrice={price}
        onUpdatePrice={onUpdatePrice}
      />
      
      {/* Stock Toggle Button */}
      {isInStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
      
      {/* Delete Plant Button */}
      <DeletePlant plantId={id} onDeletePlant={onDeletePlant} />
    </li>
  );
}

export default PlantCard;

