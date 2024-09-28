import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useEncryption from '@hooks/useEncryption'
import useCookie from '@hooks/useCookie'

const Auth = () => {
  const navigate = useNavigate()
  const { encode } = useEncryption()
  const { setCookie } = useCookie()
  const [pass, setPassword] = useState<string>("")
  const [message, setMessage] = useState<string>("This website was protected.")

  const handleCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      setPassword(value)
    }
  }

  const handleCheckPass = () => {
    if (pass === 'fedev2024test') {
      setCookie({ name: 'pass', value: encode(pass), domain: window.location.hostname })
      navigate('/home')
    } else {
      setMessage("Incorrect Password.")
      setPassword("")
    }
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col'>
      <div className="font-bold text-[20px] my-3 text-red-500">{message}</div>
      <div className="border-2 border-[#515151] p-4 rounded-xl">
        <input type="password" onChange={handleCheckInput} value={pass} placeholder='Enter Password' className='' />
      </div>
      <button className='bg-blue-800 text-white mt-2 px-4 py-2 rounded-lg' type="button" onClick={handleCheckPass}>Login</button>
    </div>
  )
}

export default Auth