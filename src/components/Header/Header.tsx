import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "@assets/images/logo.png"
import LanguageIcon from "@assets/images/icons/language.png"
import MenuIcon from "@assets/images/icons/menu.png"
import AccountIcon from "@assets/images/icons/account.png"
import CartIcon from "@assets/images/icons/cart.png"
import Search from '@components/Search/Search'
import NormalDropdown from '@components/Dropdown/NormalDropdown'
import USFlag from "@assets/images/flags/US.png"
import JPFlag from "@assets/images/flags/JP.png"

let stopper: boolean = false
const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const navigate = useNavigate()
  const redirectToHome = () => {
    navigate("/home")
    window.scrollTo(0,0)
  }

  useEffect(() => {
    window.onscroll = function (e) {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollPos > 90 && !stopper) {
        setIsScrolled(true)
        stopper = true
      } else {
        if (stopper && scrollPos < 90) {
          setIsScrolled(false)
          stopper = false
        }
      }
    }
  }, [])

  return (
    <>
      <div className={` ${isScrolled ? 'mt-[90px] ' : ''}`}></div>
      <header className={` ${isScrolled ? ' z-[2] fixed mt-[-90px]' : ''}`}>
        <nav className={`header-cn bg-dark w-[100vw] px-[5px] sm:px-[20px] lg:px-[80px] border-b-[1px] border-[#515151] 
          ${isScrolled ? 'justify-center ' : 'justify-between '} `}>
          {isScrolled ? <figure className='hidden sm:block md:hidden col-span-2 md:col-span-1 order-1 mt-4' onClick={redirectToHome}>
            <img className='h-[30px]' src={Logo} alt="logo" />
          </figure> :
            <figure className='hidden sm:block col-span-2 md:col-span-1 order-1 mt-4' role='button' onClick={redirectToHome}>
              <img className='h-[30px]' src={Logo} alt="logo" />
            </figure>
          }
          <Search />
          <section className=' nav-cn col-span-2 md:col-span-1 order-2 md:order-3 hidden sm:flex place-contesnt-center place-items-center'>
            <div className="hidden lg:block">List your creation</div>
            <div className="h-5 w-5">
              <NormalDropdown
                customClassName='w-[180px]'
                list={[
                  { name: 'English (US)', value: 'en', icon: USFlag },
                  { name: 'Japanese', value: 'jp', icon: JPFlag },
                ]}>
                <img src={LanguageIcon} alt="language_button" />
              </NormalDropdown>
            </div>
            <div className='action-button-cn min-w-[100px] h-[100px] flex items-center justify-center'>
              <div className=""><img src={MenuIcon} alt="menu_button" /></div>
              <div className="h-[2rem] w-[2rem]">
                <NormalDropdown
                  customClassName='w-[300px] -translate-x-[35vw] sm:-translate-x-[27vw] md:-translate-x-[20vw] lg:-translate-x-[10vw]'
                  list={[
                    { name: 'Sign in', value: 'signin' },
                    { name: 'Signup', value: 'signup' },
                    { name: '---', value: '---' },
                    { name: 'List your item', value: 'list-item' },
                    { name: 'Message to Yuta(The founder)', value: 'message-the-founder' },
                  ]}>
                  <img src={AccountIcon} alt="account_button" width={1002} />
                </NormalDropdown>
              </div>
            </div>
            <div className="action-button-cn flex me-2"><img src={CartIcon} alt="cart_button" /></div>
          </section>
        </nav>
      </header>
    </>
  )
}

export default Header