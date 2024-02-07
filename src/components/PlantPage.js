import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant}) {
const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  useEffect(()=> {
    const filtered = plants.filter((plant) => 
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredPlants(filtered);

  }, [searchQuery, plants])
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  
  
  return (
  <main>
      <NewPlantForm addPlant={(addPlant)}/>
      <Search onChange={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
