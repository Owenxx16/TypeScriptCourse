import React from "react";
import { useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  age: number;
}
const UserProfile = () => {
  const [UserProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    age: 0,
  });

  const updateName = (name: string) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: name,
    }));
  };
  const updateEmail = (email: string) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      email: email,
    }));
  };
  const updateAge = (age: number) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      age: age,
    }));
  };
  return (
    <div>
      <h1>User Profile</h1>
      <p>{UserProfile.name}</p>
      <p>{UserProfile.email}</p>
      <p>{UserProfile.age}</p>
      <input
        type="text"
        value={UserProfile.name}
        onChange={(event) => updateName(event.target.value)}
      />
      <input
        type="text"
        value={UserProfile.email}
        onChange={(event) => updateEmail(event.target.value)}
      />
      <input
        type="number"
        value={UserProfile.age}
        onChange={(event) => updateAge(Number(event.target.value))}
      />
      <button onClick={() => console.log(UserProfile)}>Submit</button>
    </div>
  );
};

export default UserProfile;
