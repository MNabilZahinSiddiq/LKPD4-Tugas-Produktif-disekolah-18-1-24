// No.1
    let PABP = 99;
    let MTK = 99;
    let DPK = 99;

    let rataRata = (PABP + MTK + DPK) / 3

    if(rataRata >= 80 && rataRata < 100){
            result = "grade : A";
        }
        else if(rataRata >= 75 && rataRata < 80){
                result = "grade : B";
    }
    else if(rataRata >= 65 && rataRata < 75){
        result = "grade : C";
    }
    else if(rataRata >= 45 && rataRata < 65){
        result = "grade : D";
    }
    else if(rataRata >= 0 && rataRata < 45){
        result = "grade : E";
    }

    else {
        result = "grade : K";
    }
    console.log(`jadi rata-rata nilai dari murid tersebut adalah ${rataRata} yang berarti ${result}`)

// No.2
    // let angka = prompt("masukan 11 digit angka");

    // let g = parseInt(angka[0])
    // let dd = parseInt(angka.substring(1.3))
    // let mm = parseInt(angka.substring(3.5))
    // let yyyy = parseInt(angka.substring(5.9))
    // let nn = parseInt(angka.substring(9))

    // let bulan = ["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","debember"]

    // let namaBulan = bulan [ mm - 1 ]

    // console.log(`${angka} adalah seorang pegawai bergolong ${g}, lahir pada tanggal ${dd} ${namaBulan} ${yyyy} dan bernomor urut ${nn}`)

    let angka = Number(prompt("masukan nilai 11 digit"))
    let g = Math.floor(angka % 100000000000 / 10000000000)
    let dd = Math.floor(angka % 10000000000 / 100000000)
    let mm = Math.floor(angka % 100000000 / 1000000)
    let yyyy = Math.floor(angka % 1000000 / 100)
    let nn = Math.floor(angka % 100)
    
    if (mm == 1) {
        bulan = "januari"
    } else if (mm == 2) {
        bulan = "februari"
    } else if (mm == 3) {
        bulan = "maret"
    } else if (mm == 4) {
        bulan = "april"
    } else if (mm == 5) {
        bulan = "mei"
    } else if (mm == 6) {
        bulan = "juni"
    } else if (mm == 7) {
        bulan = "juli"
    } else if (mm == 8) {
        bulan = "agustus"
    } else if (mm == 9) {
        bulan = "september"
    } else if (mm == 10) {
        bulan = "oktober"
    } else if (mm == 11) {
        bulan = "november"
    } else if (mm == 12) {
        bulan = "desember"
    } else {
        bulan = "Invalid"
    }
    
    console.log(`${angka} adalah seorang pegawai bergolong ${g}, lahir pada tanggal ${dd} ${bulan} ${yyyy} dan bernomor urut ${nn}`)

// No.3

    let jam = Number(prompt("masukan nominal jam"));
    let menit = Number(prompt("masukan nominal menit"));
    let detik = Number(prompt("masukan nominal detik")) + 1;

    if (detik > 59) {
      hasil = detik = 0;
      hasilM = menit + 1;
      hasilJ = jam;
      hasilSemua = `jadi bila kita menambahkan 1 detik maka waktu yang akan keluar adalah ${hasilJ} : ${hasilM} : ${hasil}`;

      if (hasilM > 59) {
        hasil = detik = 0;
        hasilM = menit = 0;
        hasilJ = jam + 1;
        hasilSemua = `jadi bila kita menambahkan 1 detik maka waktu yang akan keluar adalah ${hasilJ} : ${hasilM} : ${hasil}`;
      }

      if (hasilJ > 23) {
        hasil = detik = 0;
        hasilM = menit = 0;
        hasilJ = jam = 0;
        hasilSemua = `jadi bila kita menambahkan 1 detik maka waktu yang akan keluar adalah ${hasilJ} : ${hasilM} : ${hasil}`;
      }
    } else {
      console.log(
        `jadi bila kita menambahkan 1 detik adalah ${jam} : ${menit} : ${detik}`
      );
    }
    console.log(hasilSemua);

