import React from 'react'
import fakeData from '../../data/dummy'

const HomeContent = () => {
   let houses = [];
   fakeData.map(data => { return houses.push(data) })

   // console.log("House Data: ", houses);
   return (
      <>
         <div className="row">
            {houses.map(house => {
               return (
                  <div className="col-md-4">
                     <div className="card cardCustom">
                        <span class="badge cardBadgeCustom">{house.detail.amenities}</span>
                        <img src={house.detail.thumb} className="card-img-top cardImgCustom" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title fw-bolder">Rp {parseInt(house.detail.price_year).toLocaleString('id-ID')} / Year</h5>
                           <div className="card-text">{house.detail.bedroom} Beds, {house.detail.bathroom} Bath, {house.detail.area} sqft</div>
                           <div className="card-text text-muted">{house.detail.location}</div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </>
   )
}

export default HomeContent
