class Bee {
    constructor(wBee, hBee) {
        this.position = createVector(0,0)
        this.noiseValues = createVector(0, 10000)
        this.noiseChange = createVector(0.005, 0.001)
        this.wBee = wBee
        this.hBee = hBee
    }

    show() {
        stroke("#dbdd00")
        fill("#dbdd00")
        strokeWeight(2)
        ellipse(this.position.x, this.position.y, this.wBee, this.hBee)
        stroke(0)
        line(this.position.x, this.position.y-(this.hBee/2), this.position.x, this.position.y+(this.hBee/2))
    }

    fly() {
        this.position.x = map(noise(this.noiseValues.x),0,1,0,width)
        this.position.y = map(noise(this.noiseValues.y),0,1,0,height*0.4)
        this.noiseValues.add(this.noiseChange)
    }
}