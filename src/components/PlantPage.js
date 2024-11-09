import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // State for storing plant data
  const [searchQuery, setSearchQuery] = useState(""); // State for storing search query

  // Function to add a new plant
  /*const addPlant = (newPlant) => {
    console.log("Adding plant:", newPlant);
    setPlants((prevPlantList) => [...prevPlantList, newPlant]);
    console.log("Updated plants list:", updatedList);
    return updatedList;
  
  };*/
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
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
