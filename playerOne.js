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
    }

    move(element).withArrowKeys(x, y, handleAction)

    return {
        element: element
    }
}
const pc = newPlayerOne(100, 110)
