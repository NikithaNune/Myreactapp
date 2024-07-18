import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import "./Rating.css"
function Rating(props) {
  const information = props.item_info;
  const title = props.item_title;
  return (
    <div>
      <div className="card shadow-lg" style={{ width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title text-center text-bold">{title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p className="card-text">{information} </p>
          <div className=" bg-success rating rounded my-auto">
            <p className="text-white d-inline-block">
               4.5
               
            </p>
            <div className="text-white d-inline-block" style={{ height: "rem"}}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            
          </div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
}
export default Rating;
