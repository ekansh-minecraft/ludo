class Board {
    constructor(mapper, board_size) {
        this.mapper = mapper
        this.board_size = board_size
    }

    draw() {
        var n = this.board_size

        for (var r=0; r<n; r++) {
            for (var c=0; c<n; c++) {
                var pos = this.mapper.position(c, r)
                //console.log(pos)
                rect(pos.x, pos.y, pos.side, pos.side)        
                //circle(pos.x, pos.y, pos.side)
            }
        }
    }
}