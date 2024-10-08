export const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px'
}

export const properties = {
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
