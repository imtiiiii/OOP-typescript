class Shape {
  getArea() {}
}
class Circle extends Shape {
  getArea() {
    return 3.14 * 5 * 5;
  }
}
class Square extends Shape {
  getArea() {
    return 5 * 5;
  }
}
class Rectangle extends Shape {
  getArea() {
    return 5 * 10;
  }
}
