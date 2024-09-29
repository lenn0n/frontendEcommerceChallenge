import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useEncryption from '@hooks/useEncryption'
import useCookie from '@hooks/useCookie'
import Arrow from "@assets/images/arrow-right.svg"

const Auth = () => {
  const navigate = useNavigate()
  const { encode, decode } = useEncryption()
  const { setCookie } = useCookie()
  const [pass, setPassword] = useState<string>("")
  const [message, setMessage] = useState<string>("Protected Page")

  // SET PASSWORD IN STATE
  const handleCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value)
  }

  // CHECK USER PASSWORD INPUT
  const handleCheckPass = () => {
    // Should match the hash generated
    if (pass === decode('U2FsdGVkX19HKS++evROfFRP/Y/EtXrjSrJMT3SNWHQ=')) {
      setCookie({ name: 'pass', value: encode(pass), domain: window.location.hostname })
      navigate('/home')
    } else {
      setMessage("Incorrect Password")
      setPassword("")
    }
  }

  // WATCH FOR ENTER KEY PRESS
  const watchEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleCheckPass()
    }
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col'>
      <div className={`font-bold text-[20px] my-3 ${message == 'Incorrect Password' ? 'text-red-500' : 'text-gray-500'}`}>
        {message}
      </div>
      <div className="border-[1px] border-[#515151] p-4 rounded-lg">
        <input type="password"
          onChange={handleCheckInput}
          value={pass}
          placeholder='******************************'
          onKeyUp={watchEnterKey}
          autoFocus />
      </div>
      <button
        className='bg-gray-800 text-gray-400 mt-4 px-4 py-2 rounded-2xl flex items-center text-sm '
        type="button"
        onClick={handleCheckPass}>
          Login
          <img src={Arrow} alt="" className='ms-1' height={'10px'} width={'10px'} />
        </button>
    </div>
  )
}

export default Auth