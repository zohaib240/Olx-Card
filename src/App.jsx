
import React from 'react'
import Card from './assets/Card'

const App = () => {
  return (
          <>
          <h1 className='text-center mt-4 font-serif text-4xl'>Olx Card Components</h1>
         <div className='flex mt-3'>
         <Card img='https://cdn.pixabay.com/photo/2015/09/08/21/02/superbike-930715_960_720.jpg' price='55555555' title='Bike' description='THIs is The Best Bike in The World ' location="Lahore"   />
         <Card img='https://cdn.pixabay.com/photo/2013/07/13/11/27/car-158202_960_720.png'  price='55555555' title='Car' description='THIs is The Best Car in The World ' location="Saddar bazar"  />
         </div>
         </>
         
  )
}

export default App