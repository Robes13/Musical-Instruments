class Guitar extends Stringed {
    constructor(name, material) {
        super(name);
        this.material = material;
        this.playSound("Sounds/guitar.mp3");
    }
}