

//roomNumber and state comes from ../UDP/serial.js
//function changes roomNumber and state for the commands which are used in arduino
const translateRoom = (roomNumber, state) => {
    let conversion;

    //When the request is to turn lights ON
    if (state == 'true') {
        switch (roomNumber) {
            case '1':
                conversion = 'w'
                break
    
            case '2':
                conversion = 'e'
                break

            case '3':
                conversion = 'r'
                break

            case '4':
                conversion = 't'
                break

            case '5':
                conversion = 'y'
                break

            case '6':
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
            case '1':
                conversion = 's'
                break
    
            case '2':
                conversion = 'd'
                break

            case '3':
                conversion = 'f'
                break

            case '4':
                conversion = 'g'
                break

            case '5':
                conversion = 'h'
                break

            case '6':
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
    console.log(lightData)
    if (lightData.includes('ON', 10)) {
        console.log('SISÄLTÄÄ ON')
    }

    else if (lightData.includes('OFF', 10)) {
        console.log('SISÄLTÄÄ OFF')
    }
}


module.exports = {
    translateRoom,
    lightChanges
}