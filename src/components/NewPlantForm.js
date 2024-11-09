import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewPlant((prevPlant) => ({
        ...prevPlant,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitting new plant:", newPlant);
    
      // Send POST request to backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((response) => response.json())
    .then((addedPlant) => {
      onAddPlant(addedPlant);
      setNewPlant({
        name: "",
    image: "",
    price: "",
      });
    });
    
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="new-plant-form">
      <h2>New Plant</h2>      
        <input type="text" 
        name="name"
         placeholder="Plant name" 
         value={newPlant.name} 
         onChange={handleInputChange}
          required />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={newPlant.image} 
        onChange={handleInputChange} 
        required />
        <input type="number"
         name="price"
          step="0.01" 
          placeholder="Price"
           value={newPlant.price}
            onChange={handleInputChange} 
            required />
        <button type="submit">Add Plant</button>
      </form>
      </div>
      );
}

export default NewPlantForm;
