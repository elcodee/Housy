import React from 'react'

const Signup = () => {
   return (
      <>
         <div className="modal fade" id="signupmodal" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style={{ display: "none" }} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <p>This is a vertically centered modal.</p>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Signup