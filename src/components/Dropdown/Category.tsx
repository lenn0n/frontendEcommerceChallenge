import React, { useState } from 'react'
import { useAppDispatch } from '@hooks/useRedux'
import ArrowIcon from "@assets/images/arrow-right.svg"
import { updateCategory } from '@store/features/cart/cartSlice'
type CategoryProps = {
  children: React.ReactNode,
  onSelect?: Function,
  customClassName?: string,
  selected?: string,
  list: { name: string, value: string, subCategory?: any }[],
}

type SelectionProps = { name: string, value: string, subCategory?: any }

const Category = ({ children, onSelect, customClassName, list, selected }: CategoryProps) => {
  const dispatch = useAppDispatch();

  const [diplayCategory, setDisplayCategory] = useState<boolean>(false)
  const [initialSelection, setInitialSelection] = useState<SelectionProps>({ name: 'All', value: 'all', subCategory: [] })
  // Toggle display of categories 
  const toggleDisplay = () => {
    setDisplayCategory(!diplayCategory)
  }

  // Set dropdown selection
  const handleSelect = (item: SelectionProps) => {
    if (typeof (onSelect) === 'function') {
      onSelect(item)
      setDisplayCategory(false);
      dispatch(updateCategory({name: item.name, value: item.value}))
    }
  }

  // Check if dropdown was selected
  const checkIfSelectedAll = (item: SelectionProps) => {
    setInitialSelection(item)

    if (item.value === 'all') {
      handleSelect(item)
    }
  }

  const CategoryButton = (data: SelectionProps, selected: string, handleOnClick: React.MouseEventHandler<HTMLButtonElement>, customClassName: string) => {
    return <button key={data.value}
      onClick={handleOnClick}
      className={`px-3 py-1 ${customClassName} text-start hover:bg-[#CA323D] hover:rounded-2xl mt-1 hover:text-white
      ${selected?.includes(data.value) ? 'bg-[#655D5E] rounded-2xl' : ''} w-[90%]`}
      type='button'>
      <div className='flex justify-between items-center'>
        <div className="">{data.name}</div>
        <img src={ArrowIcon} alt='' className={`h-[10px] ${data?.subCategory?.length > 0 ? 'block' : 'hidden'}`} />
      </div>
    </button>
  }

  return (
    <div className="relative inline-block text-left">
      <button type="button" onClick={toggleDisplay}>
        {children}
      </button>

      <section
        onMouseLeave={() => { setDisplayCategory(false) }}
        className={`transition ease-out transform  -translate-x-[40vw] sm:-translate-x-[40vw] md:-translate-x-[20vw] lg:-translate-x-[18vw]  xl:-translate-x-[16vw]
        ${diplayCategory ? 'duration-100 opacity-100 scale-100' : 'duration-500 opacity-0 scale-50 pointer-events-none'}`}>
        <div className={`${customClassName} dropdown-cn`}
          role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
          <div className="py-1" role="none">

            <div className="hidden sm:grid grid-cols-2 py-2 text-left h-[200px] w-[100vw] sm:w-[82vw] md:w-[40vw] lg:w-[30vw] ">
              <div className=" flex flex-col items-start border-r-[1px] border-[#515151] ">
                {list.map((data) =>
                  CategoryButton(data, initialSelection.value, () => { checkIfSelectedAll(data) }, 'sm:mr-5'))
                }
              </div>
              <div className=" flex flex-col items-start  ">
                {initialSelection?.subCategory?.map((data: SelectionProps) =>
                  CategoryButton(data, selected!, () => { handleSelect(data) }, 'sm:ml-4'))
                }
              </div>
            </div>
            <div className="block sm:hidden w-[85vw]">

              {initialSelection.value != 'all' ?
                <button key={initialSelection.value}
                  onClick={() => { setInitialSelection({ name: 'All', value: 'all', subCategory: [] }) }}
                  className={`px-3 py-1 mr-5 text-start bg-[#655D5E] rounded-2xl w-[90%]`}
                  type='button'>

                  <div className='flex justify-between items-center'>
                    <div className="">{initialSelection.name}</div>
                    <img src={ArrowIcon} alt='' className={`h-[10px]`} />
                  </div>
                </button>
                :
                <div className={`flex flex-col items-start`}>
                  {list.map((data) =>
                    CategoryButton(data, initialSelection.value, () => { checkIfSelectedAll(data) }, ''))
                  }
                </div>

              }
              <div className="mt-3">
                {initialSelection?.subCategory?.map((data: SelectionProps) =>
                  CategoryButton(data, selected!, () => { handleSelect(data) }, 'ml-2'))
                }
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Category