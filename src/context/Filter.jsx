import React, { createContext, useState } from 'react'

export const houseContext = createContext();

const HouseData = props => {
   const [rent, setRent] = useState(null);
   const [bedroom, setBedroom] = useState(null);
   const [bathroom, setBathroom] = useState(null);
   const [amenities, setAmenities] = useState(null);
   const [budget, setBudget] = useState(null);

   const filterRent = e => {
      setRent(e.target.value);
   }

   const filterBedroom = e => {
      setBedroom(e.target.value);
   }

   const filterBathroom = e => {
      setBathroom(e.target.value);
   }

   const filterAmenities = e => {
      setAmenities(e.target.value);
   }

   const filterBudget = e => {
      setBudget(e.target.value);
   }


   return (
      <houseContext.Provider value={{ rent, bedroom, bathroom, amenities, budget, filterRent, filterBedroom, filterBathroom, filterAmenities, filterBudget }}>
         {props.children}
      </houseContext.Provider>
   )
}

export default HouseData;