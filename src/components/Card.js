import React, { useState } from 'react'

function Card({id, name, info, image, price, removeTour}) {

    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,200)}....`

    function readMoreHandler() {
        setReadMore(!readMore)
    }

    
    return (
        <div className='card w-[400px] max-h-max md-[1rem] p-[1rem] flex flex-col text-start rounded-[10px] shadow-3xl'>
            <img src={image} className='image w-[380px] aspect-square object-cover' />
            <div className='tour-info my-[20px] mx-[5px]'>
                <div className='tour-details'>
                    <h3 className='tour-price font-bold text-[#1faa59] text-[1.3rem]'>₹ {price}</h3>
                    <h3 className='tour-name font-bold text-[1.2rem]'>{name}</h3>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more text-[#12b0e8] cursor-pointer' onClick={readMoreHandler}>
                        {readMore ? 'Show Less' : "Read More"}
                    </span>
                </div>
            </div>
            <button className='btn-red mt-[18px] py-[10px px-[80px] border-solid border-[1px] border-[#b4161b] cursor-pointer rounded-[10px] text-[18px] font-bold bg-[#b4161b21] hover:bg-[#b4161b] hover:text-white hover:transition-all' onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card
