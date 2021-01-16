import React from "react";
import { useHistory } from "react-router-dom";

import image1 from "../image/a.jpg";
import image2 from "../image/b.jpg";
import image3 from "../image/c.jpg";
import image4 from "../image/d.jpg";

const Soal1 = (props) => {
  const history = useHistory();

  let satu, dua, tiga, empat;

  const validate = (angka) => {
    angka = parseInt(angka);
    let validate = false;

    if (angka === 1) {
      validate = true;
    } else if (angka === 2) {
      validate = true;
    } else if (angka === 4) {
      validate = true;
    } else if (angka === 8) {
      validate = true;
    } else {
      validate = false;
    }

    if (!validate) {
      alert(
        "data yang dimasukkan kurang tepat harus pilih angka dari 1 ,2, 4, 8"
      );
      return false;
    }
    return true;
  };

  const cekKesamaan = (angka1, angka2, angka3, angka4) => {
    if (angka1 === angka2 || angka1 === angka3 || angka1 === angka4) {
      alert("nilai gambar tidak boleh sama, harus berbeda tiap gambar");
      return false;
    } else if (angka2 === angka3 || angka2 === angka4) {
      alert("nilai gambar tidak boleh sama, harus berbeda tiap gambar");
      return false;
    } else if (angka3 === angka4) {
      alert("nilai gambar tidak boleh sama, harus berbeda tiap gambar");
      return false;
    }
    return true;
  };

  const hasilTerkini = () => {
    props.setGold(props.gold + Number(satu));
    props.setBlue(props.blue + Number(dua));
    props.setGreen(props.green + Number(tiga));
    props.setOrange(props.orange + Number(empat));
    history.replace("/pertanyaan2");
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
      <p>
        Pilih kelompok gambar yang paling sesuai atau paling mencerminkan diri anda.
        Aturanya pilih angka dari 1, 2, 4 atau 8. Jika kelompok gambar pertama yang paling
        sesuai maka maka masukkan angka 8 pada kotak, jika kelompok gambar ketiga yang
        sesuai kedua maka masukkan angka 4 pada kotak dibawah kelompok gambar kedua. dan
        jika kelompok gambar kedua paling tidak sesuai maka masukkan angka 1 pada kotak
        dibawah kelompok gambar kedua tersebut.
      </p>
      <form onSubmit={submitHandler}>
        <div className="img_container">
          <img src={image3} alt="image1" />
          <input
            className="input"
            placeholder="masukkan nilai gambar"
            type="string"
            value={tiga}
            onChange={(e) => parseInt((tiga = e.target.value))}
          />
        </div>
        <div className="img_container">
          <img src={image4} alt="image2" />
          <input
            className="input"
            placeholder="masukkan nilai gambar"
            type="string"
            value={empat}
            onChange={(e) => parseInt((empat = e.target.value))}
          />
        </div>
        <div className="img_container">
          <img src={image1} alt="image3" />
          <input
            className="input"
            placeholder="masukkan nilai gambar"
            type="string"
            value={satu}
            onChange={(e) => parseInt((satu = e.target.value))}
          />
        </div>
        <div className="img_container">
          <img src={image2} alt="image2" />
          <input
            className="input"
            placeholder="masukkan nilai gambar"
            type="string"
            value={dua}
            onChange={(e) => parseInt((dua = e.target.value))}
          />
        </div>
        <input type="submit" value="BERIKUTNYA >" className="button" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default Soal1;
