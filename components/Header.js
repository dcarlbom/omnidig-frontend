import styled from "styled-components";
import Link from "next/link";
import { Bars } from '@styled-icons/fa-solid'
import { useState } from 'react'

const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        console.log("click");
    }
    
    return (
        <>
        <StyledNav>
            <Link href='/'>
                <a id='header-logo'>
                    Omnidig
                </a>
            </Link>
            
            <ToggleBars onClick={handleClick}>
                <StyledToggle />
            </ToggleBars>

            <div className={`${ active ? '' : 'hidden' } mobile-dropdown`}>    
                <div className='mobile-wrapper'>
                    <Link href='/'>
                        <a className='mobile-item'>
                            Startsida
                        </a>
                    </Link>
                    <Link href='/seo'>
                        <a className='mobile-item'>
                            SEO
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='mobile-item'>
                            Google Analytics
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='mobile-item'>
                            Google Tag Manager
                        </a>
                    </Link>
                </div>
            </div>

            <ul>
                    <li>
                        <Link href='/seo'>
                            <a>SEO</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>Google Analytics</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>Google Tag Manager</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>Google Ads</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>Kontakt</a>
                        </Link>
                    </li>
                </ul>

        </StyledNav>
        </>
    )
}

const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;

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

export default Header