radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 132) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else {
        if (receivedNumber == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
        } else {
            if (receivedNumber == 2) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 70)
            } else {
                if (receivedNumber == 3) {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                } else {
                    if (receivedNumber == 4) {
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                    } else {
                        if (receivedNumber == 8) {
                            maqueen.servoRun(maqueen.Servos.S2, 100)
                        } else {
                            if (receivedNumber == 9) {
                                maqueen.servoRun(maqueen.Servos.S2, 0)
                            }
                        }
                    }
                }
            }
        }
    }
})
radio.setGroup(132)
maqueen.motorStop(maqueen.Motors.All)
maqueen.servoRun(maqueen.Servos.S2, 0)
