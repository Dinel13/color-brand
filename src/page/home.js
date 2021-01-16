import React from "react";
import {useHistory, Link} from 'react-router-dom'

const Home = props => {
    const onChange = e => props.setName(e.target.value);
    const history = useHistory()

   
    const submitNameHanler = (event) => {
        event.preventDefault();
        console.log(props.nama);
        if (props.nama) {
          history.replace("/pertanyaan1")
        } else {
          alert('masukkan nama terlebih dahulu')
        }
      };
    
  return (
    <div className="App">
      <br/>
      <h2>Selamat datang di website untuk mengetahui warna otak anda</h2>
      <h3>Anda diharuskan menjawab 13 pertanyaa untuk mengetahui warna otak anda, jika anda ingin lebih tahu tentang warna otak tekan tombol dibwah</h3>
      <Link className="button" to="/penjelasan">Tentang Brain Color</Link>
      <h3>Sebelum lanjut,{' '}Masukkan nama anda terlebih dahulu!</h3>
      <form onSubmit={submitNameHanler}>
        <label>
          Nama{' '}
          <input className="input"
            type="text"
            placeholder="nama anda"
            name="name"
            value={props.nama}
            onChange={onChange}
          />
        </label>
        <br/>
        <input type="submit" value="Mulai" className="button" style={{padding : "10px 20px"}} />
      </form>
    </div>
  );
};

export default Home;
