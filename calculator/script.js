document.getElementById("btnHitung").addEventListener("click", function () {

    let a = parseFloat(document.getElementById("a").value);
    let r = parseFloat(document.getElementById("r").value);
    let n = parseInt(document.getElementById("n").value);

    let hasil = document.getElementById("hasil");

    // cek input
    if (isNaN(a) || isNaN(r) || isNaN(n)) {
        hasil.innerText = "Input belum lengkap";
        return;
    }

    let Sn;

    if (r === 1) {
        Sn = a * n;
    } else {
        Sn = a * (Math.pow(r, n) - 1) / (r - 1);
    }

    hasil.innerText = "Hasil Sn = " + Sn;
});