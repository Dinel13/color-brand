(this["webpackJsonpcolor-vrand"]=this["webpackJsonpcolor-vrand"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/a.374534bc.jpg"},19:function(e,a,t){e.exports=t.p+"static/media/b.d873e6f3.jpg"},20:function(e,a,t){e.exports=t.p+"static/media/c.a6929c8b.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/d.56eeea38.jpg"},23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),i=t.n(r),u=(t(28),t(8)),m=t(2),s=t(1),c=function(e){var a=Object(s.g)();return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("h2",null,"Selamat datang di website untuk mengetahui warna otak anda"),l.a.createElement("h3",null,"Anda diharuskan menjawab 13 pertanyaa untuk mengetahui warna otak anda, jika anda ingin lebih tahu tentang warna otak tekan tombol dibwah"),l.a.createElement(m.b,{className:"button",to:"/penjelasan"},"Tentang Brain Color"),l.a.createElement("h3",null,"Sebelum lanjut,"," ","Masukkan nama anda terlebih dahulu!"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(e.nama),e.nama?a.replace("/pertanyaan1"):alert("masukkan nama terlebih dahulu")}},l.a.createElement("label",null,"Nama"," ",l.a.createElement("input",{className:"input",type:"text",placeholder:"nama anda",name:"name",value:e.nama,onChange:function(a){return e.setName(a.target.value)}})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Mulai",className:"button",style:{padding:"10px 20px"}})))},p=t(18),o=t.n(p),d=t(19),k=t.n(d),g=t(20),b=t.n(g),E=t(21),h=t.n(E),v=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){var a=!1;return a=1===(e=parseInt(e))||(2===e||(4===e||8===e)),!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 ,2, 4, 8"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,"Pilih kelompok gambar yang paling sesuai atau paling mencerminkan diri anda. Aturanya pilih angka dari 1, 2, 4 atau 8. Jika kelompok gambar pertama yang paling sesuai maka maka masukkan angka 8 pada kotak, jika kelompok gambar ketiga yang sesuai kedua maka masukkan angka 4 pada kotak dibawah kelompok gambar kedua. dan jika kelompok gambar kedua paling tidak sesuai maka masukkan angka 1 pada kotak dibawah kelompok gambar kedua tersebut."),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai gambar tidak boleh sama, harus berbeda tiap gambar"),0):c!==p||(alert("nilai gambar tidak boleh sama, harus berbeda tiap gambar"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan2"))}},l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:b.a,alt:"image1"}),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai gambar",type:"string",value:n,onChange:function(e){return parseInt(n=e.target.value)}})),l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:h.a,alt:"image2"}),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai gambar",type:"string",value:r,onChange:function(e){return parseInt(r=e.target.value)}})),l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:o.a,alt:"image3"}),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai gambar",type:"string",value:a,onChange:function(e){return parseInt(a=e.target.value)}})),l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:k.a,alt:"image2"}),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai gambar",type:"string",value:t,onChange:function(e){return parseInt(t=e.target.value)}})),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"}),l.a.createElement("br",null),l.a.createElement("br",null)))},f=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(r)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(a)),e.setOrange(e.orange+Number(n)),i.replace("/pertanyaan3"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Terorganisir"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Kreatif"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Mandiri"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Antusias"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},y=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan4"))}},l.a.createElement("div",null,l.a.createElement("label",null,"komunikatif"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Tepat waktu"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Kesenagan"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Ingin tahu"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},N=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan5"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Kompetitif"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Sabar"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Fleksibel"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Detail"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},x=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan6"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Analisis"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Panjang Akal"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Tangungjawab","",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Perhatian"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},I=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan7"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Berkomitmen"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Sensitif"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Suka berfikir"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Berani"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},j=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan8"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Energetik"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Teknikal"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Kooperatif"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Berhati-hati"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},O=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(t)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(r)),i.replace("/pertanyaan9"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Dapat dipercaya"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Hangat"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Otonom"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Petualang"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},C=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(r)),e.setBlue(e.blue+Number(n)),e.setGreen(e.green+Number(t)),e.setOrange(e.orange+Number(a)),i.replace("/pertanyaan10"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Pemurah"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Kompentesi"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Original"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Respek"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},G=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("p",null,e.intro),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(t)),e.setBlue(e.blue+Number(a)),e.setGreen(e.green+Number(r)),e.setOrange(e.orange+Number(n)),i.replace("/pertanyaan11"))}},l.a.createElement("div",null,l.a.createElement("label",null,"Mengasuh"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Dapat diduga"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Spontan"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("div",null,l.a.createElement("label",null,"Investigatif"," ",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai kata",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},B=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("h3",null,"Jawab pertanyaan dibawah berdasarkan yang paling sesuai dengan diri anda. beri nilai 4 pada yang paling sesui dan 1 untuk yang paling tidak sesuai"),l.a.createElement("p",null,"Ketika membuat keputusan, saya cenderung: "),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(n)),e.setBlue(e.blue+Number(r)),e.setGreen(e.green+Number(a)),e.setOrange(e.orange+Number(t)),i.replace("/pertanyaan12"))}},l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Menyimpulkan kata-kata"," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Percaya naluri"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Mempunyai planing"," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"berbicara dengan yang lain"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},w=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("h3",null,"Jawab pertanyaan dibawah berdasarkan yang paling sesuai dengan diri anda. beri nilai 4 pada yang paling sesui dan 1 untuk yang paling tidak sesuai"),l.a.createElement("p",null,"Ketika bekerja dengan orang lain, saya melihat diri saya sebagai: "),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(r)),e.setBlue(e.blue+Number(n)),e.setGreen(e.green+Number(t)),e.setOrange(e.orange+Number(a)),i.replace("/pertanyaan13"))}},l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Trouble shooter"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Problem solver"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Pemain team"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Coach"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"BERIKUTNYA >",className:"button"})))},A=function(e){var a,t,n,r,i=Object(s.g)(),u=function(e){e=parseInt(e);for(var a=!1,t=1;t<=4;t++)e===t&&(a=!0);return!!a||(alert("data yang dimasukkan kurang tepat harus pilih angka dari 1 sampai 4"),!1)};return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("h3",null,"Jawab pertanyaan dibawah berdasarkan yang paling sesuai dengan diri anda. beri nilai 4 pada yang paling sesui dan 1 untuk yang paling tidak sesuai"),l.a.createElement("p",null,"Ketika bekerja dengan orang lain, saya melihat diri saya sebagai: "),l.a.createElement("form",{onSubmit:function(l){var m,s,c,p;l.preventDefault(),u(a)&&u(t)&&u(n)&&u(r)&&(c=n,p=r,(m=a)===(s=t)||m===c||m===p||s===c||s===p?(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0):c!==p||(alert("nilai kata tidak boleh sama, harus berbeda tiap kata"),0))&&(e.setGold(e.gold+Number(a)),e.setBlue(e.blue+Number(r)),e.setGreen(e.green+Number(n)),e.setOrange(e.orange+Number(t)),i.replace("/hasil"))}},l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Stabil"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:a,onChange:function(e){return parseInt(a=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Bebas"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:t,onChange:function(e){return parseInt(t=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Privasi"," "," ",l.a.createElement("br",null),"''",l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:n,onChange:function(e){return parseInt(n=e.target.value)}}))),l.a.createElement("br",null),l.a.createElement("div",{className:"card",style:{padding:"8px 0px"}},l.a.createElement("label",null,"Harmonis"," "," ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"masukkan nilai",type:"text",value:r,onChange:function(e){return parseInt(r=e.target.value)}}))),l.a.createElement("input",{type:"submit",value:"TAMPILKAN HASIL",className:"button"})))},S=t(13),T=t.n(S),K=t(22),M=function(e){var a={gold:e.gold,blue:e.blue,green:e.green,orange:e.orange},t=Math.max.apply(null,Object.values(a));return function(){var e=Object(K.a)(T.a.mark((function e(a,t,n,l,r){var i,u;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://colorbrand.herokuapp.com/api/hasil",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,gold:t,blue:n,green:l,orange:r})});case 3:return i=e.sent,e.next=6,i.json();case 6:if(u=e.sent,i.ok){e.next=9;break}throw new Error(u.message);case 9:return e.abrupt("return",u);case 12:throw e.prev=12,e.t0=e.catch(0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a,t,n,l,r){return e.apply(this,arguments)}}()(e.name,e.gold,e.blue,e.green,e.orange),l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("h2",null,"selamat ",e.name," kamu telah menyelesaikan tesnya"),l.a.createElement("h3",null,"warna otak kamu ",l.a.createElement("br",null),l.a.createElement("span",{className:"hasil"},function(){switch(t){case e.gold:return"Gold";case e.blue:return"Blue";case e.green:return"Green";case e.orange:return"Orange";default:return"mohon maaf terjadi kesalahan, ulang tes lagi"}}())," ",l.a.createElement("br",null)," denga nilai ",l.a.createElement("br",null),l.a.createElement("span",{className:"hasil"},t," point")),l.a.createElement("h3",null,"hasil keseluruhan test kamu"),l.a.createElement("h3",null,"Gold ",e.gold," point"),l.a.createElement("h3",null,"Blue ",e.blue," point"),l.a.createElement("h3",null,"Green ",e.green," point"),l.a.createElement("h3",null,"Orange ",e.orange," point"),l.a.createElement("br",null))},D=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/SOlah03"},l.a.createElement("span",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/salahuddin_hafid/"},l.a.createElement("span",{className:"fa fa-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Dinel13"},l.a.createElement("span",{className:"fa fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/salahuddin-din-9a7298186"},l.a.createElement("span",{className:"fa fa-linkedin"}))))},P=(t(35),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"social-icons"},l.a.createElement(D,null)),l.a.createElement("p",null,"Copyrigh \xa92020 - Test Brain Color | ",l.a.createElement("a",{href:"http://dinel.netlify.app",target:"balnk"},"Salahuddin")))}),R=(t(36),function(){var e=Object(s.h)(),a=Object(s.g)(),t=e.pathname;return l.a.createElement("div",{className:"headdir"},l.a.createElement("div",{className:"headir_in"},l.a.createElement("div",{className:"logo"},l.a.createElement("h3",null,l.a.createElement(m.b,{to:"/"},l.a.createElement("span",{className:"fa fa-cogs"},"Color"),l.a.createElement("br",null),l.a.createElement("span",{className:"yellow"},"Brain Test")))),l.a.createElement("div",{className:"triger-nav"},"/penjelasan"===t?l.a.createElement("a",{onClick:a.goBack},"Kembali"):l.a.createElement(m.b,{to:"/penjelasan"},"Tentang Brain Color")),l.a.createElement("div",{className:"clearfix"})))}),U=(t(37),function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("h3",null,e.judul),l.a.createElement("ul",null,e.ciri.map((function(e){return l.a.createElement("li",null,e)}))))}),Y=[{id:"1",judul:"Gold",ciri:["Gold adalah simbol dari cahaya matahari yang memberi kehidupan dan merupakan lambang kekuasaan, kewaspadaan, kebijaksanaan, dan kesiapan","Pengambil keputusan yang andal bertangung jawab dan disiplin","Besifat hati-hati penuh perancanaan, terorganisir, bertangungjawab, berkomitmen","Orang-orang ini cenderung detail dan memimpin dangan sencana step by step","Mereka bekerja dengan baik dalam lingkungan yang teratur dimana mereka tahu apa yang diharapkan dari mereka dan mereka dapat menyelesaikam tugas tepat waktu"]},{id:"2",judul:"Blue",ciri:["Biru adalah lambang venus dewa cinta","Jika sebagai pemimpin, mereka antusias, kreatif dan ramah","Kelompok ini terdiri dari orang-orang yang hangat, kreatif, penuh perhatian, sensitif, peduli, dan komunikatif","Mereka cenderung tidak agresif dan disukai banyak orang karena kalem dalam memberi semnagat","Biasanya mereka adalah pekerja kretif, artis, host sebuah program televisi, guru , perawat dan pekerja sosial","Mereka bekerja dengan baik di lingkungan yng mempromosikan kepercayaan, harmoni dan flesibilitas. merka menujnjukan kretivitas mereak ketika antusiasime, perhatian dan integritas mereka di akui"]},{id:"3",judul:"Green",ciri:["Hijau adalah simbol pertumbuhan, hidup, pengetahuan, memori dan masa depan","Jika sebagai pemimpin, mereka idependen, teknik dan visioner","Merupakan puncak pengetahuan, orang-orang in cenderung berhati-hati, sangat kalkulatif dan berpengang pada logic dan science","Mereka sulit mengikutio kehendak orang lain karena kritis dan rasional, dan sangat mengadalkan fakta. jadi dia bukan orang yang percaya begitu saja terhadap rumor, gosip, mitos, atau cerita-cerita publik","Mereka sangat dingin, kurang bersosialisasi dan menjadi pemain tunggal(solo thinker)","Mereka efisin di tempat kerja ketika kecerdasan, kempetensi dan rasa ingin tahu mereka diakui. Mereka dihargai ketika lingkungan mereka mempromosikan keadilan dan menyediakan teknologi"]},{id:"4",judul:"Orange",ciri:["Jika sebagai pemimpin, mereka berani, bersemangat, antusias dan berani mengambil resiko","Terdiri dari orang-orang yang berani mengambil keputusan, cinta damai, banyak akal, spontan dan logic","Mereka tidak menyukai konflik , dan bila konflik mereka ingin mendamaikan","Biasanya mereka adalah orang yang luwes, mudah bergaul, terbuka, dan mudah melihat pelung daripda ancaman, namun cara berfikir mereka sring diangap berbeda dengan rata-rata orang, serta sikapnya dianggap tidak sistematis"]}],J=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",null,"Tipe Kepribadian berdasarkan brain color"),l.a.createElement("h3",null,"warna otak dapat mengambarkan kepribadian seseorang, sehingga dapat dijadikan tolak ukur untuk memahami posisi yang cocok begi orang tersebut"),Y.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,{key:e.id,judul:e.judul,ciri:e.ciri}),l.a.createElement("br",null))})),l.a.createElement("p",null,"Data ini bersumber dari : Indrabayu, 2018, Menjadi Technopreneurship: Pendekatan Business Model Canvas.LKPPUnhas:Makassar"),l.a.createElement("br",null))},_="Pilih kata yang paling sesuai atau paling mencerminkan diri anda. Aturanya pilih angka dari 4 sampai 1, jika \nkata pertama yang paling sesuai maka, maka masukkan angka 4 pada kotak disamping\nkata. Jika kata ketiga yang sesuai kedua maka masukkan angka 3 pada kotak  \ndisamping kata ketiga. dan jika kata kedua paling tidak sesuai maka masukkan \nangka 1 pada kotak dibawah kata kedua tersebut";var H=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(0),p=Object(u.a)(i,2),o=p[0],d=p[1],k=Object(n.useState)(0),g=Object(u.a)(k,2),b=g[0],E=g[1],h=Object(n.useState)(0),S=Object(u.a)(h,2),T=S[0],K=S[1],D=Object(n.useState)(0),U=Object(u.a)(D,2),Y=U[0],H=U[1];return l.a.createElement(m.a,{className:"container"},l.a.createElement(R,null),l.a.createElement("div",{className:"app"},l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/",exact:!0},l.a.createElement(c,{nama:t,setName:r})),l.a.createElement(s.b,{path:"/penjelasan",exact:!0},l.a.createElement(J,null)),l.a.createElement(s.b,{path:"/pertanyaan1",exact:!0},l.a.createElement(v,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H})),l.a.createElement(s.b,{path:"/pertanyaan2",exact:!0},l.a.createElement(f,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan3",exact:!0},l.a.createElement(y,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan4",exact:!0},l.a.createElement(N,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan5",exact:!0},l.a.createElement(x,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan6",exact:!0},l.a.createElement(I,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan7",exact:!0},l.a.createElement(j,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan8",exact:!0},l.a.createElement(O,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan9",exact:!0},l.a.createElement(C,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan10",exact:!0},l.a.createElement(G,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H,intro:_})),l.a.createElement(s.b,{path:"/pertanyaan11",exact:!0},l.a.createElement(B,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H})),l.a.createElement(s.b,{path:"/pertanyaan12",exact:!0},l.a.createElement(w,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H})),l.a.createElement(s.b,{path:"/pertanyaan13",exact:!0},l.a.createElement(A,{gold:o,blue:b,green:T,orange:Y,setGold:d,setBlue:E,setGreen:K,setOrange:H})),l.a.createElement(s.b,{path:"/hasil",exact:!0},l.a.createElement(M,{gold:o,blue:b,green:T,orange:Y,name:t})),l.a.createElement(s.a,{to:"/"}))),l.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.a4799b97.chunk.js.map