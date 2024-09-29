import React, { useEffect, useState } from 'react'
import Header from 'src/components/Header/Header'
import FilterModal from '@components/Modal/FilterModal'
import TestData from '@components/TestData/TestData'
import useCookie from '@hooks/useCookie'
import useEncryption from '@hooks/useEncryption'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { getCookie } = useCookie()
  const { decode } = useEncryption()
  const [ready, setReady] = useState<boolean>(true)

  const Padding = ({ children }:
    { children: React.ReactNode }) =>
    <div className='px-[5px] sm:px-[20px] lg:px-[80px] '>{children}</div>

  const Border = () => <div className='border-b-[1px] border-[#515151]' />

  // ANTI TOKEN FORGERY
  const checkIfAuthenticated = () => {
    const tokenpass = getCookie("pass");
    if (tokenpass) {
      if (decode(tokenpass) == decode('U2FsdGVkX19HKS++evROfFRP/Y/EtXrjSrJMT3SNWHQ=')) {
        // TOKEN IS VALID
      } else {
        // INVALID TOKEN :P
        window.location.href = '/'
      }
    } else {
      // NOPE :P
      window.location.href = '/'
    }
    // setTimeout(() => {
    //   setReady(true)
    // }, 1000);
  }

  useEffect(() => {
    // checkIfAuthenticated()
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      {ready && <>
        <TestData />
        <Header />
        <FilterModal />
        <Border />
        <Padding>
          {children}
        </Padding>
      </>}
    </>
  )
}

export default Wrapper
