import React from "react";
import { useHistory } from "react-router-dom";
const Soal1 = (props) => {
  let satu, dua, tiga, empat;
  const history = useHistory();

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
    props.setGold(props.gold + Number(empat));
    props.setBlue(props.blue + Number(dua));
    props.setGreen(props.green + Number(satu));
    props.setOrange(props.orange + Number(tiga));
    history.replace("/pertanyaan3");
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
      <br />
      <p>{props.intro}</p>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Terorganisir{" "}
            <input
              className="input"
              placeholder="masukkan nilai kata"
              type="text"
              value={satu}
              onChange={(e) => parseInt((satu = e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Kreatif{" "}
            <input
              className="input"
              placeholder="masukkan nilai kata"
              type="text"
              value={dua}
              onChange={(e) => parseInt((dua = e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Mandiri{" "}
            <input
              className="input"
              placeholder="masukkan nilai kata"
              type="text"
              value={tiga}
              onChange={(e) => parseInt((tiga = e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Antusias{" "}
            <input
              className="input"
              placeholder="masukkan nilai kata"
              type="text"
              value={empat}
              onChange={(e) => parseInt((empat = e.target.value))}
            />
          </label>
        </div>
        <input type="submit" value="BERIKUTNYA >" className="button" />
      </form>
    </div>
  );
};

export default Soal1;