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
  
    // Menggunakan switch
    switch (nomorHpInt) {
      case 89517064659:
      case 8176901302:
        return div[8];
      case 82284627089:
        return div[2];
      case 82245788985:
        return div[0];
      case [85695767229, 85807453955, 881026082884]:
        return div[6];
      case 85817564214:
        return div[1];
      case [82131259160, 8113666018]:
        return div[7];
      case 85772480197:
        return div[3];
      case [85708779694, 82179366767, 81931634187]:
        return div[9];
      case 82268479930:
        return div[5];
      case 85816684012:
        return div[4];
      default:
        return "Nomor telepon tidak valid";
    }
  }
  
  const nama = prompt("Masukkan Nama");
  const nomorHp = prompt("Masukkan Nomor Whatsapp");
  
  alert(`Nama: ${nama}\nDivisi: ${divisi(nomorHp)}`);
  