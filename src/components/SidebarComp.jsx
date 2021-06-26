import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { houseContext } from '../context/Filter';

const SidebarComp = () => {
   const house = useContext(houseContext);

   // Type Of Rent
   const tors = [
      { name: 'Day', value: 'day' },
      { name: 'Month', value: 'month' },
      { name: 'Year', value: 'year' },
   ]

   // Bedroom
   const bedrooms = [
      { name: 'oneBed', value: 1 },
      { name: 'twoBed', value: 2 },
      { name: 'threeBed', value: 3 },
      { name: 'fourBed', value: 4 },
      { name: 'fiveBed', value: 5 },
   ]

   // Bathroom
   const [bathroom, setBathroom] = useState();
   const bathrooms = [
      { name: 'oneBath', value: 1 },
      { name: 'twoBath', value: 2 },
      { name: 'threeBath', value: 3 },
      { name: 'fourBath', value: 4 },
      { name: 'fiveBath', value: 5 },
   ]
   const handleBathroom = (e) => {
      setBathroom(e.target.value)
   }

   // Amenitie
   const [amenitie, setAminitie] = useState();
   const amenities = [
      { name: 'Furnished' },
      { name: 'Pet Allowed' },
      { name: 'Shared Accomodation' },
   ]
   const handleAmenitie = (e) => {
      setAminitie(e.target.value)
   }

   // Budget
   const [budget, setBudget] = useState(0);

   const handleBudget = (e) => {
      setBudget(e.target.value)
   }

   console.log("Context: ", house);
   // console.log("Type Of Rent: ", tor);
   // console.log("Bedrooms: ", bedroom);
   // console.log("Bathroom: ", bathroom);
   // console.log("Amenities: ", amenitie);
   // console.log("Budget: ", budget);
   return (
      <div className="container rowSidebar">
         <div className="row mb-4">
            <div className="col-md-12">
               <h3 className="fw-bolder">Type Of Rent</h3>
            </div>
            {tors.map(tor => {
               return (
                  <div className="col-md-4 buttonRadioCustom">
                     <input type="radio" onChange={house.filterRent} value={tor.value} id={tor.name} checked={house.rent == tor.value} />
                     <label for={tor.name}>{tor.name}</label>
                  </div>
               )
            })}
         </div>

         <div className="row mb-4">
            <div className="col-md-12">
               <h3 className="fw-bolder mb-2">Date</h3>
            </div>
            <div className="col-md-12">
               <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faCalendar} /></span>
                  <input type="date" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
               </div>
            </div>
         </div>

         <div className="row mb-4">
            <div className="col-md-12">
               <h3 className="fw-bolder mb-3">Property Room</h3>
            </div>
            <div className="col-md-12">
               <h6 className="fw-bolder mt-1 text-muted">Bedroom</h6>
            </div>
            <div className="d-flex">
               {bedrooms.map(bdrm => {
                  return (
                     <div className="buttonRadioCustomProperty" >
                        <input type="radio" onChange={house.filterBedroom} value={bdrm.value} id={bdrm.name} checked={house.bedroom == bdrm.value} />
                        <label for={bdrm.name}>{bdrm.value}</label>
                     </div>
                  )
               })}
            </div>

            <div className="col-md-12">
               <h6 className="fw-bolder mt-1 text-muted">Bathroom</h6>
            </div>
            <div className="d-flex">
               {bathrooms.map(bthrm => {
                  return (
                     <div className="buttonRadioCustomProperty">
                        <input type="radio" onChange={house.filterBathroom} value={bthrm.value} id={bthrm.name} checked={house.bathroom == bthrm.value} />
                        <label for={bthrm.name}>{bthrm.value}</label>
                     </div>
                  )
               })}
            </div>
         </div>

         <div className="row mb-4">
            <div className="col-md-12">
               <h3 className="fw-bolder">Aminities</h3>
            </div>
            {amenities.map(amnt => {
               return (
                  <div className="col-12">
                     <div class="form-check">
                        <input className="form-check-input" type="checkbox" onChange={house.filterAmenities} value={amnt.name} id={amnt.name} />
                        <label className="form-check-label" for={amnt.name}>
                           {amnt.name}
                        </label>
                     </div>
                  </div>
               )
            })}
         </div>

         <div className="row mb-4">
            <div className="col-12">
               <h3 className="fw-bolder mb-2">Budget</h3>
            </div>
            <div className="col-md-12">
               <div className="d-flex row g-0 align-items-center">
                  <div className="col-md-4">
                     <label for="budget" className="col-md-form-label">Less than IDR.</label>
                  </div>
                  <div className="col-md-8">
                     <input type="number" onChange={house.filterBudget} id="budget" className="form-control" value={house.budget} />
                  </div>
               </div>
            </div>
            <div className="col-md-12">
               <button type="button" className="btn btn-primary fw-bolder float-end btnApply">APPLY</button>
            </div>
         </div>


      </div >
   )
}

export default SidebarComp
