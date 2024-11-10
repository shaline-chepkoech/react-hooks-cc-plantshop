import React from "react";

function DeletePlant({ plantId, onDeletePlant}){
    const handleDelete = () => {
        //console.log("Attempting to delete plant with ID:", plantId);
        fetch(`http://localhost:6001/plants/${plantId}`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                onDeletePlant(plantId); 
              } else {
                console.error("Failed to delete plant");
              }
            })
            .catch((error) => console.error("Error:", error));
        };
            
      return (
        <button onClick={handleDelete} style={{ color: "red" }}>
          Delete Plant
        </button>
      );
    }
    
    export default DeletePlant;