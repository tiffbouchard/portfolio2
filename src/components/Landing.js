import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from "styled-components"

const AboutElementsContainer = styled.div`
  max-width: 1250px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 100px 0px;
  p {
    font-family: NeueMontrealLight;
    font-size: 40px;
    @media (max-width: 400px) {
      font-size: 30px;
    }
  }
`

const LandingSection = props => {
  React.useEffect(() => {
    AOS.init()
  })

  return (
    <section>
      <div>
        <AboutElementsContainer
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <p>
            Frontend developer + designer focused on creating seamless user experiences
          </p>
        </AboutElementsContainer>
      </div>
    </section>
  )
}

export default LandingSection
