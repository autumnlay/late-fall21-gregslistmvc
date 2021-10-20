import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({ make: 'Tesla', model: 'CyberTruck', year: 2022, price: 1000000, color: '#C0C0C0', description: 'This thing is sleek, new WINDOWS!!!', imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg' }),
    new Car({ make: 'Mystery', model: 'Machine', year: 1987, price: 29389, color: '#249255', description: 'Smell like teenagers and a dog in here', imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG' }),
    new Car({ make: 'Ford', model: 'Pinto', year: 1980, price: 1488, color: '#900d09', description: 'This car is HOT!!!', imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg' })
  ]


  /** @type {House[]} */
  houses = [
    new House({ year: 1960, price: 100000, sqft: 2000, bedroom: 3, bathroom: 2.5, description: 'It\'s alsright', imgURL: 'http://www.pacificwalkhomes.com/wp-content/uploads/2014/08/cheap-house-kits-image-search-results-499068.jpg' }),
    new House({ year: 2000, price: 200000, sqft: 3000, bedroom: 4, bathroom: 2.5, description: 'It\'s better now', imgURL: 'https://freepngimg.com/thumb/house/27431-9-house.png' }),
    new House({ year: 2020, price: 1000000, sqft: 10000, bedroom: 6, bathroom: 6.5, description: 'It\'s decent enough', imgURL: 'http://reallynicehouses.com/wp-content/uploads/IMG_1397-1.jpg' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
