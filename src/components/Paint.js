import React, { useState, useEffect, useRef } from 'react'
import Name from './Name'
import ColorPicker from './ColorPicker'
import randomColor from 'random-color'
import Canvas from './Canvas'
import WindowSize from './WindowSize'

export default function Paint() {

    const [ colors, setColors ] = useState([])
    const [ activeColor, setActiveColor ] = useState(null)

    const random = randomColor()

    const getColors = () => {
        const baseColor = random.hexString().slice(1)
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
        .then(res => res.json())
        .then(res => {
            setColors(res.colors.map(color => color.hex.value))
            setActiveColor(res.colors[0].hex.value)
        })
    }

    useEffect(getColors, [])

    const headerRef = useRef({ offsetHeight: 0 })

    return (
        <div className='app'>
            <header 
                ref = { headerRef }
                style = {{ borderTop: `10px solid ${activeColor}`}}
            >
                <div className='app'>
                    <Name />
                </div>
                <div style={{ marginTop: 10 }}>
                    <ColorPicker
                        colors = {colors}
                        activeColor = {activeColor}
                        setActiveColor = {setActiveColor}
                    />
                </div>
            </header>
            {activeColor && (
                <Canvas
                    color={activeColor}
                    height={window.innerHeight -  headerRef.current.offsetHeight}
                />
            )}
            <WindowSize/>
        </div>
    )
}