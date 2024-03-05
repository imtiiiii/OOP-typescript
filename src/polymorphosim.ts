class Shape {
  getArea(): void {}
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return 3.14 * this.radius ** 2;
  }
}
class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }
  getArea(): number {
    return this.side * this.side;
  }
}
class Rectangle extends Shape {
  length: number;
  width: number;
  constructor(length: number, width: number) {
    super();
    this.length = length;
    this.width = width;
  }
  getArea(): number {
    return this.length * this.width;
  }
}
const circle = new Circle(5);
const square = new Square(4);
const rectangle = new Rectangle(5, 10);
console.log(circle.getArea());
console.log(square.getArea());
console.log(rectangle.getArea());
