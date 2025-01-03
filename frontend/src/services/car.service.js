import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import _cars from '../data/cars.json'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'car'

export const carService = {
  query,
  getById,
  save,
  remove,
}
window.cs = carService

async function query(filterBy = { name: '', capacity: 0 }) {
//   return httpService.get(STORAGE_KEY, filterBy)

  var cars = await storageService.query(STORAGE_KEY)
  if (!cars.length) {
    cars = _cars;
    utilService.saveToStorage(STORAGE_KEY, cars)
  }
  
  if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      cars = cars.filter(car => regex.test(car.vendor) || regex.test(car.description))
  }
  if (filterBy.price) {
      cars = cars.filter(car => car.price <= filterBy.price)
  }
  return cars
}
async function getById(carId) {
  return storageService.get(STORAGE_KEY, carId)
//   return await httpService.get(`car/${carId}`)
}

async function remove(carId) {
  await storageService.remove(STORAGE_KEY, carId)
//   return httpService.delete(`car/${carId}`)
}
async function save(car) {
  var savedCar
  if (car._id) {
    savedCar = await storageService.put(STORAGE_KEY, car)
    // savedCar = await httpService.put(`car/${car._id}`, car)
  } else {
    // Later, owner is set by the backend
    // car.owner = userService.getLoggedinUser()
    savedCar = await storageService.post(STORAGE_KEY, car)
    // savedCar = await httpService.post('car', car)
  }
  return savedCar
}