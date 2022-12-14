enum NumDirecrion {
    up,
    down,
    left,
    right
}

enum LiteralDirecrion {
    up = 'UP',
    down = 'DOWN',
    left = 'LEFT',
    right = 'RIGHT'
}

enum GeterogenDirecrion {
    up = 'UP',
    down = 'DOWN',
    left = 3,
    right = 4
}

function runEnum(numEnum: { up: number }) {

}

runEnum(NumDirecrion)

const numEnum = NumDirecrion.up //up = 0
const stringEnum = NumDirecrion[numEnum] // up = up
