const submitBtn = document.getElementById("submitBtn");
const nameInpt = document.getElementById("name");
const passwordInpt = document.getElementById("password");

submitBtn.addEventListener("click", function () {
  const credentials = {
    name: nameInpt.value,
    password: passwordInpt.value,
  };

  if (credentials.name.length >= 4 && credentials.password.length >= 5) {
    alert("Malumotlar tog'ri kiritildi");
  } else {
    alert("Kiritganlaringizda kamchilik  bor");
  }
});
