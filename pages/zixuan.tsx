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

const ZixuanPage: FC = () => {
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
            <ImageWrapper>
              <PolaroidFrame>
                <StyledImg src="/photos/zixuan.jpg" alt="Zixuan" />
                <PolaroidCaption>for zixuan</PolaroidCaption>
              </PolaroidFrame>
            </ImageWrapper>
            <TextContent>
              <Blurb>
                <P />
                <BlurbHighlighted>Letter from Hardeep</BlurbHighlighted>
                <P />
                I realized we haven't talked much this week. So I thought I'd write instead.<br/><br/>
                Traveling has been fun—and a little exhausting. New cities, new people, cultures that stretch how I see the world. I'm learning a lot. Growing, I think. I can feel it in small ways: how I move through conversations, how I carry myself in rooms where no one knows my name.<br/><br/>
                But through it all, you've been on my mind more than I expected. Not in a loud way. Just… always there. In the quiet between work and walking home. In the pause before I hit "send" or when I spot something beautiful I wish I could share with you. Or when I see a girl resting her head on her partner's shoulder on the plane. It's strange how present someone can feel, even when they're not around.<br/><br/>
                I read something recently—a small blog, barely formatted, but it stuck. It said the way to evaluate a relationship is to take the emotion out and just look at the data. Ask: are you less stressed? More productive? Happier? Are you growing? Is the business growing?<br/><br/>
                And the truth is… I am. In all of those ways. Eating and fitness probably needs work lol. But laughing more. Thinking clearer. Feeling so much more like myself. And when I try to trace that back, I keep landing on you.<br/><br/>
                There's something about your presence—even from afar—that calibrates me. Like I move more in rhythm with who I want to be. I don't know exactly how you do it. Maybe it's that you believe in me in your golden retriever way. Or that you never ask me to be anything but myself—and somehow that makes me want to be better. Or that you keep calling me butter chicken.<br/><br/>
                Whatever it is, I love that. I love you, my dumpling.<br/><br/>
                And I miss you. <br/>
                <BlurbHighlighted>-- your butter chicken</BlurbHighlighted>
                <P />
              </Blurb>
            </TextContent>
          </TwoColumn>
        </BlurredContainer>
      </FullPageCenter>
    </>
  )
}

export default ZixuanPage 