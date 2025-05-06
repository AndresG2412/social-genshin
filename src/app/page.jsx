import React from 'react'
import Slider from './components/client/Slider'
import Eventos from './components/client/Eventos'

export default function Home() {
    return (
        <div>
            <section className='h-screen w-screen flex flex-col items-center justify-center'>
                <Eventos />
                <Slider />
            </section>
        </div>
    )
}
