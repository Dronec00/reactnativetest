import { Kosmetolog, Okylist, Psyholog, Dantist, Preparaty, Terapevt, Rentgen, Dietolog } from "../svgs"
import { Menu } from "./stylesSells"

const Nav = () => {
    return  <Menu>
                <Kosmetolog />
                <Okylist />
                <Psyholog />
                <Dantist />
                <Preparaty />
                <Terapevt />
                <Rentgen />
                <Dietolog />
            </Menu>
             
}

export default Nav