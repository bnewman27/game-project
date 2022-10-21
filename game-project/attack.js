// function move(element) {
//     element.style.position = 'fixed'

//     function moveToCoordinates(left, bottom) {
//         element.style.left = left + 'px'
//         element.style.bottom = bottom + 'px'
//     }

//     function moveWithArrowKeys(left, bottom, callback){
//         let direction = null;
//         let x = left;
//         let y = bottom;

//         element.style.left = x + 'px'
//         element.style.bottom = y + 'px'
        
//         function inflictDMG(){ 
//             if(direction === 'west'){
//                 x-=1
//             }
//             if(direction === 'north'){
//                 y+=1
//             }
//             if(direction === 'east'){
//                 x+=1
//             }
//             if(direction === 'south'){
//                 y-=1
//             }
//             if(direction === 'crouchwalkRev'){
//                 x-=1
//             }
//             if(direction === 'crouchwalk'){
//                 x+=1
//             }
//             element.style.left = x + 'px'
//             element.style.bottom = y + 'px'
//         }
        
//         setInterval(inflictDMG, 1)
        
//         document.addEventListener('keydown' , function(e){
//             if(e.repeat) return;
        
//             if(e.key === '1'){
//                 direction = 'attack1'
//             }
//             if(e.key === '2'){
//                 direction = 'attack2'
//             }
//             if(e.key === '3'){
//                 direction = 'attack3'
//             }
//             if(e.key === '4'){
//                 direction = 'combo'
//             }
//             if(e.key === 'Shift' + 'ArrowLeft'){
//                 direction = 'crouchwalkEast'
//             }
//             if(e.key === 'Shift' + 'ArrowRight'){
//                 direction = 'crouchwalkWest'
//             }
//             callback(direction)
//         })
        
//         document.addEventListener('keyup', function(e){
//             direction = null
//             callback(direction)
//         })
//     }

//     return {
//         to: moveToCoordinates,
//         withArrowKeys: moveWithArrowKeys
//     }
// }