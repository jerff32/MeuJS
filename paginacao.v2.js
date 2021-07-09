
document.body.addEventListener("keydown", function(e) {
        if(39 === e.keyCode || 68 === e.keyCode) {
            const e = document.getElementById("proximo-cap");
            null === e || e.classList.contains("disabled") || e.click()
        } else if(37 === e.keyCode || 65 === e.keyCode) {
            const e = document.getElementById("cap-anterior");
            null === e || e.classList.contains("disabled") || e.click()
        }
    })
}
