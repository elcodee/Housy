import React, { useContext } from 'react'
import NavigationComp from '../../components/NavigationComp'
import SidebarComp from '../../components/SidebarComp'
import { HouseContext } from '../../context/Filter'

const Home = () => {
   const data = useContext(HouseContext)
   return (
      <>
         <NavigationComp />
         <div className="overflow-hidden">
            <div className="row">
               <div className="col-md-3">
                  <SidebarComp />
               </div>
               <div className="col-md-9 bgHomeContent">
                  <div className="row">
                     {data.houses.map(house => {
                        return (
                           <div className="col-md-4">
                              <div className="card cardCustom">
                                 <span class="badge cardBadgeCustom">{house.detail.amenities}</span>
                                 <img src={house.detail.thumb} className="card-img-top cardImgCustom" alt="..." />
                                 <div className="card-body">
                                    <h5 className="card-title fw-bolder">Rp {parseInt(house.detail.price).toLocaleString('id-ID')} / Year</h5>
                                    <div className="card-text">{house.detail.bedroom} Beds, {house.detail.bathroom} Bath, {house.detail.area} sqft</div>
                                    <div className="card-text text-muted">{house.detail.location}</div>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
