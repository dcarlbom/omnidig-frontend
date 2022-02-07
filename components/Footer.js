import next from "next"
import Link from "next/link"
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterWrapper>
            <SectionMain>
                <MainItem>
                    <SectionMainHeader>
                        Våra Tjänster
                    </SectionMainHeader>
                    <MenuList>
                        <li><a href="#">SEO</a></li>
                        <li><a href="#">Google Analytics</a></li>
                        <li><a href="#">Google Tag Manager</a></li>
                        <li><a href="#">Google Ads</a></li>
                        <li><a href="#">Webbdesign</a></li>
                    </MenuList>
                </MainItem>

                <MainItem>
                    <SectionMainHeader>
                        Om oss
                    </SectionMainHeader>
                    <MenuList>
                        <li><a href="#">Vårt Team</a></li>
                        <li><a href="#">Om företaget</a></li>
                    </MenuList>
                </MainItem>

                <MainItem>
                    <SectionMainHeader>
                        Läsvärt
                    </SectionMainHeader>
                    <MenuList>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                    </MenuList>
                </MainItem>

                <MainItem>
                    <SectionMainHeader>
                        Omnidig AB
                    </SectionMainHeader>
                    <MenuList>
                        <li>Sälnaberg 553</li>
                        <li>195 96 Rosersberg</li>
                        
                        <li>559029-0119</li>
                    </MenuList>
                </MainItem>
            </SectionMain>
            
            <SectionLegal>
                <LegalList>
                    <LegalItem>Integritetspolicy</LegalItem>
                    <LegalItem>Kontakta oss</LegalItem>
                    <LegalItem>&copy; Omnidig AB</LegalItem>
                </LegalList>
            </SectionLegal>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.footer`
    background-color: #FAA307;
    color: #03071E;
    line-height: 1.5rem;
`

const MainItem = styled.div`
    padding: 1.25rem;
    min-width: 12.5rem;
`

const SectionMain = styled.section`
    padding: 1.25rem 3.875rem;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        justify-content:space-around;
    }
    
    @media (min-width: 1240px) {
        justify-content:space-evenly;
    }
`

const SectionMainHeader = styled.h3`
    color: #03071E;
    font-size: 1.2rem;
    padding-bottom: 0.625rem;
`

const MenuList = styled.ul`
    list-style: none;
    padding-left: 0;
`

const SectionLegal = styled.section`
    padding: 0.9375rem 1.875rem;
    background-color: #333;
    color: #fff;
`

const LegalList =styled.ul`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`

const LegalItem = styled.li`
    margin: 0.125rem 0.625rem;
    white-space: nowrap;

    &:nth-last-child(2){
        flex:1;
    }
`