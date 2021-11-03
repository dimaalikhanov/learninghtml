let car1 = {
  color: 'green',
  maxSpeed: '250',
  brand: {
    brand: 'toyota',
    model: 'camry'

  }
  }

let car2 = {
  color: 'red',
  maxSpeed: '270',
  brand: {
    brand: 'nissan',
    model: 'teana'
  }
}

car1.color = car2.color;

console.log(car1, car2);
