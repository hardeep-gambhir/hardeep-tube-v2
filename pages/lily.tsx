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

const CenteredContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const LilyPage: FC = () => {
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
        <CenteredContent>
          <Blurb>
            <P />
            <BlurbHighlighted>What Learning to Love Feels Like</BlurbHighlighted>
            <P />
            For most of my life, I've worn self-sufficiency like armor. Attachment felt like weakness, something that would slow me down or hold me back. My childhood taught me to rely only on myself, to never need anyone else too deeply. The only attachment I allowed was to something bigger—to making the world better, to giving my love outward until others found their own agency to put back into the world.
            <P />
            I started initiatives and projects because I knew if I didn't, few people would. I cared about humanity in the abstract, but individual people? That felt too risky, too vulnerable.
            <P />
            Until I met you.
            <P />
            For the first time in my life, I care about someone so deeply it reaches my core. Not partly, not conditionally—completely. It scares me because I was never ready to commit before, never had space in my life for someone else's dreams alongside my own.
            <P />
            Relationships always seemed like they'd derail my bigger ambitions, but with you it's the opposite. We spend our days working toward what matters to us, our nights together, and when we're apart, we call to check on each other. You don't slow me down—you fuel me forward.
            <P />
            Whenever self-doubt creeps in or I have a bad day, I know you're there, a call away. For the first time, I can rely on someone else's love to keep me going, and it doesn't feel like weakness. It feels like strength I never knew I had access to.
            <P />
            The last few days with you have been unlike anything I've experienced. I've had the time of my life, and I'll always be grateful for the love you've given me, no matter what comes next.
            <P />
            You make me feel whole—whether you're in my arms or away from me. I can't wait to build a future where we empower each other's ambitions, push each other to be our most agentic selves, and pursue our dreams with relentless determination.
            <P />
            So many of your quirks that I didn't understand at first, I've come to love. The way you use shampoo as body wash. The way you don't open up emotionally as much but your eyes and smile say everything your words don't. The way you looked at me the night of the tech gala—I carry that moment with me.
            <P />
            All my life I thought I was searching for the "perfect" relationship, something I would just *feel* when it happened. Only now do I understand that you feel love, but commitment is something you *make*. You construct it brick by brick, effort by effort—by giving love, accepting love, accepting each other's flaws, and accepting ourselves.
            <P />
            I've learned so much from you, about you and about myself. This journey we're starting—it scares me a little. I've never trusted someone this much. But you make me want to give this a real shot, to go all-in, to make this work.
            <P />
            There's a word in Hebrew, להכיל (lehakil), which means 'to contain' or 'to hold'—not just physically, but emotionally and mentally. To hold space for someone, to accept and embrace all parts of them as they are.
            <P />
            I want to contain you. And I want you to contain me.
            <P />
            <BlurbHighlighted>I love you.</BlurbHighlighted>
            <P />
          </Blurb>
        </CenteredContent>
      </FullPageCenter>
    </>
  )
}

export default LilyPage 