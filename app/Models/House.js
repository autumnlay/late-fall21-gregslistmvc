import { generateId } from "../Utils/generateId.js"

export class House {
    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.price = data.price
        this.sqft = data.sqft
        this.bedroom = data.bedroom
        this.bathroom = data.bathroom
        this.description = data.description
        this.imgURL = data.imgURL
    }


    get Template() {
        // TODO
        return `
            <div class="col-md-3 mt-3" >
                <div class="bg-light elevation-1 rounded">
                    <img width="100%" class="car-img rounded-top" src="${this.imgURL}" alt="house image">
                    <div class ="p-3">
                    <p><b>${this.sqft} - ${this.bedroom} - ${this.bathroom}</b></p>
                    <p>${this.description}</p>
                    <div class ="d-flex align-items-center">
                    <div style ="${this.year}" ></div>
                    <p class ="m-0"><em>$${this.price}</em></p>
                    </div>
                    <div class ="text-end">
                    <button title="delete house" class ='btn btn-danger justify-self-end' onclick="app.housesController.deleteHouse('${this.id}')"><i class ='mdi mdi-delete'></i></button>
                    </div>
                    </div>
                </div>
            </div>
        `
    }
}

