function on_forever () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
    basic.pause(500)
    basic.forever(function on_forever2() {
        
    })
}
input.onSound(DetectedSound.Loud, function () {
	
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showIcon(IconNames.Heart)
music.playMelody("C5 B A G B C5 C5 E ", 100)
basic.clearScreen()
basic.pause(Math.round(led.brightness()) + 0)
basic.showIcon(IconNames.Heart)
music.playMelody("G G A G C5 B G G ", 100)
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Heart)
music.playMelody("G G A G B C5 E G ", 100)
on_forever()
let strip = neopixel.create(DigitalPin.P6, 24, NeoPixelMode.RGB_RGB)
