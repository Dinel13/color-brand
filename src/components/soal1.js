import React from "react";

const Soal = props => {
  return (
    <div className="img_container">
      <img src={props.image} alt={props.alt} />
      <input
        className="input"
        placeholder="masukkan nilai gambar"
        type="number" min="1" max="4"
        value={props.data}
        onChange={(e) => props.set(parseInt(e.target.value) + props.data)}
      />
    </div>
  );
};

export default Soal
