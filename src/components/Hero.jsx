import React from 'react'
import { Link } from 'react-router-dom'
import { Button, CssBaseline } from '@mui/material'
import { ReactComponent as Design } from '../images/design.svg'

function Hero() {
    return (
        <div>
            <CssBaseline />
            <main>
                <div className="flex w-full bg-[#003145] py-4 md:p-16 md:justify-between">
                    <div className="text-white md:w-[60%] p-4" >
                        <div className='mb-2'>
                            <h2 className="sm:text-3xl md:text-4xl font-bold">Explore Hackathon</h2>
                        </div>
                        <div className='mb-4'>
                            <p className="text-xs md:text-base">AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                        </div>
                        <div>
                            <Link to="/submission">
                                <Button variant='contained' color='success'>
                                    Create Challenge
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-[30%]">
                        <Design className='w-[150px] h-[200px]' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hero
