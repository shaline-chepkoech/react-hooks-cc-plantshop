import React, { useState } from "react";

function UpdatePrice({ plantId, currentPrice, onUpdatePrice }) {
  const [newPrice, setNewPrice] = useState(currentPrice);
  const [isEditing, setIsEditing] = useState(false);

  const handlePriceChange = (e) => setNewPrice(e.target.value);

  const handlePriceUpdate = () => {
    setIsEditing(false);
    onUpdatePrice(plantId, parseFloat(newPrice)); // Call parent function to update the price
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="number"
          value={newPrice}
          onChange={handlePriceChange}
          onBlur={handlePriceUpdate} // Update price on blur
          onKeyDown={(e) => {
            if (e.key === "Enter") handlePriceUpdate();
          }}
        />
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>
          Price: ${currentPrice}
        </p>
      )}
    </div>
  );
}

export default UpdatePrice;
