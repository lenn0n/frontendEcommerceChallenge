import React, { useEffect, useState } from 'react'
import Header from 'src/components/Header/Header'
import FilterModal from '@components/Modal/FilterModal'
import TestData from '@components/TestData/TestData'
import useCookie from '@hooks/useCookie'
import useEncryption from '@hooks/useEncryption'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { getCookie } = useCookie()
  const { decode, encode } = useEncryption()
  const [ready, setReady] = useState<boolean>(false)
  const Padding = ({ children }:
    { children: React.ReactNode }) =>
    <div className='px-[5px] sm:px-[20px] lg:px-[80px] '>{children}</div>

  const Border = () => <div className='border-b-[1px] border-[#515151]' />

  const checkIfAuthenticated = () => {
    const tokenpass = getCookie("pass");
    if (tokenpass) {
      if (decode(tokenpass) == 'fedev2024test') {

      } else {
        window.location.href = '/'
      }
    } else {
      window.location.href = '/'
    }
    setTimeout(() => {
      setReady(true)
    }, 1000);
  }

  useEffect(() => {
    checkIfAuthenticated()
    window.scrollTo(0,0)
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
