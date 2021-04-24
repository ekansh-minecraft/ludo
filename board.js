class Board {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.size = 30
    }

    draw() {
        rectMode(CENTER)
        fill("red")
        rect(this.x, this.y, this.w, this.h)

        var left = this.x - this.w/2
        var right = this.x + this.w/2
        var top = this.y - this.h/2
        var bottom = this.y + this.h/2
        var side = this.size - 2

        fill("black")
        for(var y=top + this.size/2 + 10; y < bottom - this.size/2; y+= this.size) {
            for (var x=left + this.size / 2 + 9; x<right - this.size / 2; x += this.size) {
                rect(x, y, side, side)
            }
        }
    }
}