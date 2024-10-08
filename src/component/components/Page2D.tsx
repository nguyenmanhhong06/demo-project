import { Link } from 'react-router-dom'
import { REACT_APP_BASE_URL } from 'src/ultils/api'

function Page2D({ data, id, number }: any) {
  const displayedItems = !number ? data.slice(0, 4) : data
  return (
    <div>
      <div className='flex mt-4 text-white gap-2 md:text-2xl text-lg font-copper font-extrabold '>
        <p>2D PhotoShop</p>
        <p className='text-[#c0854f]'>Project</p>
      </div>
      <div className='grid grid-cols-2 gap-x-8 gap-y-4 pl-5'>
        {displayedItems?.map((item: any, index: any) => (
          <Link to={`/project/2d/details/${item.id}`} state={item} key={index}>
            <div key={index} className='lg:mt-10 md:mt-8 mt-4 '>
              <img
                src={`${REACT_APP_BASE_URL}${item?.image?.data?.attributes?.formats?.small?.url}`}
                alt=''
                className='w-full h-full '
                style={{
                  aspectRatio: '32 / 21'
                }}
              />
              <div
                className={`text-white text-xs md:text-base text-center mt-4 ${
                  item.id === id ? '!text-[#c0854f]' : ''
                }`}
              >
                <p className='mb-2'>{item.title}</p>
                <div className='text-start'>
                  <p>Client: {item.client}</p>
                  <p>Address: {item.address}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page2D
