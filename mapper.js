class Mapper {
    constructor(x, y, side, n) {
        this.x = x
        this.y = y
        this.side = side
        this.n = n

        this.left = this.x - (this.side * n/2)
        this.right = this.x + (this.side * n/2)
        this.top = this.y - (this.side * n/2)
        this.bottom = this.y + (this.side * n/2)
    }

    position(c, r) {
        var x = this.left + (this.side*c) - this.side/2
        var y = this.bottom - (this.side*r) + this.side/2

        return {
            'x': x,
            'y': y
        }
    }
}