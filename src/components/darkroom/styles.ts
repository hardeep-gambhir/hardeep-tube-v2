import { grain } from "@components/grain"
import styled, { keyframes } from "styled-components"
import { ContentContainer } from "@components/index/styles"
import { Canvas as ThreeCanvas } from "@react-three/fiber"

export const Canvas = styled(ThreeCanvas)`
	background: clear;
	max-height: 300px;
	width: 100%;
`

export const Container = styled(ContentContainer)`
	padding-bottom: 20px;
`
