class Mapper {
    constructor(x, y, side) {
        this.x = x
        this.y = y
        this.side = side
    }

    position(c, r) {
        var x = this.x + this.side/2 + (this.side*c)
        var y = this.y + this.side/2 + (this.side*r)

        return {
            'x': x,
            'y': y,
            'side': this.side
        }
    }
}