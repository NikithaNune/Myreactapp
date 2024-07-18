import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react"
import Heart from "react-heart"
function Card(props) {
  const des = props.des;
  const [active, setActive] = useState(false)

  function addFav(active){
    setActive(!active)
    if (active) {
      window.localStorage.setItem("id", props.id)
    }
    else {
      window.localStorage.removeItem("id")
    }
  }
  return (
    <div>
      <div
        className="card shadow-lg"
        style={{ width: "18rem", height: "20rem" }}
      >
        <img
          src={`${props.img}`}
          className="card-img-top"
          alt="..."
          style={{ height: "12rem" }}
        />
        <div className="card-body">
          <p className="card-text">
            {props.name} <b>₹{props.price}</b>
          </p>
          <div>
          <div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={()=>addFav(active)}/>
		</div>
          </div>
          <p className="card-text">{des}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
