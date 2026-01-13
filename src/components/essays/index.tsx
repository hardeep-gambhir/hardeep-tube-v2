import { FC } from "react"
import { ContentContainer } from "@components/index/styles"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"
import styled from "styled-components"

const EssaysHeading = styled(BlurbHighlighted)`
  display: block;
  font-size: 1.5em;
  margin-bottom: 20px;
  margin-top: 0;
  padding-top: 10px;
`

const EssaysList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const EssayItem = styled.li`
  margin-bottom: 15px;
`

const EssayTitle = styled(BlurbHighlighted)`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 4px;
  
  &::after {
    content: " →";
    opacity: 0;
    transition: opacity 0.2s ease;
    margin-left: 4px;
  }
`

const EssayLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover ${EssayTitle} {
    transform: translateX(5px);
    text-decoration-color: currentColor;
    
    &::after {
      opacity: 1;
    }
  }

  &:active ${EssayTitle} {
    transform: translateX(3px) scale(0.98);
  }
`

interface Essay {
  title: string
  url: string
}

const essays: Essay[] = [
  {
    title: "Everything about the ai film festival",
    url: "https://hardeepgambhir.substack.com/p/everything-about-the-ai-film-festival"
  },
  {
    title: "The Best Month of my life",
    url: "https://hardeepgambhir.substack.com/p/the-best-month-of-my-life"
  },
  {
    title: "how i built a startup program in 3 months in a city i had never been to, without having built a startup myself",
    url: "https://hardeepgambhir.substack.com/p/how-i-built-a-startup-program-in"
  }
]

const EssaysContainer = styled(Blurb)`
  padding-top: 0;
`

export const Component: FC = () => {
  return (
    <ContentContainer>
      <EssaysContainer>
        <EssaysHeading>Essays</EssaysHeading>
        <EssaysList>
          {essays.map((essay, index) => (
            <EssayItem key={index}>
              <EssayLink href={essay.url} target="_blank" rel="noopener noreferrer">
                <EssayTitle>{essay.title}</EssayTitle>
              </EssayLink>
            </EssayItem>
          ))}
        </EssaysList>
        <P />
      </EssaysContainer>
      <P />
    </ContentContainer>
  )
}

