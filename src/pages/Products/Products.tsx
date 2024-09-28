import LazyImage from '@components/LazyImage/LazyImage'
import React from 'react'
import StarIcon from "@assets/images/icons/star.png"
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
  const ProductList = [
    {
      image: 'https://img.freepik.com/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666246.jpg',
      product_name: 'AI Female Portrait',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 6.88
    },
    {
      image: 'https://img.freepik.com/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666391.jpg',
      product_name: 'Female Portrait',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 2,
      price: 1.21
    },
    {
      image: 'https://img.freepik.com/free-photo/view-futuristic-person-listening-music-headphones_23-2151072901.jpg',
      product_name: 'Music Headphone',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 120.51
    },
    {
      image: 'https://img.freepik.com/free-photo/young-man-portrait_23-2148830366.jpg',
      product_name: 'Young man portrait',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 2,
      price: 67.56
    },
    {
      image: 'https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg',
      product_name: '3D Person with Glasses',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 1,
      price: 73.50
    },
    {
      image: 'https://img.freepik.com/free-photo/cyborg-robot-sunset-scene_23-2149415590.jpg',
      product_name: 'Cyborg Robot',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 15.99
    },
    {
      image: 'https://img.freepik.com/free-photo/portrait-cyborg-man-dark-background_23-2149149025.jpg',
      product_name: 'Cyborg Man Portrait',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 50.00
    },
    {
      image: 'https://img.freepik.com/free-photo/man-robotic-arm-futuristic-background_23-2148896499.jpg',
      product_name: 'Man with Robotic Arm',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 80.00
    },
    {
      image: 'https://img.freepik.com/free-photo/robot-head-lighting-circuit_23-2148564326.jpg',
      product_name: 'Robot Head with Lighting Circuit',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 99.99
    },
    {
      image: 'https://img.freepik.com/free-photo/robotic-hand-holding-globe_23-2148896500.jpg',
      product_name: 'Robotic Hand with Globe',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 199.99
    },
    {
      image: 'https://img.freepik.com/free-photo/young-woman-cyborg-portrait_23-2148412345.jpg',
      product_name: 'Young Woman Cyborg',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 55.00
    },
    {
      image: 'https://img.freepik.com/free-photo/male-cyborg-in-digital-world_23-2148655564.jpg',
      product_name: 'Male Cyborg in Digital World',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 42.75
    },
    {
      image: 'https://img.freepik.com/free-photo/robotic-dog-in-park_23-2148655563.jpg',
      product_name: 'Robotic Dog in Park',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 125.49
    },
    {
      image: 'https://img.freepik.com/free-photo/futuristic-drone-sky_23-2148201013.jpg',
      product_name: 'Futuristic Drone in Sky',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 220.00
    },
    {
      image: 'https://img.freepik.com/free-photo/ai-cyborg-female-pilot_23-2148811340.jpg',
      product_name: 'AI Cyborg Female Pilot',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 48.99
    },
    {
      image: 'https://img.freepik.com/free-photo/robotic-bird-flying_23-2148896701.jpg',
      product_name: 'Robotic Bird Flying',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 300.00
    },
    {
      image: 'https://img.freepik.com/free-photo/futuristic-car-racing-track_23-2148043012.jpg',
      product_name: 'Futuristic Car on Racing Track',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 150.00
    },
    {
      image: 'https://img.freepik.com/free-photo/human-brain-ai-concept_23-2148999812.jpg',
      product_name: 'Human Brain AI Concept',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 88.00
    },
    {
      image: 'https://img.freepik.com/free-photo/futuristic-helmet-woman_23-2148039014.jpg',
      product_name: 'Futuristic Helmet Woman',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 78.75
    },
    {
      image: 'https://img.freepik.com/free-photo/futuristic-car-scene_23-2148111020.jpg',
      product_name: 'Futuristic Car Scene',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 230.50
    },
    {
      image: 'https://img.freepik.com/free-photo/cyberpunk-cyborg-man_23-2148823002.jpg',
      product_name: 'Cyberpunk Cyborg Man',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 315.00
    },
    {
      image: 'https://img.freepik.com/free-photo/robotic-arm-dark-background_23-2148112094.jpg',
      product_name: 'Robotic Arm on Dark Background',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 2,
      price: 55.00
    },
    {
      image: 'https://img.freepik.com/free-photo/hologram-cybernetic-mind_23-2148913019.jpg',
      product_name: 'Hologram Cybernetic Mind',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 120.00
    },
    {
      image: 'https://img.freepik.com/free-photo/robot-head-visual-interface_23-2148899812.jpg',
      product_name: 'Robot Head with Visual Interface',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 99.00
    },
    {
      image: 'https://img.freepik.com/free-photo/futuristic-city-view_23-2148450310.jpg',
      product_name: 'Futuristic City View',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 410.00
    },
    {
      image: 'https://img.freepik.com/free-photo/digital-mind-with-neural-networks_23-2148203310.jpg',
      product_name: 'Digital Mind with Neural Networks',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 77.00
    },
    {
      image: 'https://img.freepik.com/free-photo/robotic-dragon-flying_23-2148899800.jpg',
      product_name: 'Robotic Dragon Flying',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 5,
      price: 999.00
    },
    {
      image: 'https://img.freepik.com/free-photo/ai-robotic-pet_23-2148896700.jpg',
      product_name: 'AI Robotic Pet',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 4,
      price: 850.00
    },
    {
      image: 'https://img.freepik.com/free-photo/cyborg-man-digital-world_23-2148215590.jpg',
      product_name: 'Cyborg Man in Digital World',
      creator_name: 'Lennon Benedict Jansuy',
      rating: 3,
      price: 145.00
    }
  ]

  const redirectToDetailedPage = () => {
    navigate("/detailed-product")
  }

  const ProductItem = ({ product }: any) => {
    return (
      <div className='flex flex-col items-start my-3' role="button" onClick={redirectToDetailedPage}>
        <div className="rounded-lg w-[140px] sm:w-[120px] msm:w-[210px] lg:w-[177px] xl:w-[240px] xxl:w-[300px] ">
          <LazyImage image={product?.image} />
        </div>
        <div className="flex flex-col">
          <div className="font-bold mt-3">
            {product?.product_name}
          </div>
          <div className="text-[#B3B3B3] mb-2">
            {product?.creator_name}
          </div>
          <div className="flex items-center">
            {Array.from(Array(product?.rating).keys()).map(() =>
              <div className="me-1">
                <img src={StarIcon} alt="" height={17} width={17} />
              </div>
            )}
            <div className="ms-1">  {product?.rating}.0</div>
          </div>
          <div className="my-1">
            $ {product?.price}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="text-[32px] font-bold mb-5">Parent category {'>'} Child category</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ps-2 ">
        {ProductList.map((data) => <ProductItem product={data} />)}
      </div>
    </div>
  )
}

export default Products