import React from "react";
import {useHistory} from 'react-router-dom'
const Soal1 = (props) => {
  let satu, dua, tiga, empat;
  const history = useHistory()

  const validate = (angka) => {
    angka = parseInt(angka);
    let validate = false;
    for (let num = 1; num <= 4; num++) {
      if (angka === num) {
        validate = true;
      }
    }
    if (!validate) {
      alert(
        "data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"
      );
      return false;
    }
    return true;
  };

  const cekKesamaan = (angka1, angka2, angka3, angka4) => {
    if (angka1 === angka2 || angka1 === angka3 || angka1 === angka4) {
      alert("nilai kata tidak boleh sama, harus berbeda tiap kata");
      return false;
    } else if (angka2 === angka3 || angka2 === angka4) {
      alert("nilai kata tidak boleh sama, harus berbeda tiap kata");
      return false;
    } else if (angka3 === angka4) {
      alert("nilai kata tidak boleh sama, harus berbeda tiap kata");
      return false;
    }
    return true;
  };

  const hasilTerkini = () => {
    props.setGold(props.gold + Number(tiga));
    props.setBlue(props.blue + Number(empat));
    props.setGreen(props.green + Number(satu));
    props.setOrange(props.orange + Number(dua));
    history.replace('/pertanyaan12')

  };

  const submitHandler = (e) => {
    e.preventDefault();
    validate(satu) &&
      validate(dua) &&
      validate(tiga) &&
      validate(empat) &&
      cekKesamaan(satu, dua, tiga, empat) &&
      hasilTerkini();
  };
  return (
    <div className="App">
       <br/>
      <h3>
        Jawab pertanyaan dibawah berdasarkan yang paling sesuai dengan diri anda. beri nilai 4 pada yang paling sesui dan 1 untuk yang paling tidak sesuai
      </h3>
      <p>Ketika membuat keputusan, saya cenderung: </p>
      <form onSubmit={submitHandler}>
        <div className="card" style={{padding: "8px 0px"}}>
          <label>
            Menyimpulkan kata-kata{" "}
            <br/>
            <input
              className="input"
              placeholder="masukkan nilai"
              type="text"
              value={satu}
              onChange={(e) => parseInt((satu = e.target.value))}
            />
          </label>
        </div>
        <br/>
        <div  className="card" style={{padding: "8px 0px"}}>
          <label>
            Percaya naluri{" "} <br/>
            <input
              className="input"
              placeholder="masukkan nilai"
              type="text"
              value={dua}
              onChange={(e) => parseInt((dua = e.target.value))}
            />
          </label>
        </div>
        <br/>
        <div  className="card" style={{padding: "8px 0px"}}>
          <label>
            Mempunyai planing{" "}
            <br/>
            <input
              className="input"
              placeholder="masukkan nilai"
              type="text"
              value={tiga}
              onChange={(e) => parseInt((tiga = e.target.value))}
            />
          </label>
        </div>
        <br/>
        <div  className="card" style={{padding: "8px 0px"}}>
          <label>
            berbicara dengan yang lain{" "} <br/>
            <input
              className="input"
              placeholder="masukkan nilai"
              type="text"
              value={empat}
              onChange={(e) => parseInt((empat = e.target.value))}
            />
          </label>
        </div>
        <input type="submit" value="BERIKUTNYA >" className="button"/>
      </form>
    </div>
  );
};

export default Soal1;
