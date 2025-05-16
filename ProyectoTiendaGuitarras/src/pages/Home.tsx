import React from "react";
import Guitar from "../components/Guitar";
import { Guitar as guitarHome } from "../types/types";

type HomeProps = {
  data: guitarHome[];
  dispatch: React.Dispatch<any>;
};

export default function Home({ data, dispatch }: HomeProps) {
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
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} dispatch={dispatch} />
          ))}
        </div>
      </main>
    </>
  );
}
