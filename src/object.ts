//* By default it is public */
class Animal {
  //*No need of below initializer when using access modifier  ex : public , private directly in constructor */
  // name: string;
  // sound: string;
  // constructor(name: string, sound: string) {
  //  this.name = name;
  // this.sound = sound;
  // }

  //* Above code can be written as below */
  constructor(
    public name: string,
    public sound: string,
  ) {
    this.name = name;
    this.sound = sound;
  }
  makeSound():string {
    return `${this.name} says ${this.sound}`;
  }
  getName():string {
    return this.name;
  }
}
const newAnimal1 = new Animal("cat", "meow");
const getAnimalName = newAnimal1.getName();
const animalSound = newAnimal1.makeSound();

const newAnimal2 = new Animal("dog", "bark");
const animalSound2 = newAnimal2.makeSound();
const animalName2 = newAnimal2.getName();
