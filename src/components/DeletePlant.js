import React from "react";

function DeletePlant({ plantId, onDeletePlant}){
    const handleDelete = () => {
        onDeletePlant(plantId); 
      };
      return (
        <button onClick={handleDelete} style={{ color: "red" }}>
          Delete Plant
        </button>
      );
    }
    
    export default DeletePlant;