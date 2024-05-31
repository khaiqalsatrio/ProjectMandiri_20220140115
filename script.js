document.getElementById('dataForm').onsubmit = function (event) {
  event.preventDefault(); // Cegah pengiriman formulir
  submit(); // Panggil fungsi kirim
};

function submit() {
  // Dapatkan value form
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const angkatan = document.getElementById('angkatan').value;
  const peminatanElement = document.querySelector('input[name="peminatan"]:checked');
  const alamat = document.getElementById('alamat').value;

  // Periksa apakah semua kolom terisi
  if (!nama || !nim || !angkatan || !peminatanElement || !alamat) {
    // Tampilkan peringatan jika ada data yang tidak lengkap
    Swal.fire({
      title: 'Data Tidak Lengkap',
      text: 'Silakan isi semua kolom.',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
    return; // kembali jika data tidak lengkap
  }

  // Dapatkan value peminatan yang dipilih
  const peminatan = peminatanElement.value;

  // Membuat tanggal saat ini
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  // Membuat alert message
  const message = `
      <table style="width:60%;text-align:left;">
        <tr><td><strong>Nama:</strong></td><td>${nama}</td></tr>
        <tr><td><strong>NIM:</strong></td><td>${nim}</td></tr>
        <tr><td><strong>Angkatan:</strong></td><td>${angkatan}</td></tr>
        <tr><td><strong>Peminatan:</strong></td><td>${peminatan}</td></tr>
        <tr><td><strong>Alamat:</strong></td><td>${alamat}</td></tr>
        <tr><td><strong>Tanggal:</strong></td><td>${formattedDate}</td></tr>
      </table>
    `;

  // Tampilkan konfirmasi SweetAlert2
  Swal.fire({
    title: 'Konfirmasikan Detail Anda',
    html: message, // Gunakan properti html untuk merender pesan dengan tabel
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Lanjutkan',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      // Jika sudah dikonfirmasi, Anda dapat melanjutkan pengiriman formulir (misalnya mengirim data ke server)
      Swal.fire('Submitted!', 'Data Anda Telah Di Kirim.', 'success');
      document.getElementById('dataForm').reset();
    }
  });
}
