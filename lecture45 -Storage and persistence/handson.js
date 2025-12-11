// Check if browser supports localStorage
function hasLocalStorage() {
    try {
        localStorage.setItem("test", "ok");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
}

const msg = document.getElementById("msg");
 
if (!hasLocalStorage()) {
    msg.innerText = "LocalStorage not supported in this browser!";
} else {
    // Save data
    localStorage.setItem("name", "Sargar Popat");

    // Read data
    let name = localStorage.getItem("name");

    // Update screen
    msg.innerText =
        "✔ LocalStorage Supported\n" +
        "\nSaved Name: " + name +
        "\n\n(Everything ran automatically. No buttons, no events)";
}
