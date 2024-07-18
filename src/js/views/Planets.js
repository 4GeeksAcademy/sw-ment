import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h2>Planetas</h2>
      {store.planetas.map((item) => (
        <>
          <p>{item.name}</p>
          <button className="btn btn-primary">Más información</button>
          <button className="btn btn-warning">Añadir a favorito</button>
        </>
      ))}
    </>
  );
};

export default Planets;
