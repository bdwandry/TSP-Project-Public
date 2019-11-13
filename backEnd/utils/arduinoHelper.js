

//roomNumber and state comes from ../UDP/serial.js
//function changes roomNumber and state for the commands which are used in arduino
const translateRoom = (roomNumber, state) => {
    let conversion;

    //When the request is to turn lights ON
    if (state == 'true') {
        switch (roomNumber) {
            
            case '2':
                conversion = 'w'
                break

            case '3':
                conversion = 'e'
                break

            case '4':
                conversion = 'r'
                break

            case '5':
                conversion = 't'
                break

            case '6':
                conversion = 'y'
                break

            case '7':
                conversion = 'u'
                break

            default:
                conversion = 'q'
                break
        }
    }
    
    //When the request is to turn lights ON
    else {
        switch (roomNumber) {
            
    
            case '2':
                conversion = 's'
                break

            case '3':
                conversion = 'd'
                break

            case '4':
                conversion = 'f'
                break

            case '5':
                conversion = 'g'
                break

            case '6':
                conversion = 'h'
                break

            case '7':
                conversion = 'j'
                break

            default:
                conversion = 'a'
                break
        }
    }

    return conversion
}

const lightChanges = (lightData) => {
    
    let roomNumberr = lightData.split(' ')
    
    if (lightData.includes('ON', 9)) {
        
        const lightObject = {
            roomNumber: Number(roomNumberr[1]),
            state: true
        }

        return lightObject
    }

    else if (lightData.includes('OFF', 9)) {

        const lightObject = {
            roomNumber: Number(roomNumberr[1]),
            state: false
        }

        return lightObject
    }
}


module.exports = {
    translateRoom,
    lightChanges
}