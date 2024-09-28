import React, { useState } from 'react'
import Category from '../Dropdown/Category'
import SearchIcon from "@assets/images/icons/search.png"
import FilterIcon from "@assets/images/icons/filter.png"
import MenuIcon from "@assets/images/icons/menu.png"
import { FilterModalActions } from '@components/Modal/FilterModal'

import { useAppDispatch } from '@hooks/useRedux'
import { setOffCanvas } from '@store/features/system/systemSlice'
import { updateKeyword } from '@store/features/cart/cartSlice'

type CategoryProps = { name: string, value: string }

const Search = () => {
  const dispatch = useAppDispatch()
  const { showFilterModal, setFilter } = FilterModalActions()
  // Recommended to put state in global (eg: Redux).
  // Since this is just a test, we will only use local state.

  const [category, setCategory] = useState<CategoryProps>({ name: 'All', value: 'all' })
  const categoryList = [
    {
      name: "Avatars",
      value: 'avatars',
      subCategory: [
        {
          name: 'Human-like',
          value: 'avatars-hL'
        },
        {
          name: 'Anthro & Furry',
          value: 'avatars-aF'
        },
        {
          name: 'Robot & Cyborgs',
          value: 'avatars-rC'
        },
        {
          name: 'Others',
          value: 'avatars-oth'
        },
        {
          name: 'All in Avatars',
          value: 'avatars-aIv'
        }
      ]
    },
    {
      name: "Fashion",
      value: 'fashion',
      subCategory: [
        {
          name: 'Clothes',
          value: 'fashion-clth'
        },
        {
          name: 'Accessories',
          value: 'fashion-acc'
        },
        {
          name: 'Others',
          value: 'fashion-oth'
        },
        {
          name: 'All in Avatars',
          value: 'fashion-aIv'
        }
      ]
    },
    {
      name: "All",
      value: 'all'
    }
  ]

  const handleOnSelectCategory = (cat: CategoryProps) => {
    setCategory(cat)
  }

  const handleToggleMenu = () => {
    dispatch(setOffCanvas({ show: true}))
    // window.scrollTo(0,0)
  }

  const handleToggleFilter = () => {
    showFilterModal()
  }

  const handleUpdateKeyword = (e: React.ChangeEvent<HTMLInputElement> ) => { 
    const { value } = e.target;
    if (value){
      dispatch(updateKeyword(value))
    }
  }

  return (
    <section className='search-cn col-span-4 md:col-span-2 order-3 md:order-2 '>
      <div className='search-bar'>
        <div className="keyword-section w-[30vw] focus-within:bg-[#443E3E] rounded-3xl">
          <label htmlFor="search-field" className='font-bold text-[12px] block'>Keyword</label>
          <input id="search-field" type="text" placeholder='Search XXX' className='max-w-[25vw]' onChange={handleUpdateKeyword}/>
        </div>
        <div className="cat-section w-[40%] ps-3 focus-within:bg-[#443E3E] border-l-[0px] focus-within:rounded-3xl border-[#515151]">
          <Category customClassName='bg-[#443E3E]' list={categoryList} onSelect={handleOnSelectCategory} selected={category.value}>
            <label htmlFor="category-field" className='font-bold text-[12px] block text-start ' role='button'>Category</label>
            <p id="category-field" className=" text-start text-nowrap overflow-hidden">{category.name}</p>
          </Category>
        </div>
        <button className='button-cn z-[2] ml-[-40px]' type='button'>
          <img src={SearchIcon} alt="search_button" />
        </button>
      </div>
      <button className='hidden sm:flex action-button-cn ms-2' type='button' onClick={handleToggleFilter}>
        <img src={FilterIcon} alt="filter_button" />
      </button>
      <button className='flex sm:hidden action-button-cn ms-1' type='button' onClick={handleToggleMenu}>
        <img src={MenuIcon} alt="filter_button" />
      </button>
    </section>
  )
}

export default Search