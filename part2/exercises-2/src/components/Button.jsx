import "./styles.css";

function Button() {
  function onLearnMore() {
    alert("splish splash");
  }

  return <button onClick={onLearnMore}>click!</button>;
}

export default Button;
