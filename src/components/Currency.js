//import React, { useContext, useState } from 'react';
//import { AppContext } from '../context/AppContext';
import '../index.css';

const Currency = () => {
    //const {dispatch} = useContext(AppContext);

    const handleCurrencyChange = (event) =>{
        return (
            alert("Currencyyyyyyy")
        )
    }

    return(
        <div className="input-group-text">
            <span>Currency  :</span>
            <select className="curr-select" id="dropdown" >
             <option defaultValue value="£" name=" Pound" id ="Pound">£ Pound</option>
             <option value="$" name="dollar" id="dollar" onClick={handleCurrencyChange}>$ Dollar</option>
             <option value="£" name="pound" id="pound" onClick={handleCurrencyChange}>£ Pound</option>
             <option value="€" name="euro" id="euro" onClick={handleCurrencyChange}>€ Euro</option>
             <option value="₹" name="rupee" id="rupee" onClick={handleCurrencyChange}>₹ Ruppee</option>
             </select>
        </div>
    )
}

export default Currency;