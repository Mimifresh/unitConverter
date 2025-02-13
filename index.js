const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const oneMeter = 3.281
const oneLiter = 0.264
const oneKiligram = 2.204
const oneFoot = 0.3048
const oneGallon = 3.78541
const onePound = 0.453592


convertBtn.addEventListener("click", function() {
    lengthEl.textContent = length(inputEl.value)
    volumeEl.textContent = volume(inputEl.value)
    massEl.textContent = mass(inputEl.value)
    
})

function length(value){
    let meter = (value * oneMeter).toFixed(3)
    let feet = (value * oneFoot).toFixed(3)
    let length = `${value} meters = ${meter} feet | ${value} feet = ${feet} meters`
    return length
}


function volume(value){
    let liter = (value * oneLiter).toFixed(3)
    let gallon = (value * oneGallon).toFixed(3)
    let volume = `${value} liters = ${liter} gallons | ${value} gallons = ${gallon} liters`
    return volume
}

function mass(value){
    let pounds = (value * oneKiligram).toFixed(3)
    let kilos = (value * onePound).toFixed(3)
    let mass = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
    return mass
}