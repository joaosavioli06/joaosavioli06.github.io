function age(){
    var currentYear = new Date().getFullYear()

    var currentAge = currentYear - 2006

    var spanId = document.getElementById('age')

    if (spanId){
        spanId.textContent = currentAge
    }
}

window.onload = age