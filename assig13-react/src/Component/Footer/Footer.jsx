export default function Footer() {
  return (
    <>
      <footer>
           <div className="upper-sec p-5">
       <div className="container">
             
          <div className="row">

            <div className="col-md-4">
                <div className="card bg-transparent border-0 text-center text-white">
                  <div className="card-body">
                    <h5 className="card-title">LOCATION</h5>
                    <p className="card-subtitle mb-2">
                      2215 John Daniel Drive
                    </p>
                    <p className="card-text">
                      Clark, MO 65243
                    </p>
                  </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-transparent border-0 text-center text-white">
                  <div className="card-body">
                    <h5 className="card-title">AROUND THE WEB</h5>
                    <div className="icons d-flex justify-content-center gap-1"> 
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-solid fa-globe"></i>
                    </div>
                    
                  </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card bg-transparent border-0 text-center text-white">
                  <div className="card-body">
                    <h5 className="card-title">ABOUT FREELANCER</h5>
                    <p className="card-text">
                     Freelance is a free to use, licensed Bootstrap theme created by Route
                    </p>
                  </div>
                </div>
            </div>

 
            
          </div>
       </div>
        </div>

         <div className="lower-sec p-4">
          <h6 className="text-white text-center">
            Copyright © Your Website 2021
          </h6>
        </div>
     

      </footer>
    </>
  );
}
