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
  const listening = [
    "wrote short stories on Wattpad at 11",
    "rooted my android phone, used Kali Linux to try hacking, emulated software using WineSkin at 13",
    "built a pinterest account with 1.2M monthly visitors at 15",
    "started digital art and video editing at 16",
    "crammed 3 months of Linear Algebra in 7 days in college",
    "built a global community for exceptional people of our generation at 21",
    "hosted a film festival without having been to one before at 23",
  ];

  return (
    <ContentContainer>
      {/* <GlassBackground> */}
        {/* <ContentWrapper> */}
          <P />
          <Blurb>
		  <P />
          Hi, I am Hardeep. 
		  a maker of tasteful: communities, essays, films, digital art, events, software.
            <P />
        
            <P></P>
Currently, I am contracting to grow AI video-generation startups and nomading the world.       <P />
            <br />
            In the past, I:
            <P />
            <Loop delay={2000}>
              {listening.map((item) => (
                <div key={item}>
                  <WrappingBlurbHighlighted>{item.trim()}.</WrappingBlurbHighlighted>
                </div>
              ))}
            </Loop>
            <P />
            </Blurb>
          <Blurb>
            Some of my best work:
            <ul>
              <li>• Building <BlurbHighlighted><a href="https://localhosthq.com/" target="_blank" rel="noopener noreferrer">LocalHost</a></BlurbHighlighted>. We host events and lab spaces for exceptional creatives around the world.. </li>
              <li>• Built <BlurbHighlighted><a href="https://livetheresidency.com" target="_blank" rel="noopener noreferrer">The Residency</a></BlurbHighlighted>. Helped scale it to 10 cities. Residents company are valued at $2B+</li>
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
            Shout to reh.at for providing the skeleton of this website. 
            See my notes app through <BlurbHighlighted><a href="https://hardeeps-iphone-notes.super.site/" target="_blank" rel="noopener noreferrer">here</a></BlurbHighlighted>. 
            If you are looking for my headshots for a press release, you can find them <BlurbHighlighted><a href="https://drive.google.com/drive/folders/1cUNGvh4ZzAwWbxb2eFeFsYnor5jboRNb?usp=sharing" target="_blank" rel="noopener noreferrer">here</a></BlurbHighlighted>.
            </Blurb>
        {/* </ContentWrapper> */}
      {/* </GlassBackground> */}
      <P />
    </ContentContainer>
  );
};
