import {UserIcon} from './svgs'
import { Text } from "react-native"
import { HelloContainer, HelloUserText } from "./styles"
import { COLORS } from '../colors'

const HelloUser = () => {
    return <HelloContainer>
        <UserIcon />
        <HelloUserText>
            <Text style={{color: COLORS.black, fontFamily: "RuberoidBold"}}>Приветствую,</Text>
            <Text style={{color: COLORS.darkgreen, fontFamily: "RuberoidBold"}}>ИмяПользователя</Text>
        </HelloUserText>
    </HelloContainer>
}

export default HelloUser