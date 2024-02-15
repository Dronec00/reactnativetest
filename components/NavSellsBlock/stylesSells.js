import { COLORS } from "../../colors";
import styled from "styled-components/native"

// NavSellsBlock

export const NavSells = styled.View`
    width: 100%;
    height: 607px;
    background-color: #fff;
    border-radius: 48px;
    margin-top: 33px;
    padding: 0  7%;
`

export const WhatYouNeed = styled.Text`
    margin-top: 48px;
    font-size: 22px;
    line-height: 30px;
    font-family: "RuberoidBold";
`
// Sells

export const SellsContainer = styled.View`
margin-top: 30px;
`

export const SellsText = styled.Text`
font-size: 22px;
line-height: 30px;
font-family: "RuberoidBold";
`

export const Slider = styled.View`
width: 100%;
height: 165px;
margin-top: 20px;
border-radius: 24px;
background-color: ${COLORS.lightgreen};
overflow: hidden;
padding-left: 28px;
position: relative;
`

export const HeadingSlide = styled.View`
flex-direction: row;
margin-top: 41px;
align-items: center;
font-family: "RuberoidBold";
`

export const CircleSlide = styled.View`
position: absolute;
margin-left: 197px;
width: 170px;
height: 170px;
border-radius: 100%;
background-color: ${COLORS.yellow};
`

export const DoctorImgSlide = styled.Image`
width: 258px;
height: 172px;
position: absolute;
margin-left: 116px;
top: -6px;
`

export const PaginationSlider = styled.View`
    align-self: center;
    flex-direction: row;
    gap: 5px;
    position: absolute;
    bottom: 11px;
`

export const PaginationCircleSlider = styled.View`
width: 10px;
height: 10px;
border-radius: 100%;
background-color: ${COLORS.gray};
`
export const PaginationCircleSliderCurrent = styled.View`
width: 10px;
height: 10px;
border-radius: 100%;
background-color: #fff;
`
// Nav

export const Menu = styled.View`
    margin-top: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`