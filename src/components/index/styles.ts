import { grain } from "@components/grain"
import styled, { keyframes } from "styled-components"

export const Container = styled.div`
	min-height: 100vh;
	min-height: 100svh;
	width: 100%;
	padding: 90px 180px 110px;
	@media (max-width: 900px) {
		padding: calc(88px + env(safe-area-inset-top)) max(20px, env(safe-area-inset-right)) calc(100px + env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left));
	}
	display: grid;
	place-items: center;
	align-content: center;
	grid-gap: 20px;
	@media (max-width: 900px) { align-content: start; }
`

export const staticGrain = keyframes`
	0%, 100% {
		transform: translate(0,0);
	}
	10% {
		transform: translate(-5%,-10%);
	}
	30% {
		transform: translate(3%,-15%);
	}
	50% {
		transform: translate(12%,9%);
	}
	70% {
		transform: translate(9%,4%);
	}
	90% {
		transform: translate(-1%,7%);
	}
`

export const GrainContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`

export const Grain = styled.div`
	animation: ${staticGrain} 1.5s steps(6) infinite;
	content: "";
	position: absolute;
	width: 400vw;
	height: 400vh;
	left: -50vw;
	top: -50vh;
	background-image: url("${grain}");
`

export const ContentContainer = styled.div`
	width: 100%;
	max-width: 500px;
	min-width: 0;
	overflow-wrap: anywhere;
	ul { list-style: none; }
`

export const HeaderContainer = styled.button`
	border: 0;
	background: transparent;
	padding-top: env(safe-area-inset-top);
	display: grid;
	place-items: center;
	width: 100vw;
	position: fixed;
	top: 0px;
	z-index: 101;
	@media only screen and (max-width: 900px) {
		background: ${(props) => props.theme.text};
		cursor: pointer;
	}
`

export const Header = styled.h2`
	font-family: VCR;
	letter-spacing: 0.25rem;
	text-align: center;
	color: ${(props) => props.theme.text};
	text-transform: uppercase;
	padding: 15px 15px 15px 15px;
	@media only screen and (max-width: 900px) {
		line-height: 2rem;
		font-size: 1.2rem;
		color: ${(props) => props.theme.background};
	}
`

export const PlaybackContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	position: fixed;
	right: 30px;
	bottom: 20px;
	justify-items: end;
	@media only screen and (max-width: 900px) {
		display: none;
		right: 16px;
		bottom: calc(1rem + env(safe-area-inset-bottom));
	}
`

export const VCREdgeOverlayTextStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
	font-size: 1.3rem;
	padding: 0 5px 0 5px;
	width: fit-content;
	@media only screen and (max-width: 900px) {
		color: ${(props) => props.theme.background};
		background: ${(props) => props.theme.text};
	}
	@media only screen and (max-width: 500px) {
		font-size: 14px;
	}
`

export const PlaybackControl = styled(VCREdgeOverlayTextStyle)`
	text-align: right;
`

export const Playback = styled(VCREdgeOverlayTextStyle)``
