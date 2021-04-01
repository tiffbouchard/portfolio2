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
  margin: 0px auto;
  h1 {
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    margin: 20px 40px;
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
          <h1>
            Frontend developer + designer focused on creating seamless user experiences
          </h1>
        </AboutElementsContainer>
      </div>
    </section>
  )
}

export default LandingSection
