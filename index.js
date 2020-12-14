// Your code here
class Polygon {
  constructor(array){
    this.params = array
  }
  get countSides() {
    return this.params.length
  }

  get perimeter(){
    let perimeter = 0
    for (const element of this.params){
      perimeter = perimeter + element
    }
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    
  }
}