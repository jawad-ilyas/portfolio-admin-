import React from 'react'
import Button from '../../Components/Button/Button'

function Review() {
  return (
    <div className='container pt-3 pb-3'>

      <div className='flex '>
        <div className='w-2/12 sticky top-20 h-full'>
          <Button name={"Add Review"} id={"addReview"} />
          <Button name={"Show Review"} id={"ShowReview"} />
        </div>
        <div className='w-10/12'>

          <div id='addReview'>
            
          </div>
          <div id='ShowReview'></div>

        </div>
      </div>


    </div>
  )
}

export default Review