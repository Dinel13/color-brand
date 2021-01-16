import React from "react";
import Card from "../components/card/card";
import { DATAWARNA as DataWarna } from "../Data/warna";

const Penjelasan = () => {
  return (
    <div>
      <br />
      <h3>Tipe Kepribadian berdasarkan brain color</h3>
      <h3>
        warna otak dapat mengambarkan kepribadian seseorang, sehingga dapat
        dijadikan tolak ukur untuk memahami posisi yang cocok begi orang
        tersebut
      </h3>
      {DataWarna.map((data) => (
        <>
          <Card key={data.id} judul={data.judul} ciri={data.ciri} />
          <br />
        </>
      ))}

      <p>
        Data ini bersumber dari : Indrabayu, 2018, Menjadi Technopreneurship:
        Pendekatan Business Model Canvas.LKPPUnhas:Makassar
      </p>
      <br />
    </div>
  );
};

export default Penjelasan;
