import React from "react";

const Hasil = (props) => {
  const value = {
    gold: props.gold,
    blue: props.blue,
    green: props.green,
    orange: props.orange,
  };

  const max = Math.max.apply(null, Object.values(value));

  const cekHasil = () => {
    switch (max) {
      case props.gold:
        return "Gold";
      case props.blue:
        return "Blue";
      case props.green:
        return "Green";
      case props.orange:
        return "Orange";
      default:
        return "mohon maaf terjadi kesalahan, ulang tes lagi";
    }
  };

  const submitToApi = async (name, gold, blue, green, orange) => {
    try {
      const response = await fetch("https://colorbrand.herokuapp.com/api/hasil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          gold,
          blue,
          green,
          orange,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      return responseData;
    } catch (err) {
      throw err;
    }
  };

 submitToApi(props.name, props.gold, props.blue, props.green, props.orange);

  return (
    <>
      <br />
      <h2>selamat {props.name} kamu telah menyelesaikan tesnya</h2>
      <h3>
        warna otak kamu <br />
        <span className="hasil">{cekHasil()}</span> <br /> denga nilai <br />
        <span className="hasil">{max} point</span>
      </h3>
      <h3>hasil keseluruhan test kamu</h3>
      <h3>Gold {props.gold} point</h3>
      <h3>Blue {props.blue} point</h3>
      <h3>Green {props.green} point</h3>
      <h3>Orange {props.orange} point</h3>
      <br/>
    </>
  );
};

export default Hasil;