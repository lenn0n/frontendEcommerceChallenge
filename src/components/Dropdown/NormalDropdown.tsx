import React, { useState } from 'react'
import ArrowIcon from "@assets/images/arrow-right.svg"
type CategoryProps = {
  children: React.ReactNode,
  onSelect?: Function,
  customClassName?: string,
  selected?: string,
  list: { name: string, value: string, icon?: any }[],
}

type SelectionProps = { name: string, value: string, subCategory?: any }

const NormalDropdown = ({ children, onSelect, customClassName, list, selected }: CategoryProps) => {
  const [diplayCategory, setDisplayCategory] = useState<boolean>(false)

  // Toggle display of categories 
  const toggleDisplay = () => {
    setDisplayCategory(!diplayCategory)
  }

  // Set dropdown selection
  const handleSelect = (item: SelectionProps) => {
    if (typeof (onSelect) === 'function') {
      onSelect(item)
      setDisplayCategory(false)
    } else {
      setDisplayCategory(false)
    }
  }

  return (
    <>
      <button type="button" onClick={toggleDisplay}>
        {children}
      </button>

      <section
        onMouseLeave={() => { setDisplayCategory(false) }}
        className={`p-2 bg-[#2B2828] rounded-lg transition ease-out transform ${customClassName} absolute
        ${diplayCategory ? 'duration-100 opacity-100 scale-100  z-[3]' : 'duration-500 opacity-0 scale-50 pointer-events-none z-[-2]'}`}>
        {list?.length > 0 &&
          list.map((data) => {
            if (data.value === '---') {
              return <div className='border-[#515151] border-b-[1px] my-2 px-2'></div>
            } else {
              return <button key={data.value}
                onClick={() => { handleSelect(data) }}
                className={`px-3 py-1 text-start hover:bg-[#443E3E] hover:rounded-2xl mt-1 hover:text-white
            ${selected?.includes(data.value) ? 'bg-[#655D5E] rounded-2xl' : ''} w-[90%]`}
                type='button'>
                <div className='flex gap-2 items-center'>
                  {data?.icon && <img src={data?.icon} alt='' className={`h-[10px]`} />}
                  <div className="">{data.name}</div>
                </div>
              </button>
            }
          })
        }
      </section>
    </>
  )
}

export default NormalDropdown