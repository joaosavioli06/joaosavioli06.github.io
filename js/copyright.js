function yearJs(){
    var currentYear = new Date().getFullYear()

    var yearElement = document.getElementById('year')
    
    if(yearElement){
        yearElement.textContent = currentYear
    }
}

window.onload = year