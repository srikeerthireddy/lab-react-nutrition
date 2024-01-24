import { useState } from "react";
import "./App.css";
import Foodbox from "./Component/Foodbox/Foodbox";
import foodData from "./resources/FoodData";
function App(){
const [serachItem,setSearchItem] = useState("")
const handleSearch = (e)=>{
  setSearchItem(e.target.value);
}
const filterdData = foodData.filter((el)=>
el.name.toLocaleLowerCase().includes(serachItem.toLocaleLowerCase()));
  return(
    <div className="App">
        <h1>Pro Nutrition</h1>
        <div className="search-container">
        <h2>Search</h2>
        <input
        type="text"
        placeholder="Search an item"
        onChange={handleSearch}/>
        </div>

        {filterdData.map((el,i)=>(
        <Foodbox data={el} index={i} key={i}/>
        ))}
    </div>
  );
}
export default App;