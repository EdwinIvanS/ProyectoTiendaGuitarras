import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { Guitar as GuitarType } from "../types/types";
import { db } from "../data/db";
import { useCartContext } from "../context/CartContext";

export default function GuitarDetail() {
  const { dispatch } = useCartContext();
  const { id } = useParams<{ id: string }>();
  const [guitar, setGuitar] = useState<GuitarType | null>(null); 

  useEffect(() => {
    const found = db.find((g) => g.id === Number(id));
    setGuitar(found || null);
  }, [id]);

  if (!guitar) return <p className="text-center mt-10">Cargando guitarra...</p>;

  return (
    <div className="col-md-6 col-lg-4 my-4 display-detail box-shadow pb-2">
      <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${guitar.image}.jpg`}
            alt="imagen guitarra"
          />
        </div> 
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
          <p>{guitar.description}</p>
          <p className="fw-black text-primary fs-3">${guitar.price}</p>
         <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() =>
            dispatch({ type: "add-to-cart", payload: { item: guitar } })
          }
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
