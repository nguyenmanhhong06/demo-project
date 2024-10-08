import React, { useEffect, useState } from 'react'
import coin from 'src/assets/project/coin.png'
import calendar from 'src/assets/project/calender.png'
import star from 'src/assets/project/star.png'
import Offer from '../components/Offer'
import BigDeal from '../components/BigDeal'
import Button from '../components/Button'
import InteriorRendering from '../components/InteriorRendering'
import Line from '../components/Line'
import { API } from 'src/ultils/api'
import useStripe from 'src/hooks/useStripe'
import { AboutUsType } from '../About/AboutType'
import { ServiceType } from './ServiceType'
import { convertImg } from 'src/ultils/utils'
const project1 = [
  {
    img: coin,
    title: 'Reasonable Price '
  },
  {
    img: calendar,
    title: 'Quick Turnaround Timet'
  },
  {
    img: star,
    title: 'Realistic Quality'
  }
]
function InteriorService() {
  const [interior, setInterior] = useState<any>([])
  const [bigDeal, setBigDeal] = useState<any>([])
  const data = useStripe<ServiceType>('/api/services/1?populate=*')
  useEffect(() => {
    callApi()
  }, [])
  const callApi = async () => {
    const res = await API.get('/api/pages/2?populate[Section][populate]=*')
    const res2 = await API.get('/api/pages/1?populate[Section][populate]=*')
    if (res?.data?.data?.attributes?.Section) {
      const arr = res.data.data.attributes.Section.filter((item: any) => {
        if (item.__component === 'home.big-deal') {
          return item
        }
      })
      const interiorArr = res2.data.data.attributes.Section.filter((item: any) => {
        if (item.__component === 'home.interior') {
          return item
        }
      })
      setBigDeal(arr)
      setInterior(interiorArr)
    }
  }
  return (
    <div className='px-10 mx-auto max-w-7xl'>
      <div className='mt-8'>
        <h1 className='text-center flex gap-2 justify-center font-semibold font-copper uppercase text-white text-xl  md:text-2xl lg:text-3xl '>
          Interior Rendering <h1 className='text-[#c1984f]'>Service</h1>
        </h1>
        <div className='grid lg:grid-cols-5'>
          <div className='col-span-1  mt-6 ml-2'>
            <p className='text-[#fff] text-lg  md:text-xl lg:text-2xl  font-century'>{data.title}</p>
          </div>
          <div className='col-span-4 relative'>
            <img src={convertImg(data?.image)} alt='' />
            <img
              src={convertImg(data?.subImage)}
              className='absolute bottom-0 translate-y-1/2 max-w-[250px] -translate-x-1/2 left-1/2 hidden lg:block'
              alt=''
            />
            <div className='lg:absolute lg:ml-20 lg:top-20 lg:left-10 md:top-16 md:left-32 left-48 top-20 lg:-translate-x-1/2 lg:w-[535px]'>
              <p className=' mt-8 text-white font-medium text-3xl  md:text-4xl lg:text-5xl font-banmethuot'>
                {data.heading}
              </p>
              <p className='text-white font-medium text-base  md:text-lg lg:text-xl  mt-4'>{data.description}</p>
            </div>

            <div className='hidden lg:block md:absolute -bottom-[171px] pb-32 text-[#fff]/40  w-[350px] pr-20 right-12 bg-[#000]/70 pl-2 pt-2'>
              <h1 className='font-bold text-xl md:text-2xl '>{data.titleSub}</h1>
              <p className=' text-base  md:text-lg lg:text-xl '>{data.descriptionSub}</p>
              <div className='absolute bg-black/20 h-full w-[700px] top-0 -left-[200%]'></div>
            </div>

            <p className='text-[#c1984f] font-century text-base -rotate-90 absolute left-[-92px] bottom-[-35px]'>
              {'<----  SCROLL DOWN'}
            </p>
          </div>
        </div>
      </div>
      <Offer data={data.OfferItem && data.OfferItem[0]} />
      <BigDeal banner={bigDeal} />
      <div className='md:mt-16 my-8'>
        <Line />
      </div>
      <div className='flex justify-center md:mt-10 text-lg md:text-xl'>
        <Button name='Chat More' classnamesButton='!p-2 ' />
      </div>
      <InteriorRendering data={interior} />
      <div className='my-14 pl-5'>
        <Line />
      </div>
    </div>
  )
}

export default InteriorService
