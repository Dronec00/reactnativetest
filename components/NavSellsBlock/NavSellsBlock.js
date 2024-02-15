import Nav from "./Nav"
import Sells from "./Sells"
import { NavSells, WhatYouNeed } from "./stylesSells"


const NavSellsBlock = () => {
    return <NavSells>
        <WhatYouNeed>Что вам нужно?</WhatYouNeed>
        <Nav />
        <Sells />
    </NavSells>
}

export default NavSellsBlock