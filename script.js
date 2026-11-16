function buyNow() {
    window.alert("Thank you for your interest in SnapStand! Coming soon.");
    console.log("Buy Now button was clicked");
}
function showMessage() {
    window.alert("SnapStand makes your everyday phone use easier!");
    console.log("Learn More button was clicked");
}
function selectProduct(name, price) {
    window.alert("You selected " + name + 
                 " for Rs. " + price);

    console.log("Selected product: " + name);
}
function sendMessage() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        window.alert("Please fill in all the fields.");
    }
    else {
        window.alert("Thank you, " + name + "! Your message has been received.");
        console.log("Message submitted by " + name);
    }

}