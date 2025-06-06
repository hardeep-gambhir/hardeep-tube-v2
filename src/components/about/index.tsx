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
	const ingredients = [
	  "community-builder",
	  "software engineer",
	  "product-designer",
	  "artist",
	  "videographer",
	  "cinematographer",
	  "writer",
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
		  a &nbsp;
            <Loop delay={100}>
              {ingredients.map((item) => (
                <div key={item}>
                  <BlurbHighlighted>{item}.</BlurbHighlighted>
                </div>
              ))}
            </Loop>
            <P />
        
            <P></P>
            Currently, I am travelling to 30 countries in the next 4 months to bring out the stories of the most exceptional people to the world. Follow my journey on any platforms.  
            <P />
            <br />
            In the past 1 year, I:
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
              <li>• Founded <BlurbHighlighted><a href="https://livetheresidency.com" target="_blank" rel="noopener noreferrer">The Residency</a></BlurbHighlighted>; a cohort-based program for the most ambiitious and driven young entrepreneurs in the world. Globally now in 10 cities.</li>
              <li>• Developed research <BlurbHighlighted><a href="https://numeracyscreener.com" target="_blank" rel="noopener noreferrer">software</a></BlurbHighlighted> for the Ontario Ministry of Education</li>
              <li>• Giving out grants for ambitious and driven young entrepreneurs at <BlurbHighlighted><a href="https://localhosthq.com/" target="_blank" rel="noopener noreferrer">LocalHost Fellowship.</a></BlurbHighlighted> Check out this <BlurbHighlighted><a href="https://x.com/hardeep_gambhir/status/1896998696698699915" target="_blank" rel="noopener noreferrer">video</a></BlurbHighlighted> I made for the grant program we launched.</li>
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
            Updated as of October 9, 2024. This website is best viewed on desktop. Major shout to reh.at for providing the skeleton of this website. 
          </Blurb>
        {/* </ContentWrapper> */}
      {/* </GlassBackground> */}
      <P />
    </ContentContainer>
  );
}
