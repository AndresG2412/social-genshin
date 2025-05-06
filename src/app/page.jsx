import React from 'react'
import Slider from './components/client/Slider'
import Eventos from './components/client/Eventos'

export default function Home() {
    return (
        <div>
            <section className='h-screen w-auto flex flex-col items-center justify-center gap-y-15'>
                <Eventos />
                <Slider />
            </section>
            <section className='h-screen w-auto flex flex-col items-center justify-center gap-y-15'>

            </section>
        </div>
    )
}
