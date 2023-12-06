<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Input</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: url('gam1.jpeg') center center fixed;
            background-size: cover;
        }

        /* Gaya untuk teks selamat datang */
        #welcome-text {
            font-size: 50px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
            color: white;
            text-align: center;
            margin-bottom: 20px;
            margin-top: 50px;
            text-shadow: 2px 2px 2px #000, -2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000;
        }

        .form-container {
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 300px;
            width: 100%;
            text-align: center;
            margin: auto;
            border: black;
            border-radius: 10px;
        }

        .form-container label {
            margin-bottom: 5px;
        }

        .form-container input {
            margin-bottom: 10px;
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .form-container button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .form-container button:hover {
            background-color: #45a049;
        }

        /* Gaya untuk hasil setelah submit */
        #result {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: absolute; /* Menetapkan posisi absolut */
            top: 50%; /* Posisi vertikal 50% dari atas */
            left: 50%; /* Posisi horizontal 50% dari kiri */
            transform: translate(-50%, -50%); /* Menyesuaikan posisi agar berada di tengah */
            color:greenyellow; /* Warna tulisan putih */
            text-shadow: 2px 2px 2px #000, -2px -2px 2px #000, 2px -2px 2px #000, -2px 2px 2px #000; /* Efek bayangan hitam */
            font-size: 75px; /* Ukuran teks */
            border: white;
            border-color: #4caf50;
            border-style: double;
            border-radius: 10px;
            background-color: white;
        }
    </style>
</head>
<body id="body-element">

<script>
    const div = [
        "Ketua Divisi Advokesma dan Eksternal",
        "Ketua Divisi Pengembangan Prestasi",
        "Ketua Divisi Sosial",
        "Ketua Divisi Media dan Informasi",
        "Sekretaris",
        "Bendahara",
        "Anggota Divisi Advokesma dan Eksternal",
        "Anggota Divisi Pengembangan Prestasi",
        "Anggota Divisi Sosial",
        "Anggota Divisi Media dan Informasi",
    ];

    function divisi(nomorHp) {
        const nomorHpInt = parseInt(nomorHp);

        switch (nomorHpInt) {
            case 89517064659:
            case 8176901302:
                return div[8];
            case 82284627089:
                return div[2];
            case 82245788985:
                return div[0];
            case 85695767229:
            case 85807453955:
            case 85772480197:
                return div[6];
            case 85817564214:
                return div[1];
            case 82131259160:
            case 8113666018:
                return div[7];
            case 82179366767:
                return div[3];
            case 85708779694:
            case 881026082884:
            case 81931634187:
                return div[9];
            case 82268479930:
                return div[5];
            case 85816684012:
                return div[4];
            default:
                return "Nomor telepon tidak valid";
        }
    }

    function showResult() {
    const nama = document.getElementById("Masukkan Nama").value;
    const nomorHp = document.getElementById("Masukkan Nomor WhatsApp").value;

    // Menampilkan hasil di tengah web
    document.getElementById("result").innerHTML = `Selamat Datang ${nama} di kabinet TIF 2023.<br> Anda Diterima Menjadi ${divisi(nomorHp)}`;
    document.getElementById("result").style.display = "block";

    // Menyembunyikan teks selamat datang
    document.getElementById("welcome-text").style.display = "none";

    // Menyembunyikan formulir
    document.getElementById("form").style.display = "none";

    // Mengubah gambar latar belakang
    document.body.style.background = "url('11.jpg') center center fixed";
    document.body.style.backgroundSize = "center";
}

</script>

<!-- Teks selamat datang -->
<p id="welcome-text">Selamat datang di pengumuman kabinet TIF 2023</p>

<div id="form" class="form-container">
    <label for="Masukkan Nama">Masukkan Nama:</label>
    <input type="text" id="Masukkan Nama" placeholder="Ex: Rifqi Cahyono">

    <label for="Masukkan Nomor WhatsApp">Masukkan Nomor WhatsApp:</label>
    <input type="text" id="Masukkan Nomor WhatsApp" placeholder="Ex: 89514632811">

    <button onclick="showResult()">Submit</button>
</div>

<!-- Elemen untuk menampilkan hasil -->
<div id="result"></div>

</body>
</html>
