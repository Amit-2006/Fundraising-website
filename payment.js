document.getElementById("pay-button").onclick = function () {
    setTimeout(function () {
        document.getElementById("success-modal").style.display = "block";
    }, 1000); 
};

document.getElementById("close-modal").onclick = function () {
    document.getElementById("success-modal").style.display = "none";
};

window.onclick = function (event) {
    if (event.target == document.getElementById("success-modal")) {
        document.getElementById("success-modal").style.display = "none";
    }
};
