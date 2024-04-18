class Flute extends Instruments {
    constructor(name, material, holes) {
        super(name);
        this.material = material;
        this.holes = holes;
        this.playSound("Sounds/flute.mp3");
    }
}