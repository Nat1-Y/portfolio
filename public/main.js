document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this[0].value;
    const email = this[1].value;
    const message = this[2].value;

    fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("status").textContent = "Message sent!";
        this.reset();
    })
    .catch(err => {
        document.getElementById("status").textContent = "Error sending message.";
    });
});