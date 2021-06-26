import React from 'react'

const Signin = () => {
   return (
      <>
         <div className="modal fade" id="signinmodal" tabindex="-1" style={{ display: "none" }} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalCenterTitle">Sign in</h5>
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

export default Signin
