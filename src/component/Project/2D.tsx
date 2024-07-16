import React from 'react'
import p5 from 'src/assets/p5.png'
import { project } from '../Home'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'
function PageTwoD() {
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='grid grid-cols-5'>
          <div className='col-span-1 text-white mt-24 '>
            <h1 className='text-3xl tracking-widest'>2D</h1>
            <h1 className='text-3xl tracking-widest'>PhotoShop</h1>
            <p className='text-base pr-10 tracking-wide'>
              Do you want to know how your Living room or your new interiors will look? We can create a beautiful
              Interior Render based on your floor plan.
            </p>
          </div>
          <div className='col-span-4'>
            <div className='text-white text-lg font-semibold'>Living’ Dat</div>
            <img src={p5} alt='' className='w-full' />
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-lg'>
          <div className='col-span-1'>
            <p>Client:</p>
          </div>
          <div className='col-span-4 flex'>
            <p>Addrest:</p>
            <p className='flex-1 text-center'>Client’s Website:</p>
          </div>
        </div>
        <Page2D />
        <FurnitureModeling />
        <InteriorRendering />
        <ExteriorRendering />
      </div>
    </div>
  )
}

export default PageTwoD
