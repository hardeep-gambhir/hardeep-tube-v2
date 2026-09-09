import { FC, useEffect, useState } from "react"
import { ContentContainer } from "@components/index/styles"
import { Blurb, BlurbHighlighted } from "@typography/styles"
import styled from "styled-components"

const facts = [
  "wrote short stories on Wattpad at 11.",
  "built a Pinterest account with 1.2M monthly visitors at 15.",
  "started digital art and video editing at 16.",
  "crammed three months of linear algebra into seven days in college.",
  "learned three years of high school material plus AP math in eight months, after finishing grade 12.",
]

// Overlapping grid cells reserve the height of the longest fact at any width.
// Only opacity and transform animate, so the text below never jumps.
const FactContainer = styled.div`
  display: grid;
  isolation: isolate;
  margin: 0.8em 0 0;
  padding: 5px 6px 8px;
`

const Fact = styled.div<{ $active: boolean }>`
  grid-area: 1 / 1;
  min-width: 0;
  align-self: start;
  opacity: ${props => props.$active ? 1 : 0};
  transform: translateY(${props => props.$active ? "0" : "10px"});
  transition: opacity 300ms ease, transform 450ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${props => props.$active ? "160ms" : "0ms"};
  pointer-events: ${props => props.$active ? "auto" : "none"};
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`

const RotatingFact = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer: ReturnType<typeof setInterval> | undefined
    const configure = () => {
      if (timer) clearInterval(timer)
      if (!motion.matches) {
        timer = setInterval(() => {
          if (!document.hidden) setIndex(value => (value + 1) % facts.length)
        }, 6500)
      }
    }
    configure()
    motion.addEventListener("change", configure)
    return () => {
      if (timer) clearInterval(timer)
      motion.removeEventListener("change", configure)
    }
  }, [])
  return <FactContainer data-testid="rotating-facts">
    {facts.map((fact, item) => <Fact key={fact} $active={item === index} aria-hidden={item !== index}>
      <BlurbHighlighted>{fact}</BlurbHighlighted>
    </Fact>)}
  </FactContainer>
}

const Biography = styled(Blurb).attrs({ as: "div" })`
  display: block;
  p { margin-bottom: 1.25em; }
`

const Highlights = styled.ul`
  margin: 0 0 1.75em;
  li { position: relative; padding-left: 1em; margin-bottom: 1em; }
  li::before { content: "•"; position: absolute; left: 0; }
`

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1em 0 2em;
  a { display: inline-block; }
`

const Link: FC<{ href: string }> = ({ href, children }) => (
  <BlurbHighlighted><a href={href} {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a></BlurbHighlighted>
)

export const Component: FC = () => (
  <ContentContainer>
    <Biography>
      <p>hi, i’m hardeep. by way of new delhi, toronto, san francisco, bangalore, and tokyo.</p>
      <p>i build places for exceptional people to find each other. lately, that means <Link href="https://localhosthq.com/">LocalHost</Link> and ai film festivals.</p>
      <p>a few things i’ve done:</p>
      <Highlights>
        <li>threw a film festival at mumbai’s royal opera house in 25 days. had never attended one. 1,265 teams applied. then we held festivals with the government of india in delhi, and 46 floors above tokyo.</li>
        <li>moved to san francisco at 19 with $2,120 and a cold dm. helped build <Link href="https://livetheresidency.com">the residency</Link>, backed by sam altman, and scaled it to seven cities.</li>
        <li>turned ~200 cold emails into $80,000 in grants and three months across 30 countries.</li>
        <li>used my scholarship money to give microgrants to people i thought were exceptional.</li>
      </Highlights>
      <section aria-label="Earlier adventures">
        <div>before that, i:</div>
        <RotatingFact />
      </section>
      <p>still writing, still moving around, still finding people i want to make things with.</p>
      <p>outside of work, i’m usually snowboarding, climbing, lifting, reading, or finding an excuse to catch a flight. i spend a lot of time following rabbit holes on <Link href="https://curius.app/hardeep-gambhir">curius</Link>, reading and writing essays, and doing knowledge work with my hermes agent.</p>
      <p>recurring rabbit holes: china, lee kuan yew, how ai changes economics, how media businesses make money, and how stories shape what people believe. i love pixar and find elon fascinating—<em>the book of elon</em> is exceptional.</p>
      <p>people whose thinking i keep coming back to: lulu cheng meservey, eric jorgenson, tyler cowen, and anu atluru.</p>
      <p>twitter is the fastest way to reach me.</p>
      <Socials>
        <Link href="https://x.com/hardeep_gambhir">twitter (preferred)</Link>
        <Link href="mailto:hardeep.gambhir23@gmail.com">email</Link>
        <Link href="https://curius.app/hardeep-gambhir">curius</Link>
        <Link href="https://hardeepgambhir.substack.com">substack</Link>
        <Link href="https://www.instagram.com/hardeep_gambhir/">instagram</Link>
        <Link href="https://www.linkedin.com/in/hardeep-gambhir/">linkedin</Link>
      </Socials>
      <p>shoutout to <Link href="https://reh.at">reh.at</Link> for the skeleton of this site. <Link href="https://hardeeps-iphone-notes.super.site/">notes app</Link> · <Link href="https://drive.google.com/drive/folders/1cUNGvh4ZzAwWbxb2eFeFsYnor5jboRNb?usp=sharing">press headshots</Link></p>
    </Biography>
  </ContentContainer>
)
