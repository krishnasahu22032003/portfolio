import React from 'react'
import { TextReveal } from '../ui/text-reveal'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
        <h1 className="font-serif text-2xl mx-auto items-center justify-center flex max-w-2xl">
  <TextReveal text="I build calm, considered products." />
</h1>
    </div>
  )
}

export default Hero