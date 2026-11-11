function showMessage() {
    alert("Welcome to my portfolio!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Thank you, " + name + "! Your message has been received.";

    this.reset();
});