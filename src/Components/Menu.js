import Card from "./Card";
import data from "../Services/Data";
function Menu() {
  console.log(data);
  return (
    <div>
      <div className="d-flex flex-wrap ">
      {data.map((da) => (
        <div className="m-5">
          <Card
            id={da._id.$oid}
            img={da.image}
            name={da.name}
            price={da.price}
            des={da.description}
          />
        </div>
      ))}
    
      </div>
    </div>
  );
}
export default Menu;
 