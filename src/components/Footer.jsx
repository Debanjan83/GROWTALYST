import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black backdrop-blur-md p-4 mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-7'>
      <div className='text-white text-center sm:text-left'>&copy; All Rights Reserved</div>
      <div className='text-white text-center sm:text-right'>Powered by Growtalyst</div>
    </div>
  )
}

export default Footer
