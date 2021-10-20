import { generateId } from "../Utils/generateId.js"

export class Jobs {
    constructor(data) {
        this.id = generateId()
        this.company = data.company
        this.title = data.title
        this.salary = data.salary
        this.description = data.description
    }


    get Template() {
        // TODO
        return ''
    }
}

