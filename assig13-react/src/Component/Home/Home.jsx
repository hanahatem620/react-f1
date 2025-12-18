export default function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-p d-flex flex-column justify-content-center align-items-center">
                <div className="home-img">
                  <img src="images/avatar.svg" className="w-100 mb-4" alt="" />
                </div>

                <div className="home-content text-white text-center">
                  <h2 className=" fw-bold mb-3">START FRAMEWORK</h2>

                  <div className="line-star d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-2"></div>
                    <i className="fa-solid fa-star me-2"></i>
                    <div className="line"></div>
                  </div>

                  <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
