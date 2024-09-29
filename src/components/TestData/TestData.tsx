import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@hooks/useRedux'
import CloseIcon from "@assets/images/icons/close.png"
import useCookie from '@hooks/useCookie'
const TestData = () => {
  const { removeCookie } = useCookie()
  const navigate = useNavigate()
  const states = useAppSelector((state) => { return state })
  const [visible, setVisible] = useState<boolean>(true)

  const handleLogout = () => {
    removeCookie({ name: "pass", domain: window.location.hostname})
    navigate("/")
  }
  return (
    <div className={`${visible ? 'fixed z-[10]' : 'hidden z-[-0]'} top-[70vh] left-[10px] max-w-[80vw] lg:max-w-[30vw] overflow-hidden`}>
      <div className="  bg-dark p-5  border[#515151] border-[2px] rounded-2xl ms-4">
        <div className="flex justify-between items-center  mb-3">
          <div className="font-bold text-green-500 text-[19px]">Redux State</div>
          <button type="button" className="flex items-center" onClick={() => { setVisible(!visible) }}>
            <img src={CloseIcon} alt='' height={'10px'} width={'15px'} />
          </button>
        </div>
        <div className="flex">
          <label className="font-bold">Keyword:</label>
          <p className="text-[#ccc] ms-2"> {states.cart.search.keyword ?? 'No query yet.'}</p>
        </div>
        <div className="flex">
          <label className="font-bold">Category:</label>
          <p className="text-[#ccc] ms-2"> {JSON.stringify(states.cart.search.category)}</p>
        </div>
        <div className="flex">
          <label className="font-bold">Platforms:</label>
          <p className="text-[#ccc] ms-2"> {JSON.stringify(states.cart.filterModal?.data?.platformSelected)}</p>
        </div>
        <div className="flex">
          <label className="font-bold">Offcanvas:</label>
          <p className="text-[#ccc] ms-2">{JSON.stringify(states.system.offcanvas.show)}</p>
        </div>

        {/* <div className="flex text-red-500 font-bold mt-4" role='button' onClick={handleLogout}>LOGOUT
        </div> */}
      </div>
    </div>
  )
}

export default TestData