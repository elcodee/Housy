import React from 'react'
import HomeContent from '../../components/home/HomeContent'
import Navigation from '../../components/NavigationComp'
import SidebarComp from '../../components/SidebarComp'

const Home = () => {
   return (
      <>
         <Navigation />
         <div className="overflow-hidden">
            <div className="row">
               <div className="col-md-3">
                  <SidebarComp />
               </div>
               <div className="col-md-9 bgHomeContent">
                  <HomeContent />
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
