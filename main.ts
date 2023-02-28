let tijt1 = 0
let tijt3 = 0
let tijt4 = 0
let tijt5 = 0
let tijt6 = 0
basic.forever(function () {
    basic.pause(5000)
    for (let index = 0; index < 0; index++) {
        let tijt2 = 0
        serial.writeNumber(tijt1 - tijt2)
        serial.writeLine("")
        serial.writeNumber(tijt3 - tijt4)
        serial.writeLine("")
        serial.writeNumber(tijt5 - tijt6)
        serial.writeLine("")
        serial.redirect(
        SerialPin.USB_TX,
        SerialPin.USB_RX,
        BaudRate.BaudRate115200
        )
    }
})
basic.forever(function () {
    for (let index = 0; index < 0; index++) {
        if (pins.analogReadPin(AnalogPin.P0) > 512) {
            tijt1 = input.runningTime()
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
        if (pins.analogReadPin(AnalogPin.P0) < 50) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
            tijt5 = input.runningTime()
        }
        if (pins.analogReadPin(AnalogPin.P1) > 512) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
            tijt3 = input.runningTime()
        }
        if (pins.analogReadPin(AnalogPin.P1) < 50) {
            tijt4 = input.runningTime()
            basic.showLeds(`
                . # . . .
                . # . . .
                . # # # .
                . . # . .
                . . # . .
                `)
        }
        if (pins.analogReadPin(AnalogPin.P2) > 512) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
            tijt5 = input.runningTime()
        }
        if (pins.analogReadPin(AnalogPin.P2) < 50) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
            tijt6 = input.runningTime()
        }
    }
})
