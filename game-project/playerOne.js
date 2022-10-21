function newPlayerOne(x, y) {
    const element = newImage('/assets/sprite/spriteSub/playerOneidle.gif')
    element.style.zIndex = 1;

    function handleAction(direction) {
        if (direction === null) {
            element.src = 'assets/sprite/spriteSub/playerOneidle.gif'
        }
        if (direction === 'north') {
            element.src = 'assets/sprite/spriteSub/playerOnerun.gif'
        }
        if (direction === 'west') {
            element.src = 'assets/sprite/spriteSub/playerOnerunRev.gif'
        }
        
        if (direction === 'east') {
            element.src = 'assets/sprite/spriteSub/playerOnerun.gif'
        }
        if (direction === 'south') {
            element.src = 'assets/sprite/spriteSub/playerOnerun.gif'
        }
        if (direction === 'jump') {
            element.src = 'assets/sprite/spriteSub/playerOnejump.gif'
        }
        if (direction === 'crouchWest') {
            element.src = 'assets/sprite/spriteSub/playerOneCrouchWalkRev.gif'
        }
        if (direction === 'crouchEast') {
            element.src = 'assets/sprite/spriteSub/playerOneCrouchWalk.gif'
        }
        if (direction === 'attack1') {
            element.src = 'assets/sprite/spriteSub/playerOneattack1.gif'
        }
        if (direction === 'attack2') {
            element.src = 'assets/sprite/spriteSub/playerOneattack2.gif'
        }
        if (direction === 'attack3') {
            element.src = 'assets/sprite/spriteSub/playerOneattack3.gif'
        } 
        if (direction === 'combo') {
            element.src = 'assets/sprite/spriteSub/playerOnecombo.gif'
        }
    }

    move(element).withArrowKeys(x, y, handleAction)

    return {
        element: element
    }
}
const pc = newPlayerOne(100, 110)
