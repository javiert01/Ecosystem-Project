class Bee {
    constructor(wBee, hBee) {
        this.tx = 0
        this.ty = 10000
        this.wBee = wBee
        this.hBee = hBee
    }

    show() {
        stroke("#dbdd00")
        strokeWeight(2)
        ellipse(this.x, this.y, this.wBee, this.hBee)
        strokeWeight(2)
        stroke(0)
        line(this.x, this.y-(this.hBee/2), this.x, this.y+(this.hBee/2))
    }

    fly() {
        this.x = map(noise(this.tx),0,1,0,width)
        this.y = map(noise(this.ty),0,1,0,height*0.4)
        this.tx += 0.005
        this.ty += 0.001
    }
}