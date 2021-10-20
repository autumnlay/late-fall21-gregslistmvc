import { ProxyState } from "../AppState.js"

function _drawHouse() {
    const houses = ProxyState.houses
    let template = ''
    // loop through the cars
    houses.forEach(house => template += house.Template)
    // add to page
    document.getElementById('listings').innerHTML = template
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouse)
    }

    showHouses() {
        _drawHouse()
        document.getElementById('form-button').classList.remove('visually-hidden')
        //document.getElementById('modal-body-slot').innerHTML = getHouseForm()
    }
}