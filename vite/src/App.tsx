import "./App.css";
import Button from "./Button";
import UserInfo from "./ex2/UserInfo";
import AdminInfo from "./ex2/AdminInfo";
import UserProfile from "./ex3/UserProfile";
import Todos from "./ex3/Todos";
import FocusInput from "./ex4/FocusInput";
import ContactForm from "./ex4/ContactForm";

function App() {
  // function handleClick() {
  //   alert("Button clicked!");
  // }

  // function handleDisabledClick() {
  //   alert("This button is disabled and cannot be clicked.");
  // }
  // const user = {
  //   id: 1,
  //   name: "Owen",
  //   email: "owenxx@gmail.com",
  // };
  // const admin = {
  //   id: 2,
  //   name: "Admin",
  //   email: "www@gmail.com",
  //   isAdmin: true,
  // };
  return (
    <>
      {/* <Button label="Click Me" onClick={handleClick} disabled={false} />
      <Button
        label="Disabled Button"
        onClick={handleDisabledClick}
        disabled={true}
      /> */}
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}
      {/* <Counter /> */}
      {/* <UserProfile /> */}
      {/* <Todos /> */}
      {/* <FocusInput /> */}
      <ContactForm />
    </>
  );
}

export default App;
