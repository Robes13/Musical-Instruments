class Saxophone extends Instruments {
    constructor(name, material) {
        super(name);
        this.material = material;
        this.playSound("Sounds//saxophone.mp3");
    }
}