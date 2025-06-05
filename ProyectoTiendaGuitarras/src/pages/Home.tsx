import React from "react";
import Guitar from "../components/Guitar";
import { useCartContext } from "../context/CartContext";

export default function Home() {

  const { state, dispatch } = useCartContext();

  return (
    <>
      <div className="diplay-flex-container">
        <img className="img-fluid" src="/img/ESP.png" alt="imagen logo" />
        <img className="img-fluid" src="/img/Fender.png" alt="imagen logo" />
        <img className="img-fluid" src="/img/Gibson.png" alt="imagen logo" />
      </div>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="display-flex mt-5">
          {state.data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>
    </>
  );
}
