window.onload = function () {
  const bugun = new Date().toISOString().split("T")[0];
  document.getElementById("dob").setAttribute("max", bugun);
};

function yasHesapla() {
  const dogumTarihi = document.getElementById("dob").value;
  const sonuc = document.getElementById("sonuc");

  if (!dogumTarihi) {
    sonuc.textContent = "Lütfen doğum tarihinizi giriniz.";
    return;
  }

  const dogum = new Date(dogumTarihi);
  const bugun = new Date();

  if (isNaN(dogum.getTime()) || dogum > bugun) {
    sonuc.textContent = "Lütfen geçerli bir tarih giriniz!";
    return;
  }

  let yil = bugun.getFullYear() - dogum.getFullYear();
  let ay = bugun.getMonth() - dogum.getMonth();
  let gun = bugun.getDate() - dogum.getDate();

  if (gun < 0) {
    ay--;
    const oncekiAy = new Date(bugun.getFullYear(), bugun.getMonth(), 0);
    gun += oncekiAy.getDate();
  }

  if (ay < 0) {
    yil--;
    ay += 12;
  }

  sonuc.textContent = `Yaşınız: ${yil} yıl, ${ay} ay, ${gun} gün olarak hesaplanmıştır.`;
}
