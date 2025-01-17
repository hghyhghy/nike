import React from 'react'

const Shoecard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {

    const handleclick = () => {
        if ( bigShoeImg !== imgURL.bigShoe){

            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className={ `border-2 rounded-xl
        ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer
        max-sm: flex-1`}
        onClick={handleclick}
        >

            <div className='flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgURL.thumbnail} alt="shoe collection"
                  width={127}
                  height={103.34}
                  className='object-contain '
                   />
            </div>

    </div>
  )
}

export default Shoecard