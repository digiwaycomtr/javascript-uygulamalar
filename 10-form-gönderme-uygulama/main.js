const form = document.getElementById("user-form");
const feedbackArea = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  let feedback = "";
  let isValid = true;

  if (name === "") {
    feedback += "<p>❗️İsim boş bırakılamaz!</p>";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback += "<p>❗️Geçerli bir e-posta adresi girin!</p>";
    isValid = false;
  }

  const phonePattern = /^[0-9]{5}$/;
  if (!phone.match(phonePattern)) {
    feedback += "<p>❗️5 haneli, geçerli bir telefon numarası girin!</p>";
    isValid = false;
  }

  if (!isValid) {
    document.getElementById("form-feedback").innerHTML = feedback;
  } else {
    feedbackArea.innerHTML = "Form başarıyla gönderildi!";
    document.getElementById("user-form").reset();
  }
});
