import { COLORS } from "../colors";
import styled from "styled-components/native"

// Logo

export const Lodo = styled.View`
    width: 69px;
    position: relative;
    align-self: center;
`

export const LodoText = styled.Text`
font-size: 22px;
font-family: "RuberoidBold";
position: absolute;
color: ${COLORS.darkgreen};
right: 0;
bottom: 0;
line-height: 30px;
`

// HelloUser

export const HelloContainer = styled.View`
    align-self: flex-start;
    align-items: center;
    flex-direction: row;
    padding-top: 22px;
    padding-left: 23px;
`

export const HelloUserText = styled.View`
margin-left: 20px;
line-height: 20px;
font-size: 18px;
`
// DottomNavigation
export const Bottom = styled.View`
width: 100%;
height: 70px;
bottom: 0;
position: fixed;
flex-direction: row;
gap: 70px;
align-items: center;
justify-content: center;
`

// Attempts 

export const AttemptsContainer = styled.View`
    align-self: flex-start;
    padding-left: 23px;
    padding-top: 21px;
    line-height: 10px;
`

export const RectGrey = styled.View`
    width: 30px;
    height: 10px;
    border-radius: 5px;
    background-color: ${COLORS.gray};
`

export const RectYellow = styled.View`
    width: 270px;
    height: 10px;
    border-radius: 5px;
    background-color: ${COLORS.yellow};
`

export const LineProgress = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    position: relative;
`

export const Pagination = styled.Text`
    position: absolute;
    right: 0;
    top: 19px;
    font-family: "RuberoidRegular";
`