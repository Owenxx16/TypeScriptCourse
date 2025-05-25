import "./App.css";
import Button from "./Button";
import UserInfo from "./ex2/UserInfo";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  function handleDisabledClick() {
    alert("This button is disabled and cannot be clicked.");
  }
  return (
    <>
      {/* <Button label="Click Me" onClick={handleClick} disabled={false} />
      <Button
        label="Disabled Button"
        onClick={handleDisabledClick}
        disabled={true}
      /> */}
      <UserInfo id={1} name={"Owen"} email={"xkokoko@gmail.com"} />
    </>
  );
}

export default App;
