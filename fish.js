class Fish {
    constructor(wFish, hFish) {
        this.position = createVector(width / 2, height * 0.8)
        this.velocity = createVector(0, 0)
        this.acceleration = createVector(0, 0)
        this.noiseValues = createVector(80000, 500)
        this.noiseChange = createVector(0.0005, 0.005)
        this.wFish = wFish
        this.hFish = hFish
    }

    show() {
        fill("#d45800")
        stroke("#d45800")
        ellipse(this.position.x, this.position.y, this.wFish, this.hFish)
        triangle(this.position.x - (this.wFish * 0.3), this.position.y, this.position.x - (this.wFish * 0.7), this.position.y + (this.hFish / 2), this.position.x - (this.wFish * 0.7), this.position.y - (this.hFish / 2))
    }

    /* checkEdges(envPosition) {
        this.position.x = this.position.x > this.envPosition.x ?  0 : this.position.x < 0 ? width : this.position.x
        this.position.y = this.position.y > height ?  0 : this.position.y < 0 ? height : this.position.y
    } */

    swim(envPosition, envWidth, envHeight, targetPosition) {
        if (targetPosition) {
            this.acceleration = p5.Vector.sub(targetPosition, this.position)
            this.acceleration.setMag(0.1)
            this.velocity.add(this.acceleration)
            this.velocity.limit(2)
            this.position.add(this.velocity)
            return
        }
        this.position.x = map(noise(this.noiseValues.x), 0, 1, envPosition.x - (envWidth / 2), envPosition.x + (envWidth / 2))
        this.position.y = map(noise(this.noiseValues.y), 0, 1, envPosition.y - (envHeight / 2), envPosition.y + (envHeight / 2))
        this.noiseValues.add(this.noiseChange)
    }
}