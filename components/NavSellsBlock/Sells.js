import { Text } from "react-native"
import { SellsContainer, SellsText, Slider, HeadingSlide,
            CircleSlide, DoctorImgSlide, PaginationSlider,
            PaginationCircleSlider, PaginationCircleSliderCurrent } from "./stylesSells"
import { COLORS } from "../../colors"
const doctorImage = require("../../assets/images/doctor.png")

const Sells = () => {
    return <SellsContainer>
        <SellsText>Скидки</SellsText>
        <Slider>
            <HeadingSlide>
            <Text style={{color: '#fff', fontFamily: "RuberoidBold", fontSize: 22, lineHeight: 30}}>Скидка </Text> 
            <Text style={{color: COLORS.yellow, fontFamily: "RuberoidBold", fontSize: 22, lineHeight: 30 }}>25%</Text>
            </HeadingSlide>
            <Text style={{color: '#fff', fontFamily: "RuberoidRegular", fontSize: 12, lineHeight: 16}}>На готовую подписку</Text>
            <Text style={{color: '#fff', fontFamily: "RuberoidRegular", fontSize: 12, lineHeight: 16}}>сервиса LoDo</Text>
            <CircleSlide />
            <DoctorImgSlide source={doctorImage} />
            <PaginationSlider>
                <PaginationCircleSlider />
                <PaginationCircleSliderCurrent />
                <PaginationCircleSlider />
                <PaginationCircleSlider />
            </PaginationSlider>
        </Slider>
        
    </SellsContainer>
}

export default Sells