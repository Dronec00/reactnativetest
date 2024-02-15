import { Text } from "react-native"
import { AttemptsContainer, RectGrey, RectYellow, LineProgress, Pagination } from "./styles"
import { COLORS } from "../colors"

const Attempts = () => {
    return <AttemptsContainer>
        <Text style={{fontFamily: "RuberoidBold", color: COLORS.darkgreen}} >Всего осталось бесплатных попыток</Text>
        <Text style={{fontFamily: "RuberoidBold", color: COLORS.darkgreen}} >для поиска в этом месяце:</Text>
        <LineProgress>
            <RectGrey />
            <RectYellow />
            <Pagination>9/10</Pagination>
        </LineProgress>
    </AttemptsContainer>
}

export default Attempts