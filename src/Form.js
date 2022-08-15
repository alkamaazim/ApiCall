import React, { useState } from "react";

const FormData = () => {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleText = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    if (age !== null && age !== "") {
      if (age > 18 && age < 40) {
        setError("Able to Vote!");
      } else {
        setError("Not able to vote!");
      }
    } else {
      setError("Please Fill your Age!");
    }
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input type="number" value={age} onChange={handleText} />
      <span>{error}</span>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormData;
