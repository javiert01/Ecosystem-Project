class Lake {
    constructor(wLake, hLake) {
        this.position = createVector(width / 2, height * 0.7)
        this.wLake = wLake
        this.hLake = hLake
    }

    show() {
        fill("#00fcf8")
        ellipse(this.position.x,this.position.y, this.wLake, this.hLake)
    }

}