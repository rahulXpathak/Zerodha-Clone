import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='hero image' className='mb-5'/>
        <h1 
          className='mt-5'
          style={{color:"#424242"}}
        >
          Invest in everything
        </h1>
        <p 
          className='p-2'
          style={{color:"#424242", fontSize:"25px"}}
        >
          
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

        </p>
        <button 
          className='p-2 btn btn-primary mb-5'
          style={{width:"20%", margin: "0 auto", fontSize:"20px", fontWeight:"600"}}
        >
          Signup Now
        </button>
      </div>
      
    </div>
  )
}
