/* import styled from "styled-components"; */
import Link from "next/link";
/* import { Bars } from '@styled-icons/fa-solid' */
import { useState } from 'react'

const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        console.log("click")
        setActive(!active);
    }
    
    return (
        <>
        <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <Link href='/'>
                    <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Omnidig</a>
                </Link>
                
                {/* <!-- Mobile menu button --> */}
                <div onClick={handleClick} className="flex md:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className={`${ active ? '' : 'hidden' } items-center md:flex` }>
                <div className="flex flex-col md:flex-row md:mx-6">
                    <Link href="/seo"><a onClick={handleClick} className="mt-4 mb-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">SEO</a></Link>
                    <Link href="/analytics"><a onClick={handleClick} className="my-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Google Analytics</a></Link>
                    <Link href="/gtm"><a onClick={handleClick} className="my-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Google Tag Manager</a></Link>
                    <Link href="/ads"><a onClick={handleClick} className="my-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Google Ads</a></Link>
                </div>

                {/* <div className="flex justify-center md:block">
                    <a className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </a>
                </div> */}
            </div>
        </div>
    </nav>
        </>
    )
}

/* const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    background-color: #03071E;

    #header-logo{
        color: #fff;
        font-size: 1.5rem;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;

        li {
            margin-right: 1.2rem;
            color: #fff;
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .mobile-dropdown{
        display: none;
        

        @media screen and (max-width: 768px) {
            width: 100%;
            display: inline-flex;
            flex-grow: 1;
        }
    }

    .hidden {
        display: none;
    }

    .mobile-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media screen and (min-width: 768px) {
            display: inline-flex;
            flex-direction: row;
            margin-left: auto;
            width: auto;
            align-items: center;
            height: auto;
        }

        .mobile-item {
            width: 100%;
            padding: 0.75rem 0.5rem;
            color: #fff;
            font-weight: bold;
            align-items: center;
            justify-content: center;
            border-radius: 0.25rem;

            @media screen and (min-width: 768px) {
                display: inline-flex;
                width: auto;
            }
        }
    }
`
const ToggleBars = styled.button`
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
`

const StyledToggle = styled(Bars)`
    color: white;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`
 */
export default Header