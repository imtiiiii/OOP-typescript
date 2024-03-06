//* ABSTRACT CLASSES ARE USED TO DEFINE THE STRUCTURE OF A CLASS, BUT NOT TO CREATE OBJECTS DIRECTLY
//* IT IS LIKE A BLUEPRINT FOR OTHER CLASSES TO FOLLOW
abstract class Camera {
  mode: string;
  file: string;
  constructor(mode: string, file: string) {
    this.mode = mode;
    this.file = file;
  }
  //? ABSTRACT METHODS ARE USED TO DEFINE THE STRUCTURE OF A METHOD, BUT NOT TO IMPLEMENT IT
  abstract takePicture(): void;
}
class Iphone extends Camera {
  takePicture(): void {
    console.log(
      `Taking picture in ${this.mode} mode and saving it to ${this.file}`
    );
  }
}
const myIphone = new Iphone("portrait", "myIphone.jpg");
myIphone.takePicture();
