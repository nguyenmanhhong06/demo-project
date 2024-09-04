import React, { useEffect, useState } from 'react'
import InteriorRendering from '../components/InteriorRendering'
import FurnitureModeling from '../components/FurnitureModeling'
import ExteriorRendering from '../components/ExteriorRendering'
import Page2D from '../components/Page2D'

import Line from '../components/Line'
import { API, REACT_APP_BASE_URL } from 'src/ultils/api'
import { useLocation, useParams } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px'
}
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='white'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='white'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
      </svg>
    </button>
  )
}
function Dynamic2D() {
  const [interiorData, setInterior]: any = useState([])
  const [furnitureData, setFurnitureData]: any = useState([])
  const [exteriorData, setExteriorData]: any = useState([])
  const [towDData, setTowDData]: any = useState([])

  const [bannerIndex, setBannerindex] = useState(0)
  const [data, setData] = useState<any>({})
  const { name } = useParams()
  useEffect(() => {
    if (towDData.length > 0 && name) {
      const result = towDData.find((item: any) => item.id === +name)
      setData(result)
    }
  }, [towDData, name])
  const callApi = async () => {
    const result_interior = await API.get('/api/interiors/1?populate[InteriorItem][populate]=*')
    const result_exterior = await API.get('/api/exteriors/1?populate[Exterior][populate]=*')
    const result_furniture = await API.get('/api/furnitures/1?populate[Furniture][populate]=*')
    const result_cartoon = await API.get('/api/cartoons/1?populate[Cartoon][populate]=*')
    if (result_interior?.data) {
      setInterior(result_interior?.data?.data.attributes.InteriorItem)
    }

    if (result_furniture?.data) {
      setFurnitureData(result_furniture?.data?.data.attributes.Furniture)
    }
    if (result_exterior?.data) {
      setExteriorData(result_exterior?.data?.data.attributes.Exterior)
    }

    if (result_cartoon?.data) {
      setTowDData(result_cartoon?.data?.data.attributes.Cartoon)
    }
  }
  useEffect(() => {
    callApi()
  }, [])
  const handleSlideChange = (previous: any, next: any) => {
    setBannerindex(next)
  }
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-1 mb-6 lg:mb-0 text-white lg:mt-24 mr-6 md:mr-0'>
            <h1 className='lg:text-3xl md:text-2xl text-xl  tracking-widest font-banmethuot font-black'>
              {data?.DetailProduct?.title}
            </h1>
            <p className='text-sm lg:text-base mt-2 md:pr-10 tracking-wide '>{data?.DetailProduct?.description}</p>
          </div>
          <div className='col-span-4  '>
            <div className='text-white text-lg font-semibold font-copper'>{data?.DetailProduct?.name}</div>

            <div className='md:col-span-6 col-span-3 mt-10 md:mt-0'>
              {data?.images?.data && data?.images?.data.length > 0 && (
                <Slide
                  {...properties}
                  easing='ease'
                  onChange={handleSlideChange}
                  infinite={true}
                  transitionDuration={500}
                  indicators={true}
                >
                  {data?.images?.data.map((item: any, index: number) => (
                    <div className='each-slide-effect' key={index}>
                      <img
                        draggable={false}
                        style={{
                          aspectRatio: '32 / 21'
                        }}
                        className='w-full h-full object-cover'
                        src={`${REACT_APP_BASE_URL}${item?.attributes?.formats?.large?.url}`}
                        alt=''
                      />
                    </div>
                  ))}
                </Slide>
              )}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 text-white mt-4 text-base md:text-lg'>
          <div className='col-span-4 flex'>
            <p>Address: {data?.address}</p>
            <p className='flex-1 text-center'>Client: {data?.client}</p>
          </div>
        </div>
        <Page2D data={towDData} id={data?.id} number={true} />
        <div className='mt-12'>
          <Line />
        </div>
        <FurnitureModeling data={furnitureData} />
        <div className='mt-12'>
          <Line />
        </div>
        <ExteriorRendering data={exteriorData} />
        <div className='mt-12'>
          <Line />
        </div>
        <InteriorRendering data={interiorData} />
      </div>
    </div>
  )
}

export default Dynamic2D
