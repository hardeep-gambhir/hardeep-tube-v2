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
    "snuck into a conference VIP area to pitch an investor on an idea that was barely a thought",
    "took a gap year and moved to sf with 2 months of runway",
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
		  a 20-year-old:&nbsp;
            <Loop delay={100}>
              {ingredients.map((item) => (
                <div key={item}>
                  <BlurbHighlighted>{item}.</BlurbHighlighted>
                </div>
              ))}
            </Loop>
            <P />
        
            <P></P>
            Currently, I am back at Western University in Canada, rethinking life's next steps and heads-down grinding. 
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
              <li>• Founded <BlurbHighlighted><a href="https://livetheresidency.com" target="_blank" rel="noopener noreferrer">The Residency</a></BlurbHighlighted>; a network of group houses across the world </li>
              <li>• Developed <BlurbHighlighted><a href="https://numeracyscreener.com" target="_blank" rel="noopener noreferrer">software</a></BlurbHighlighted> for the Ontario Ministry of Education at 19</li>
              <li>• Built projects as a Builder at <BlurbHighlighted><a href="https://buildspace.so/sf2" target="_blank" rel="noopener noreferrer">Buildspace sf2</a></BlurbHighlighted>; buildspace's last IRL cohort</li>
            </ul>
          </Blurb>

          <br />
          <br />

          <Blurb>
            <BlurbHighlighted><a href="https://x.com/hardeep_gambhir" target="_blank" rel="noopener noreferrer">Twitter (preferred)</a></BlurbHighlighted> <BlurbHighlighted><a href="mailto:me@hardeep.tube">Email</a></BlurbHighlighted> <BlurbHighlighted><a href="https://curius.app/hardeep-gambhir" target="_blank" rel="noopener noreferrer">Curius</a></BlurbHighlighted> <BlurbHighlighted><a href="https://hardeepgambhir.substack.com" target="_blank" rel="noopener noreferrer">Substack</a></BlurbHighlighted>
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
