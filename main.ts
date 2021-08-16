radio.onReceivedValue(function (name, value) {
    if (name == "verde") {
        if (value == 1) {
            basic.showIcon(IconNames.Yes)
            for (let índice = 0; índice <= 255; índice++) {
                if (value == 1) {
                    music.setVolume(índice)
                    music.ringTone(262)
                    basic.pause(35)
                } else if (value == 0) {
                    break;
                }
            }
            music.stopAllSounds()
            basic.clearScreen()
        }
    }
})
radio.setGroup(10)
