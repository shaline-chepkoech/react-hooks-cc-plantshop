import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  
  //const [plants ,setPlants] = useState([]);

  /*useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
        }, []);*/

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}  
       //onSubmit ={onSubmit}     
      />
      ))}</ul>
  );
}

export default PlantList;
