import React from 'react'
import { Modal } from "@hooks/useModal"
import { useAppDispatch, useAppSelector } from "@hooks/useRedux"
import { setFilterModal } from '@store/features/cart/cartSlice'
import RangeSlider from '@components/RangeSlider/RangeSlider'
import VRChatIcon from "@assets/platforms/vrchat.png"
import VRChatBlueIcon from "@assets/platforms/vrchat-blue.png"
import SpatialIcon from "@assets/platforms/spatial.png"
import CVRIcon from "@assets/platforms/cvr.png"
import ResoniteIcon from "@assets/platforms/resonite.png"
import NeoIcon from "@assets/platforms/neo.png"
import ClusterIcon from "@assets/platforms/cluster.png"
import VirtualIcon from "@assets/platforms/virtual.png"
import OthersIcon from "@assets/platforms/others.png"
import CloseIcon from "@assets/images/icons/close.png"

export type FilterModalProps = {
  showModal?: boolean,
  onClose?: Function,
  data?: {
    min?: number,
    max?: number,
    platformSelected?: any
  }
}

export const initialFilterModalState = {
  showModal: false,
  onClose: () => { },
  parentClassName: "bg-cyan-700 bg-opacity-80 text-white flex flex-col rounded-md items-center justify-center p-5",
  titleClassName: "text-[25px]",
  messageClassName: "text-center",
  data: {
    min: 0,
    max: 50,
    platformSelected: []
  }
}

const FilterModal = () => {
  const filter = useAppSelector((state) => state.cart.filterModal) as FilterModalProps
  const { handleClose, setFilter } = FilterModalActions()

  const returnPropsForModal = {
    showModal: filter.showModal,
    onModalClose: filter.onClose,
    hideHeader: true,
    size: 'slg'
  }

  const updateMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    if (Number(e.target.value) < Number(filter.data?.max)) {
      setFilter({ data: { ...filter.data, min: Number(e.target.value) } })
    }
  }

  const updateMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ data: { ...filter.data, max: Number(e.target.value) } })
  }

  const Platform = (data: any) =>
    <button
      type='button'
      onClick={() => { UpdatePlatformSelection(data.name) }}
      className={`rounded-2xl  border-[#515151] ${filter.data?.platformSelected.includes(data.name) ? 'bg-[#443E3E]' : ''} 
      p-3 ${data.customClassName} flex items-start flex-col justify-end border-[1px]`}>
      <div className="h-[10px] sm:h-[40px] w-[20px] sm:w-[90px]">
        <img src={data.image} alt="" />
      </div>
      <div className="text-[12px] mt-3">{data.name}</div>
    </button>


  // Just a temporary selection
  const UpdatePlatformSelection = (platform: string) => {
    if (filter.data?.platformSelected.includes(platform)) {
      let newPlatformSelected = filter.data.platformSelected.filter((p: string) => p != platform)
      setFilter({ data: { ...filter.data, platformSelected: newPlatformSelected } })
    } else {
      let newPlatformSelected = filter.data?.platformSelected
      setFilter({ data: { ...filter.data, platformSelected: [...newPlatformSelected, platform] } })
    }
  }

  const removeSelectedPlatform = () => {
    setFilter({ data: { ...filter.data, platformSelected: [] } })
  }

  return (
    <Modal props={returnPropsForModal}>
      <div className="bg-[#2B2828] rounded-lg">
        <div className="flex justify-between border-b-[1px] border-[#515151] p-[20px]">
          <button type="button" className="flex items-center" onClick={handleClose}>
            <img src={CloseIcon} alt='' height={'10px'} width={'15px'} />
          </button>
          <div className="font-bold">Filters</div>
          <div className=""></div>
        </div>

        <div className="p-[24px]">
          <label className="text-[18px]">Price range</label>
          <RangeSlider
            initialMin={"30"}
            initialMax={"80"}
            min={"0"}
            max={"100"}
            step={"1"}
            priceCap={"122222222"}
          />
          <div className="flex justify-between ">
            <div className="flex item-center justify-center flex-col text-center w-[120px]">
              <label htmlFor="" className='block mb-2'>Minimum</label>
              <div className="border-2 border-[#515151] rounded-full py-5 relative  overflow-hidden">
                <input type="text" className='rounded-lg  overflow-hidden ps-5 max-w-[80px] ' placeholder='000.00' />
                <div className="absolute top-[1.2rem] left-[1rem]">$</div>
              </div>
            </div>
            <div className="flex item-center justify-center flex-col text-center w-[120px]">
              <label htmlFor="" className='block mb-2'>Maximum</label>
              <div className="border-2 border-[#515151] rounded-full py-5 relative  overflow-hidden">
                <input type="text" className='rounded-lg  overflow-hidden ps-5 max-w-[80px] ' placeholder='000.00' />
                <div className="absolute top-[1.2rem] left-[1rem]">$</div>
              </div>
            </div>
          </div>
          <div className="  border-[#515151] border-b-[1px] mt-5"></div>

          <label className="text-[18px] mt-[32px] block mb-[20px]">Platforms</label>
          <div className="grid grid-cols-3 gap-5 max-w-[400px]">
            <Platform customClassName='col-span-1' image={VRChatIcon} name='VRChat (Quest)' />
            <Platform customClassName='col-span-1' image={VRChatBlueIcon} name='VRChat (PCVR)' />
            <Platform customClassName='col-span-1' image={SpatialIcon} name='Spatial' />
            <Platform customClassName='col-span-1' image={CVRIcon} name='ChilloutVR' />
            <Platform customClassName='col-span-1' image={ResoniteIcon} name='Resonite' />
            <Platform customClassName='col-span-1' image={NeoIcon} name='Neos VR' />
            <Platform customClassName='col-span-1' image={ClusterIcon} name='Cluster' />
            <Platform customClassName='col-span-1' image={VirtualIcon} name='Virtual Cast' />
            <Platform customClassName='col-span-1' image={OthersIcon} name='Others' />
          </div>
        </div>
        <div className=" border-b-[1px] border-[#515151]"></div>

        <div className="flex justify-between p-[24px] items-center">
          <button type="button" className="" onClick={()=> { removeSelectedPlatform() }}>Clear all</button>
          <button className='bg-[#F1F1F1] text-[#1B0809] px-24 py-2 rounded-lg' onClick={handleClose}> Apply </button>
        </div>
      </div>
    </Modal>
  )
}

export const FilterModalActions = () => {
  const dispatch = useAppDispatch()

  const setFilter = (data: any) => {
    dispatch(setFilterModal(data))
  }

  const handleClose = () => {
    setFilter({ showModal: false })
  }

  const showFilterModal = () => {
    setFilter({ showModal: true })
  }

  return {
    handleClose,
    showFilterModal,
    setFilter
  }
}

export default FilterModal