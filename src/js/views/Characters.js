import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Characters = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h2>Personajes</h2>
      {store.personajes.map((item) => (
        <p>{item.name}</p>
      ))}
    </>
  );
};

export default Characters;
