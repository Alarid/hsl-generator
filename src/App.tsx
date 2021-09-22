/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag */
import React from "react"
import { jsx, Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const Slider = styled.input`
  height: 150px;
  width: 10px;
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
`
Slider.defaultProps = {
  type: "range",
}

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const Text = styled.span`
  color: hsl(--hsl-color);
  /* filter negative color */
  filter: invert(100);
`
const Title = Text.withComponent("h2")

function App() {
  const [hue, setHue] = React.useState(220)
  const [saturation, setSaturation] = React.useState(100)
  const [lightness, setLightness] = React.useState(80)
  const [alpha, setAlpha] = React.useState(1)

  const hslOutput = `hsl(${hue}deg ${saturation}% ${lightness}% / ${alpha})`

  return (
    <>
      <Global
        styles={css`
          body {
            transition: background-color 0.3s ease-in;
            background-color: ${hslOutput};
          }
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 100vw;
          height: 100vh;
        `}
      >
        <Title
          css={css`
            --hsl-color: ${hue}deg ${saturation}% ${lightness}%;
            margin-bottom: 5rem;
          `}
        >
          {hslOutput}
        </Title>
        <SliderContainer>
          <Slider
            min="0"
            max="360"
            value={hue}
            onChange={(event) => setHue(Number(event.target.value))}
          />
          <Slider
            min="0"
            max="100"
            value={saturation}
            onChange={(event) => setSaturation(Number(event.target.value))}
          />
          <Slider
            min="0"
            max="100"
            value={lightness}
            onChange={(event) => setLightness(Number(event.target.value))}
          />
          <Slider
            min="0"
            max="1"
            step="0.01"
            value={alpha}
            onChange={(event) => setAlpha(Number(event.target.value))}
          />
        </SliderContainer>
      </div>
    </>
  )
}

export default App
