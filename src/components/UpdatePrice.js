import React, { useState, useEffect} from "react";

function UpdatePrice({ plantId, currentPrice, onUpdatePrice }) {
  const [newPrice, setNewPrice] = useState(currentPrice);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setNewPrice(currentPrice);
  }, [currentPrice]);

  const handlePriceChange = (e) => setNewPrice(e.target.value);

  const handlePriceUpdate = () => {
    setIsEditing(false);
    const parsedPrice = parseFloat(newPrice);
    if (isNaN(parsedPrice)) {
      console.error("Invalid price:", newPrice);
      return;}

   // Send PATCH request to update price on the server
   fetch(`http://localhost:6001/plants/${plantId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: parseFloat(newPrice) }),
  })
    .then((response) => {
      if (response.ok) {
        onUpdatePrice(plantId, parsedPrice); 
      } else {
        console.error("Failed to update price");
      }
    })
    .catch((error) => console.error("Error:", error));
    
  };

  const handleDoubleClick = () => {
    console.log("Double-click detected, enabling editing mode");
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="number"
          value={newPrice}
          onChange={handlePriceChange}
          onBlur={handlePriceUpdate} 
          onKeyDown={(e) => {
            if (e.key === "Enter") handlePriceUpdate();
          }}
          autoFocus
        />
      ) : (
        <p onDoubleClick={handleDoubleClick}>
          Price: ${newPrice} 
        </p>
      )}
    </div>
  );
}

export default UpdatePrice;
