import { FC } from "react";
import TextLoop from "react-text-loop";
import styled from 'styled-components';
import { P, Blurb, BlurbHighlighted } from "@typography/styles";


const ContentContainer = styled.div`
  // Remove any background color if present
  background: transparent;
  // Add any other styles you need for ContentContainer
`;

const GlassBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px); // Increased blur for a more blurry effect
  -webkit-backdrop-filter: blur(50px); // Increased blur for a more blurry effect
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px;

  box-sizing: border-box;
  width: 98%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden; // This will ensure content doesn't overflow the rounded corners
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  position: relative;
  z-index: 1;
`;

const Loop: FC<{
  delay?: number;
  children?: React.ReactNode;
}> = ({ delay, children }) => (
  <div>
    <TextLoop delay={delay} interval={1000}>
      {Array.isArray(children) ? children : []}
    </TextLoop>
  </div>
);

const Loop1: FC<{
  delay?: number;
  children?: React.ReactNode;
}> = ({ delay, children }) => (
  <div>
    <TextLoop delay={delay} interval={4000}>
      {Array.isArray(children) ? children : []}
    </TextLoop>
  </div>
);

export const Component: FC = () => {
  const ingredients = [
    "bring cool homies who care about the world together",
    "make some banger-looking apps, websites and videos 🎞️",
    "tell some fire stories 📖",
    "learn about markets and tech",
    "speed cars (occasionally)",
    "take unreasonable risks",
  ];

  const listening = [
    "snuck into a conference VIP area to pitch an investor on an idea that was barely a thought",
    "took a gap and moved to sf with 2 months of runway",
    "cancelled a flight to road trip with strangers",
    "booked a flight 3 hours before departure",
    "crammed 3 months of Linear Algebra in 7 days",
    "jumped off a cliff",
    "snuck into classes at UC Berkeley 🏛️",
  ];

  

  return (
    <ContentContainer>
      <GlassBackground>
        <ContentWrapper>
          <P />
          <Blurb>
          Hi I am Hardeep! a 20-year-old community-builder, software engineer, product-designer, artist, videographer, cinematographer, writer, human.
            <br />
            <P></P>
            <br />
            Currently, I am back at Western University in Canada, rethinking life's next steps and heads-down grinding. 
            <P />
            <br />
            In the past 1 year, I:
            <P />
            <Loop1 delay={100}>
              {listening.map((item) => (
                <div key={item}>
                  <BlurbHighlighted>{item}.</BlurbHighlighted>
                </div>
              ))}
            </Loop1>
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
              <li>Founded <BlurbHighlighted><a href="https://livetheresidency.com" target="_blank" rel="noopener noreferrer">The Residency</a></BlurbHighlighted>; a network of group houses across the world</li>
              <li>Developed <BlurbHighlighted><a href="https://numeracyscreener.com" target="_blank" rel="noopener noreferrer">software</a></BlurbHighlighted> for the Ontario Ministry of Education at 19</li>
              <li>Built projects as a Builder at <BlurbHighlighted><a href="https://buildspace.so/sf2" target="_blank" rel="noopener noreferrer">Buildspace sf2</a></BlurbHighlighted>; buildspace's last IRL cohort</li>
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
            Updated as of October 9, 2024
          </Blurb>
        </ContentWrapper>
      </GlassBackground>
      <P />
    </ContentContainer>
  );
};
