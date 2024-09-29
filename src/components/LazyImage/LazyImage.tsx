import React from 'react'
import LazyLoad from 'react-lazyload';

type LazyLoadProps = {
  height?: number | string | undefined,
  image: any
}
const LazyImage = ({ image, height, }: LazyLoadProps) => {
  return (
    <LazyLoad
      offset={100}
      height={height}
      placeholder={<div className='rounded-2xl border-2 bg-gray-800 object-cover h-[140px] sm:h-[120px] msm:h-[210px] lg:h-[177px] xl:h-[240px] max-h-[240px]' />}>
      <img src={image} className='rounded-2xl  object-cover h-[140px] sm:h-[120px] msm:h-[210px] lg:h-[177px] xl:h-[240px] max-h-[240px]' width={'100%'} height={'100%'} />
    </LazyLoad>
  )
}

export default LazyImage