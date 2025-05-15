import React from "react";
import Guitar from "../components/Guitar";
import { Guitar as guitarHome} from "../types/types";

type HomeProps = {
  data: guitarHome[];
  dispatch: React.Dispatch<any>;
};

export default function Home({ data, dispatch }: HomeProps) {
  
  return (
    <>
      
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
