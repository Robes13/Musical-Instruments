class Harp extends Stringed {
    constructor(name, height) {
        super(name);
        this.height = height;
        this.playSound("Sounds/harp.mp3");
    }
}