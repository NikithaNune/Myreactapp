import Card from "./Card";
import Carousels from "./Carousel";
import Rating from ".//Rating";
import About from "./About";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div>
      <Carousels />

      <About />

      <div class="text-center mt-3 ">
        <h1>Menu</h1>
      </div>
<Menu />
      
      <div class="text-center mt-3 ">
        <h1>Customer Reviews</h1>
      </div>

      <div className="d-flex flex-row justify-content-evenly mt-5">
        <Rating
          item_info="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          item_title="Nikitha"
        />

        <Rating
          item_info="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          item_title="ABC"
        />

        <Rating
          item_info="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          item_title="XYZ"
        />

        <Rating
          item_info="Some quick example text to build on the card title and make up the
            bulk of the card's content."
          item_title="ABCD"
        />
      </div>
      <div class="text-center mt-3 ">
        <h1>About Us</h1>
        <FontAwesomeIcon icon={faInstagram} />
      </div>

      <div class="m-5 w-75 text-center mx-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Home;
