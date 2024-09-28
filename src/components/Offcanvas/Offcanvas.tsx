import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setOffCanvas } from '@store/features/system/systemSlice'
import LeftIcon from "@assets/images/arrow-left.png"
import RightIcon from "@assets/images/arrow-right.svg"
import CartIcon from "@assets/images/icons/cart.png"
import USFlag from '@assets/images/flags/US.png';
import JPFlag from '@assets/images/flags/JP.png';

type ViewProps = 'language' | 'default'
const Offcanvas = () => {
  const dispatch = useAppDispatch()
  const offcanvas = useAppSelector((state) => state.system.offcanvas)

  const [selectedView, setSelectedView] = useState<ViewProps>("default")

  const backAction = () => {
    if (selectedView === 'default') {
      dispatch(setOffCanvas({ show: false }))
    } else {
      setSelectedView('default')
    }
  }

  const changeView = (view: ViewProps) => {
    setSelectedView(view)
  }

  useEffect(() => {
    if (offcanvas.show){
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [offcanvas.show])
  

  return createPortal(
    <div className="relative z-[4]">
      <div className={`fixed right-0 bg-[#110606] bg-opacity-[99] transition-all  ease-out duration-500 h-screen ${offcanvas.show ? 'w-full z-4 p-4' : 'w-[0px] z-[-5]'} `}>
        <div className={` ${offcanvas.show ? 'block ' : 'hidden'}`}>
          {/* ACTION BACK */}
          <button type="button" className="flex items-center mt-[24px]" onClick={backAction}>
            <img src={LeftIcon} id="menu-back" alt='' height={'10px'} width={'10px'} />
            <label htmlFor="menu-back" className='ms-4 text-[14px]'>Go back</label>
          </button>

          {selectedView === 'default' &&
            <>

              {/* ME */}
              <div className="text-[20px] mt-[24px]">Hello,</div>

              {/* SHOPPING */}
              <div className="text-[20px] mt-[24px]">Shopping</div>

              <div className="flex mt-[24px] justify-between items-center  border-b-[1px] pb-4 border-[#515151]">
                <div className="flex items-center justify-center">
                  <img src={CartIcon} alt='' className={`h-[20px] w-[20px]`} />
                  <div className='ms-3'>Your cart</div>
                </div>
                <div className="">
                  <img src={RightIcon} alt='' className={`h-[12px] w-[12px]`} />
                </div>
              </div>

              {/* YOUR ACCOUNT */}
              <div className="text-[20px] mt-[24px]">Your account</div>
              <div className="flex mt-[24px] justify-between items-center ">
                <div className="flex items-center justify-center">
                  <label className=''>Sign in</label>
                </div>
                <div className="">
                  <img src={RightIcon} alt='' className={`h-[12px] w-[12px]`} />
                </div>
              </div>

              <div className="flex mt-[24px] justify-between items-center  border-b-[1px] pb-4 border-[#515151]">
                <div className="flex items-center justify-center">
                  <label className=''>Sign up</label>
                </div>
                <div className="">
                  <img src={RightIcon} alt='' className={`h-[12px] w-[12px]`} />
                </div>
              </div>


              {/* SUPPORT */}
              <div className="text-[20px] mt-[24px]">Support</div>
              <div className="flex mt-[24px] justify-between items-center  border-b-[1px] pb-4 border-[#515151]">
                <div className="flex items-center justify-center">
                  <label className=''>Message to Yuta (The Founder)</label>
                </div>
                <div className="">
                  <img src={RightIcon} alt='' className={`h-[12px] w-[12px]`} />
                </div>
              </div>

              {/* LANGUAGE */}
              <div className="text-[20px] mt-[24px]">Language</div>
              <button type="button" className="flex mt-[24px] justify-between items-center pb-4 w-full" onClick={() => { changeView('language') }}>
                <div className="flex items-center justify-center">
                  English (US)
                </div>
                <div className="">
                  <img src={RightIcon} alt='' className={`h-[12px] w-[12px]`} />
                </div>

              </button>
            </>
          }

            <div className={`${selectedView === 'language' ? 'opacity-100  duration-500' : 'opacity-0  duration-0'} transition-all ease-out`}>
              <div className="flex items-center my-4 mt-[24px]">
                <img src={USFlag} alt='' className={`h-[20px]`} />
                <div className="ms-2">English(US)</div>
              </div>
              <div className="flex items-center my-4">
                <img src={JPFlag} alt='' className={`h-[20px]`} />
                <div className="ms-2">Japanese</div>
              </div>
            </div>
          

        </div>
      </div>
    </div>,
    document.getElementById('root-offcanvas') as Element
  )
}

export default Offcanvas