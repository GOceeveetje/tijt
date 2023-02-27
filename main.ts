let tijt1 = 0
let tijt2 = 0
let tijt3 = 0
let tijt4 = 0
let tijt5 = 0
let tijt6 = 0
let spaning1 = 0
let spaning2 = 0
let spaning3 = 0
let toetand1 = 0
let toestan2 = 0
let toestand3 = 0
basic.forever(function () {
    serial.writeNumber(tijt1 - tijt2)
    serial.writeNumber(tijt3 - tijt4)
    serial.writeNumber(tijt5 - tijt6)
    serial.writeNumber(spaning1)
    serial.writeNumber(spaning2)
    serial.writeNumber(spaning3)
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 512) {
        tijt1 = input.runningTime()
        spaning1 = pins.analogReadPin(AnalogPin.P0)
        toetand1 = 1
    }
    if (pins.analogReadPin(AnalogPin.P0) == 1) {
        tijt2 = input.runningTime()
        spaning1 = pins.analogReadPin(AnalogPin.P0)
        toetand1 = 2
    }
    if (pins.analogReadPin(AnalogPin.P1) > 512) {
        tijt3 = input.runningTime()
        spaning2 = pins.analogReadPin(AnalogPin.P1)
        toestan2 = 1
    }
    if (pins.analogReadPin(AnalogPin.P1) == 1) {
        tijt4 = input.runningTime()
        spaning2 = pins.analogReadPin(AnalogPin.P1)
        toestan2 = 2
    }
    if (pins.analogReadPin(AnalogPin.P2) > 512) {
        tijt5 = input.runningTime()
        spaning3 = pins.analogReadPin(AnalogPin.P2)
        toestand3 = 1
    }
    if (pins.analogReadPin(AnalogPin.P2) == 1) {
        tijt6 = input.runningTime()
        spaning3 = pins.analogReadPin(AnalogPin.P2)
        toestand3 = 2
    }
})
