def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
    basic.pause(500)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.clear_screen()
    basic.pause(500)
    
    def on_forever2():
        pass
    basic.forever(on_forever2)
    

def on_sound_loud():
    pass
input.on_sound(DetectedSound.LOUD, on_sound_loud)

basic.show_leds("""
    . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
""")
basic.show_icon(IconNames.HEART)
music.play_melody("C5 B A G B C5 C5 E ", 100)
basic.clear_screen()
basic.pause(Math.round(100) + 0)
basic.show_icon(IconNames.HEART)
music.play_melody("G G A G C5 B G G ", 100)
basic.clear_screen()
basic.pause(500)
basic.show_icon(IconNames.HEART)
music.play_melody("G G A G B C5 E G ", 100)