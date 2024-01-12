import React from 'react'
import Card from './Card'

function Tours({tours, removeTour}) {
    return (
        <div className='container flex justify-center items-center text-center flex-col'>
            <div>
                <h2 className='title text-[3rem] m-[6vh] border-dashed border-[7px] border-[#0011a0] rounded-[20px] px-[7vh] py-[1vh]'>Plan With Me</h2>
            </div>
            <div className='card flex items-center justify-center flex-wrap max-w-[1300px] mx-auto my-0 gap-3 '>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours
