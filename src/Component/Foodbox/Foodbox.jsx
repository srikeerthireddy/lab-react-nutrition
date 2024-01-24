import {useState} from "react";
import '../Foodbox.css';
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types*/

const Foodbox=(props)=>{
    const {data, index}=props;
    
    const[amount,setAmount]=useState(0);
    const [qty,setQty]=useState(0);

    const handleAmount = (e) => {
        if(e.target.value>0){
        setAmount(e.target.value);
    }else{
        setAmount(0);
    }
    };

    const handleCheck=()=>{
        setQty(amount*data.cal);

    };
    const handleReset=()=>{
        setAmount(0);
        setQty(0);
    }

    return(
        <div className="main-container">
            <div className="left-section">
                <div className="image-container">
                    <img src={data.img} style={{ width: "200px" }} />
                </div>
                <div className="food-detail">
                    <h3>{data.name}</h3>
                    <p>{data.cal}</p>
                </div>
                <div className="input-section">
                    <input
                        type="number"
                        placeholder="Enter a number"
                        value={amount}
                        onChange={handleAmount}
                    />
                    <button className="addBtn" onClick={handleCheck}>
                        +
                    </button>
                </div>
            </div>
            <div className="right-section">
                <p>
                    {amount} {data.name} = {qty} Calories
                </p>
                <button className="reset-btn" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>

    );
};
export default Foodbox;