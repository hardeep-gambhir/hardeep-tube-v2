import { FC } from "react"
import { P, Blurb, BlurbHighlighted } from "@typography/styles"
import styled from "styled-components"

const FullPageCenter = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const TopAudioBar = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 0 12px 0;
  position: relative;
  z-index: 10;
  background: transparent;
`;

const AudioMessage = styled.div`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.25);
  font-family: inherit;
`;

const StyledAudio = styled.audio`
  font-family: inherit;
  color: #fff;
  background: transparent;
`;

const TwoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const PolaroidFrame = styled.div`
  background: #fff;
  padding: 18px 18px 100px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.22), 0 1.5px 8px rgba(0,0,0,0.10);
  display: inline-block;
  transform: rotate(-6deg);
  border-radius: 0;
  position: relative;
`;

const PolaroidCaption = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;
  text-align: center;
  font-family: 'Dancing Script', 'Pacifico', 'Brush Script MT', cursive;
  font-size: 2rem;
  color: #222;
  opacity: 0.85;
  transform: rotate(-6deg);
  pointer-events: none;
  user-select: none;
`;

const ImageWrapper = styled.div`
  flex: 0 0 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    margin-top: 0;
  }
`;

const StyledImg = styled.img`
  width: 320px;
  max-width: 90vw;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: none;
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;
  max-width: 700px;
`;

const BlurredContainer = styled.div`
  border-radius: 18px;
  border: 1.5px solid #fff;
  background: rgba(30, 30, 30, 0.25);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 48px 32px;
  max-width: 1200px;
  margin: 48px 0;
  width: 90vw;
  @media (max-width: 900px) {
    padding: 18px 4vw;
    margin: 18px 0;
  }
`;

const RecommitmentPage: FC = () => {
  return (
    <>
      {/* Background Video with Overlay */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden', 
        zIndex: -1,
        pointerEvents: 'none'
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <source src="/videos/applevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black overlay to darken the video slightly */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }} />
      </div>
      <FullPageCenter>
        <BlurredContainer>
          <TwoColumn>
            <TextContent>
              <Blurb>
                <P />
                <BlurbHighlighted>Recommitment</BlurbHighlighted>
                <P />
                lily essay #3<br/><br/>
                dear love,<br/><br/>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  marginBottom: '24px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(4px)'
                }}>
                  <div style={{ 
                    color: '#fff', 
                    fontSize: '1rem', 
                    marginBottom: '12px',
                    textAlign: 'center',
                    fontStyle: 'italic'
                  }}>
                    play this while you read
                  </div>
                  <audio 
                    controls 
                    loop 
                    style={{
                      width: '100%',
                      maxWidth: '300px'
                    }}
                  >
                    <source src="/music/romantic2.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div><br/>
                i think you know me enough by now to know i think through things deeply to optimize for the long-term the best.<br/><br/>
                recently (probably because the frequency or the length of our calls increasing), i find myself asking the question why do i have this unusual urge to call you every day and why do i catch myself often thinking about you during the day.<br/><br/>
                it might not be a killing question for you since you've been in a relationship before and fallen for some potential life-partners in the past — i am not sure.<br/><br/>
                but to me, it drives me a bit insane frankly. for the longest time i did not think i could love someone or that i even wanted to.<br/><br/>
                my idea of love was watching movies with this special someone, having great sex, raising kids for the sake of it, going on dinners, treating each other on special dates.<br/><br/>
                and honestly that sounded like the most boring life possible. i saw friends doing that at Western, i saw my friends in SF having these relationships, i saw friends friends in different places using Hinge to find that person to do these activities with.<br/><br/>
                but if the sole purpose for a relationship was this, frankly, i think and i know that i am way better alone.<br/><br/>
                i have always been independent, handled soltitude mostly well and been extremely intrinsically motivated for my own pursuits.<br/><br/>
                but<br/><br/>
                then i met you.<br/><br/>
                i honestly did not ever think i'd like you as much as i did, not even close.<br/><br/>
                to me you seemed on the outside a traditional business school girl, like everyone at Western and at any business school in the world. at first.<br/><br/>
                then i got to know you more and i got to see these sides of you that no one else seemed to, like the insides of the petals of a rose after it opens up in spring.<br/><br/>
                i saw just how <BlurbHighlighted>obsessive and consistent</BlurbHighlighted> you could be (something i struggle with, hence it's so complimentary). seeing your efforts with AuraQi, and seeing just how far you'd go to be the best at badminton. i have rarely seen someone be that consistent. this is one of the things i like most about you, you seem to overthink the least out of most people i know and just do do do. seeing you just get on posting reels on instagram consistently nearly every day instead of spending 2 weeks researching YouTube videos on perfecting Instagram marketing. i like to think i know many intelligent people, but every one struggles on this but you. it truly inspires me + makes me proud to call you my girlfriend.<br/><br/>
                i saw how <BlurbHighlighted>caring and selfless</BlurbHighlighted> you could be. small efforts, hearing you bring coffee for the Pally team, hearing you want to help all these folks who slide in your DMs wanting to know advice on how to break into startups and etc, and even in the initial days of us just talking seeing you bring me food from outside when i was sick. seeing how you treat people around you, always hearing you make bagels for people in the SF2 house, seeing you bring home food from the cafe when we were at SF Parc for yourself, Danny and me.<br/><br/>
                i saw how <BlurbHighlighted>fast you move</BlurbHighlighted>. i feel i have a very high bar for this in the first place, and somehow you seem to have figured out how to break that. one week of sending you that essay on agency, i saw you just book many of these solo-trips, i heard you first hand asking to play tennis with strangers, i saw you come to SF as a part of your layover and just stay here to go chat with people in startups to want to work for them. i saw you make your first instagram reel and just not stop since. i saw you start writing vulnerably on Substack almost instantly. i saw you recognize that you love me and just move your life to align with mine.<br/><br/>
                while i have had many people care for me, i have never had someone who changed their entire life after seeing the principles i abide by.<br/><br/>
                i forgot how fast you move, until you told me recently we'll make any location work for September to want to be together. i have never had this much <BlurbHighlighted>care</BlurbHighlighted> from someone.<br/><br/>
                so, to go back to the first question i posed at the beginning of the letter: "why do i have this unusual urge to call you every day and why do i catch myself often thinking about you during the day."<br/><br/>
                i realize I have this urge because i see these petals in you, that i have never understood how someone else hasn't found to be perfect before. and seeing how just how perfectly these petals compliment me, and how the petals of my rose seem to compliment you. and seeing just our two roses with our petals embracing each other fully and literally.<br/><br/>
                you make me laugh. you make me feel more emotionally secure. you make me feel physically secure.<br/><br/>
                in the middle of me grinding for my dreams, there was always this idea that "i need to be the best in the world at something, no matter what"<br/><br/>
                and now it has shifted to "i will be the best at something no matter what, and now i have someone holding my hand while i approach these big dreams"<br/><br/>
                for the longest time, i didn't want a relationship because it seemed like i'd give up my dreams for it, and i would never do that.<br/><br/>
                then once, one of my friend's mom said "well honey, you could find someone who <BlurbHighlighted>supports</BlurbHighlighted> your dreams"<br/><br/>
                i never understood it at that point. it didn't make sense. if i commit with someone to this future of long-term partnership, potentially marriage, potentially a house, potentially kids, how in the world could that support and not pull me away from my dreams.<br/><br/>
                i do now.<br/><br/>
                my dreams are the same. my goals are the same. and now i have something to work towards to make these dreams happen faster: a future with you. and i can make these dreams happen faster, because now, i have you with me.<br/><br/>
                and we will. we will make not my dreams come true, but <BlurbHighlighted>our</BlurbHighlighted> dreams.<br/><br/>
                two weeks ago, i sent you this blog about this guy talking about his marriage and one of things he mentioned in the blog was you need to consistently recommit in a relationship, in a marriage.<br/><br/>
                recommit you want to stay together. reevaluate and recommit.<br/><br/>
                this letter is me recommitting to you. there are always other options like we talked before. someone more attractive, someone more intelligent, someone more wealthy, someone with more experience, someone with more connections, someone with more opportunities or someone with more potential.<br/><br/>
                but i choose you because i have never felt the mix of all these qualities in one person so perfectly compliment me. <br/><br/>
                and i hope we can continue to grow together, to be the best versions of ourselves, to be the best versions of each other, to be the best versions of us. to keep complimenting each other and figure out ways to compliment each other more<br/><br/>
               that's about all we can do, try to make this work for both of our needs, and i hope this works out for us. <br/><br/>
                <BlurbHighlighted>— hardeep</BlurbHighlighted>
                <P />
              </Blurb>
            </TextContent>
          </TwoColumn>
        </BlurredContainer>
      </FullPageCenter>
    </>
  )
}

export default RecommitmentPage 