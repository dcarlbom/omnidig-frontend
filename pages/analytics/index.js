import styled from 'styled-components'

export default function Home() {
    return(
        <Wrapper>
            <h1>Google Analytics</h1>
            <p>Här kommer snart information om Google Analytics och vad vi kan hjälpa dig och ditt företag med.</p>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 80vh;
    padding: 0 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`