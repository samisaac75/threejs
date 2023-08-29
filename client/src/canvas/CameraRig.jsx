import React, { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({ children }) => {
    const snap = useSnapshot(state)
    const group = useRef()

    useFrame((state, delta) => {

        const isBreakpoint = window.innerWidth <= 1260
        const isMobile = window.innerWidth <= 600

        //Set initial position of the model
        let targetPosition = [-0.4, 0, 2]

        //Set the model rotation smoothly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )
    })



    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig