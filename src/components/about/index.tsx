import { FC } from "react"
import TextLoop from "react-text-loop"
import { ContentContainer } from "@components/index/styles"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"
import styled, { keyframes } from "styled-components"

const Loop: FC<{
	delay?: number
}> = (props: any) => {
	return (
		<TextLoop delay={props.delay} interval={4000}>
			{props.children}
		</TextLoop>
	)
}

// const ContentContainer = styled.div`
//   // Remove any background color if present
//   background: transparent;
//   // Add any other styles you need for ContentContainer
// `;

// const GlassBackground = styled.div`
//   background: rgba(255, 255, 255, 0.1);
// //   backdrop-filter: blur(15px); // Increased blur for a more blurry effect
// //   -webkit-backdrop-filter: blur(50px); // Increased blur for a more blurry effect
//   border-radius: 9px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   padding: 30px;

//   box-sizing: border-box;
//   width: 98%;
//   max-width: 1000px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   overflow: hidden; // This will ensure content doesn't overflow the rounded corners
// `;

const ContentWrapper = styled.div`
  width: 40%;
  padding: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  position: relative;
  z-index: 1;
`;

const WrappingBlurbHighlighted = styled(BlurbHighlighted)`
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Component: FC = () => {
	const ingredients = [,
    "communities",
    "essays",
    "films",
    "digital art",
	  "software",
	];

  const listening = [
    "took a gap year and moved to sf",
    "cancelled a flight to road trip with strangers",
    "booked a flight and left home within an hour of thought",
    "crammed 3 months of Linear Algebra in 7 days",
    "snuck into too many classes at UC Berkeley",
  ];

  return (
    <ContentContainer>
      {/* <GlassBackground> */}
        {/* <ContentWrapper> */}
          <P />
          <Blurb>
		  <P />
          Hi, I am Hardeep. 
		  a maker of:&nbsp;
            <Loop delay={100}>
              {ingredients.map((item) => (
                <div key={item}>
                  <BlurbHighlighted>{item}.</BlurbHighlighted>
                </div>
              ))}
            </Loop>
            <P />
        
            <P></P>
            This summer, I travelled the world to 8 countries in 2 months to host events and make videos on the most exceptional people of our generation. You can see my work <BlurbHighlighted><a href="https://www.instagram.com/hardeep_gambhir/reels/" target="_blank" rel="noopener noreferrer">here.</a></BlurbHighlighted>
            <P />
            <br />
            In the past 2 years, I:
            <P />
            <Loop delay={2000}>
              {listening.map((item) => (
                <div key={item}>
                  <WrappingBlurbHighlighted>{item.trim()}.</WrappingBlurbHighlighted>
                </div>
              ))}
            </Loop>
            <P />
            <br />
            To know me (har)deeply beyond my accomplishments, check out: <br />
            <BlurbHighlighted>
              <a href="https://hardeeps-iphone-notes.super.site/" target="_blank" rel="noopener noreferrer">notes from my iPhone</a>
            </BlurbHighlighted>.
          </Blurb>

          <br />
          <Blurb>
            <br />
            Some of my best work:
            <ul>
              <li>• Building <BlurbHighlighted><a href="https://localhosthq.com/" target="_blank" rel="noopener noreferrer">LocalHost</a></BlurbHighlighted>. We host events and retreats, give grants and invest in exceptional people of our generation. </li>
              <li>• Worked at <BlurbHighlighted><a href="https://livetheresidency.com" target="_blank" rel="noopener noreferrer">The Residency</a></BlurbHighlighted>. Helped scale it to 10 cities. Residents company are valued at $500M+</li>
              <li>• Developed research <BlurbHighlighted><a href="https://numeracyscreener.com" target="_blank" rel="noopener noreferrer">software</a></BlurbHighlighted> for the Ontario Ministry of Education</li>
            </ul>
          </Blurb>

          <br />
          <br />
          <Blurb>
            <BlurbHighlighted><a href="https://x.com/hardeep_gambhir" target="_blank" rel="noopener noreferrer">Twitter (preferred)</a></BlurbHighlighted> <BlurbHighlighted><a href="mailto:hardeep.gambhir23@gmail.com">Email</a></BlurbHighlighted> <BlurbHighlighted><a href="https://curius.app/hardeep-gambhir" target="_blank" rel="noopener noreferrer">Curius</a></BlurbHighlighted> <BlurbHighlighted><a href="https://hardeepgambhir.substack.com" target="_blank" rel="noopener noreferrer">Substack</a></BlurbHighlighted> <BlurbHighlighted><a href="https://www.instagram.com/hardeep_gambhir/" target="_blank" rel="noopener noreferrer">Instagram</a></BlurbHighlighted> <BlurbHighlighted><a href="https://www.linkedin.com/in/hardeep-gambhir/" target="_blank" rel="noopener noreferrer">LinkedIn</a></BlurbHighlighted>
          </Blurb>
          <p></p>
          <br />
          <Blurb>
            Updated as of Sept 18, 2025. This website is best viewed on desktop. Major shout to reh.at for providing the skeleton of this website. 
          </Blurb>
        {/* </ContentWrapper> */}
      {/* </GlassBackground> */}
      <P />
    </ContentContainer>
  );
}
