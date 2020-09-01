//Initialize e-mail
(function () {
  emailjs.init("user_lu6kikVV2cqGoBk7W756d");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("gmail", "template_I80bi2SY", this);
    });
};
