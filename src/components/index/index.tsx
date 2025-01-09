import { Clock } from "@components/clock";
import { Component as AboutComponent } from "@components/about";
import { Component as DarkroomComponent } from "@components/darkroom";
import { Component as SeafrontsComponent } from "@components/seafronts";
import { Component as WorksComponent } from "@components/works";
import { useEffect, useState } from "react";
import PhotoPage from 'src/components/photos/index'; // Renamed to avoid conflict
import {
  Container,
  Grain,
  GrainContainer,
  Header,
  HeaderContainer,
  Playback,
  PlaybackContainer,
  PlaybackControl,
} from "./styles";
import {
  widthToToggleMenuVisibilityOn,
  MainMenu,
  menuForPath,
  Component as Menu,
} from "@components/menu";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [activeMenu, setActiveMenu] = useState<MainMenu>(
    menuForPath(router.asPath)
  );
  const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false);

  useEffect(() => {
    if (router.asPath === "/") router.push("/about");
    else setActiveMenu(menuForPath(router.asPath));
  }, [router]);

  const content = () => {
    switch (activeMenu) {
      case MainMenu.about:
        return <AboutComponent />;
      case MainMenu.photos:
        return <PhotoPage />; // Photos component
      case MainMenu.darkroom:
        return <DarkroomComponent />;
      case MainMenu.seafronts:
        return <SeafrontsComponent />;
      case MainMenu.works:
        return <WorksComponent />;
      default:
        return <></>;
    }
  };

  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map((val) => (val < 10 ? `0${val}` : val))
      .join(':');
  };

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
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the last value (0.2) to control darkness
          zIndex: 1
        }} />
      </div>
      <GrainContainer>
        <Grain />
      </GrainContainer>
      <Menu
        isMobileMenuOpen={isMobileMenuOpen}
        onIsMobileMenuOpenChange={setIsMenuMobileOpen}
        activeMenu={activeMenu}
        onActiveMenuChange={setActiveMenu}
      />
      <HeaderContainer
        onClick={() => {
          if (width !== null && width > widthToToggleMenuVisibilityOn) return;
          setIsMenuMobileOpen(!isMobileMenuOpen);
        }}
      >
        <Header>Hardeep's Filming Space</Header>
      </HeaderContainer>
      <Container>{content()}</Container>
      <Clock />
      <PlaybackContainer>
        <PlaybackControl>Play</PlaybackControl>
        <Playback>{formatTime(timeSpent)}</Playback>
      </PlaybackContainer>
    </>
  );
};
