import React from 'react'

export default function OpenAccount() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='hero image' className='mb-5'/>
        <h1 
          className='mt-5 mb-4'
          style={{color:"#424242"}}
        >
          Open a Zerodha account
        </h1>
        <p 
          className='p-2 mb-4'
          style={{color:"#424242", fontSize:"25px"}}
        >
          
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.

        </p>
        <button 
          className='p-2 btn btn-primary mb-5'
          style={{width:"20%", margin: "0 auto", fontSize:"20px", fontWeight:"600"}}
        >
          Sign up for Free
        </button>
      </div>
      
    </div>
  )
}
