export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="portfolio-p">
            <h1 className="fw-bold  mt-4 text-center mainC text-uppercase">conatct section</h1>
            <div className="line-star d-flex align-items-center justify-content-center mb-3">
              <div className="line me-2 mainCbg"></div>
              <i className="fa-solid fa-star me-2 mainC"></i>
              <div className="line mainCbg"></div>
            </div>
          </div>

          <div className="form-content d-flex justify-content-center ">
            <div className="row">
              <div className=" col-md-12">

                <form>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="userName"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="userAge"
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="userEmail"
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="userPassowrd"
                    />
                  </div>
                    <button type="submit" class="btnC">Send Message</button>
                </form>

              </div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}
