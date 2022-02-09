import styled from 'styled-components'

export default function Home() {
    return(
        <Wrapper>
            <h1>SEO</h1>
            <p>Här kommer snart information om sökmotoroptimering och vad vi kan hjälpa dig och ditt företag med.</p>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 80vh;
    width: 90%
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`