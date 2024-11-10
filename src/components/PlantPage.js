import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 

  // Fetch plants from the backend
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);
  
  const addPlant = (newPlant) => {
    setPlants((prevPlantList) => {
      const updatedList = [...prevPlantList, newPlant];
      console.log("Updated plants list:", updatedList);
      return updatedList;
    });
  };

  const handleUpdatePrice = (plantId, updatedPrice) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === plantId ? { ...plant, price: updatedPrice } : plant
      )
    );
  };
  
  const handleDeletePlant = (plantId) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== plantId));
  };

  // Function to handle search input
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Filter plants based on the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("Filtered Plants:", filteredPlants);

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList
        plants={filteredPlants}
        onDeletePlant={handleDeletePlant}
         onUpdatePrice={handleUpdatePrice}/>
    </main>
  );
}

export default PlantPage;
