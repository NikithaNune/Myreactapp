import "./About.css"
function About() {
  return (
    <div>
      <div class="container">
        <div class="row">

          <div class="col-md-3 my-5 ">

            <div >
              <img
                style={{ width: 400, height: 300 }}
                className="justify content-start"
                src="https://mobirise.com/extensions/restaurantm4/assets/images/3.jpg"
                alt=""
                class="img-fluid"
              />
            </div>

            <div className="d-flex flex-row-reverse my-3">
              <img
                style={{ width: 200, height: 200 }}
                className="justify content-end"
                src="https://fastly.4sqi.net/img/general/600x600/424607650_h_UVHtVMWEclbkVNS6Ueu_rkvJd7njznDg_AmNRnWsg.jpg"
                alt=""
                class="img-fluid"
              />
            </div>

          </div>

          <div class="col-md-3 my-5">

            <div className=" align-self-end mt-5 pt-5">
              <img className=" mt-5"
                style={{ width: 200, height: 200 }}
                
                src="https://fastly.4sqi.net/img/general/600x600/424607650_h_UVHtVMWEclbkVNS6Ueu_rkvJd7njznDg_AmNRnWsg.jpg"
                alt=""
                class="img-fluid"
              />
            </div>

            <div className="mt-3 ">
              <img
                style={{ width: 400, height: 300 }}
                className="justify content-end"
                src="https://fastly.4sqi.net/img/general/600x600/424607650_h_UVHtVMWEclbkVNS6Ueu_rkvJd7njznDg_AmNRnWsg.jpg"
                alt=""
                class="img-fluid"
              />
            </div>

          </div>


          <div class="col-md-6 my-5">
            <h2 className="title">welcome</h2>
            <h4 className="info mt-5">

              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
