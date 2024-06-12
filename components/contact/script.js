let menuIcon = document.querySelector(".menuIcon")
let nav = document.querySelector("nav ul")
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active")
    nav.classList.toggle("active")
    })

const toastbody = document.querySelector(".toast-body")
    toastbody.innerHTML = `Hello dear client, please fill this form`
function alert() {
    // alert
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
}
        alert()

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "parvaj",
        Password: '"<Parvaj/1111>"',
        To: 'parvaj420@outlook.com',
        From: email,
        Subject: `New contact form message from ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
    }).then(
        toastbody.innerHTML = `Hello ${name}, Thank you for sending us the message`
    ).catch(
        error => toastbody.innerHTML = `Hello ${name}, Failed to your send mail. Please try again later.`
    );
});




