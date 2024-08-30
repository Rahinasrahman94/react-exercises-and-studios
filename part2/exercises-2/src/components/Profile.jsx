import "./styles.css";
import Button from "./Button";
import oceans from "./oceans.json";

function Profile() {
  const listItem = oceans.map((ocean) => (
    <div
      key={ocean.id}
      className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}
    >
      <img src={ocean.image} alt={ocean.name} className="img" />
    </div>
  ));
  return (
    <ul>
      {listItem}
      <Button />
    </ul>
  );
}

export default Profile;
