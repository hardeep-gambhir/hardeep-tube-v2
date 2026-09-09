import styled from "styled-components"

export const ArrowContainer = styled.div`
	place-self: center;
`

export const Menu = styled.div`
	text-transform: uppercase;
	position: fixed;
	height: 100vh;
	display: grid;
	align-content: center;
	@media only screen and (max-width: 900px) {
		display: none;
	}
`

export const MenuItem = styled.div`
	display: grid;
	grid-template-columns: 25px auto;
	color: ${(props) => props.theme.text};
	font-family: VCR;
	letter-spacing: 0.2rem;
`

export const MenuTitleInactive = styled.button`
	border: 0;
	background: transparent;
	text-align: left;
	text-transform: inherit;
	font-size: 1.17em;
	font-weight: bold;
	min-height: 44px;
	cursor: pointer;
	color: ${(props) => props.theme.text};
	font-family: VCR;
	letter-spacing: 0.2rem;
	padding: 5px 6px 6px 8px;
`

export const MenuTitleActive = styled(MenuTitleInactive)`
	background: ${(props) => props.theme.text};
	color: ${(props) => props.theme.background};
`

export const MobileMenu = styled.nav`
	align-content: center;
	background: ${(props) => props.theme.background};
	display: grid;
	place-items: baseline;
	text-transform: uppercase;
	width: 100vw;
	height: 100vh;
	height: 100dvh;
	inset: 0;
	padding: 90px 24px 100px;
	overflow-y: auto;
	position: fixed;
	z-index: 100;
`

export const MobileMenuTitleInactive = styled(MenuTitleInactive)`
	font-size: 7vw;
`

export const MobileMenuTitleActive = styled(MenuTitleActive)`
	font-size: 7vw;
`
