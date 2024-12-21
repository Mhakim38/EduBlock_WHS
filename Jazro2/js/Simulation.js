const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = 682
canvas.height = 1100

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor({ position, imageSrc, map }) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.map = map

        for (const level in this.map) {
            map[level].image = new Image()
            map[level].image.src = map[level].imageSrc
        }
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    update() {
        this.draw()
    }
}

class Character extends Sprite {
    constructor({ position, velocity, imageSrc, sprites }) {
        super({
            position,
            imageSrc
        })
        this.velocity = velocity
        this.height = 20
        this.sprites = sprites

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: 'Simulation/EdubotMap.png',
    map: {
        default: {
            imageSrc: 'Simulation/EdubotMap.png'
        },
        lvl1: {
            imageSrc: 'Simulation/EdubotMapL1.png'
        },
        lvl2: {
            imageSrc: 'Simulation/EdubotMapL2.png'
        },
        lvl3: {
            imageSrc: 'Simulation/EdubotMapL3.png'
        }
    }
})

const character = new Character({
    position: {
        x: 53,
        y: 903
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: 'Simulation/EdubotForward.png',
    sprites: {
        forward: {
            imageSrc: 'Simulation/EdubotForward.png'
        },
        backward: {
            imageSrc: 'Simulation/EdubotBackward.png'
        },
        right: {
            imageSrc: 'Simulation/EdubotRight.png'
        },
        left: {
            imageSrc: 'Simulation/EdubotLeft.png'
        }
    }
})

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    character.update()

    character.velocity.x = 0
    character.velocity.y = 0
}
animate()

function defMap() {
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    character.update()
    character.image = character.sprites.forward.image
    character.position.x = 53
    character.position.y = 903

    background.image = background.map.default.image
}
function lvl1() {
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    character.update()
    character.image = character.sprites.forward.image
    character.position.x = 53
    character.position.y = 903

    background.image = background.map.lvl1.image
}
function lvl2() {
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    character.update()
    character.image = character.sprites.forward.image
    character.position.x = 53
    character.position.y = 903

    background.image = background.map.lvl2.image
}
function lvl3() {
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    character.update()
    character.image = character.sprites.forward.image
    character.position.x = 53
    character.position.y = 903

    background.image = background.map.lvl3.image
}


//function for move forward(right,left,up, and down)
var log = [];
function moveUpward() {
    log.push('FORWARD');
}
function moveDownward() {
    log.push('BACKWARD');
}
function moveLeft() {
    log.push('LEFT');
}
function moveRight() {
    log.push('RIGHT');

}
//end of move forward function

//function for move backward(right,left,up, and down)
function moveUp() {
    log.push('DOWN');
}
function moveDown() {
    log.push('UP');
}
function moveLeftB() {
    log.push('RIGHT_B');
}
function moveRightB() {
    log.push('LEFT_B');

}
//end of move forward function

//function for turn right
function turnRightUp() {
    log.push('TURN_RIGHT');
}
function turnRight() {
    log.push('TURN_DOWN');
}
function turnRightDown() {
    log.push('TURN_LEFT');
}
function turnRightLeft() {
    log.push('TURN_UP');
}
//end function turn right

//function for turn left
function turnLeftUp() {
    log.push('TURN_LEFT');
}
function turnLeft() {
    log.push('TURN_DOWN');
}
function turnLeftDown() {
    log.push('TURN_RIGHT');
}
function turnLeftRight() {
    log.push('TURN_UP');
}
//end function turn left

function step() {
    var action = log.shift();
    if (!action) return;
    if (action === 'FORWARD') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.x = 0
        character.velocity.y = -130
        character.image = character.sprites.forward.image
    }
    else if (action === 'RIGHT') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.y = 0
        character.velocity.x = 130
        character.image = character.sprites.right.image
    }
    else if (action === 'LEFT') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.y = 0
        character.velocity.x = -130
        character.image = character.sprites.left.image
    }
    else if (action === 'BACKWARD') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.x = 0
        character.velocity.y = 130
        character.image = character.sprites.backward.image
    }
    else if (action === 'UP') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.x = 0
        character.velocity.y = 130
        character.image = character.sprites.forward.image
    }
    else if (action === 'DOWN') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.x = 0
        character.velocity.y = -130
        character.image = character.sprites.backward.image
    }
    else if (action === 'LEFT_B') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.y = 0
        character.velocity.x = 130
        character.image = character.sprites.left.image
    }
    else if (action === 'RIGHT_B') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        background.update()
        character.update()
        character.velocity.y = 0
        character.velocity.x = -130
        character.image = character.sprites.right.image
    }
    else if (action === 'TURN_UP') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        character.image = character.sprites.forward.image
        background.update()
        character.update()
    }
    else if (action === 'TURN_DOWN') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        character.image = character.sprites.backward.image
        background.update()
        character.update()
    }
    else if (action === 'TURN_RIGHT') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        character.image = character.sprites.right.image
        background.update()
        character.update()
    }
    else if (action === 'TURN_LEFT') {
        c.fillStyle = 'white'
        c.fillRect(0, 0, canvas.width, canvas.height)
        character.image = character.sprites.left.image
        background.update()
        character.update()
    }
    // Wait 1000 ms, then execute the next step.
    setTimeout(step, 600);
}
step();

function resetCode() {
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    character.update()
    character.image = character.sprites.forward.image
    character.position.x = 53
    character.position.y = 903

    var snd = new Audio('media/click.mp3')
    snd.play()
}