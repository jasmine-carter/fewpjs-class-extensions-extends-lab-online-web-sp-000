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
    if (this.params[0] + this.params[1] > this.params[2] && this.params[1] + this.params[2] > this.params[0]) {
      return true
    }
  }
}

s1 = 3
s2 = 4
s3 = 9
