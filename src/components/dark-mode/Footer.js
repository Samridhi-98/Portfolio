import React from "react"

//React Icon
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

//Style Component
import { CompFooter, MobFooter, FooterLink } from "./styles"

class Footer extends React.Component {
    render() {
        return (
            <div>
                <CompFooter>Made with ❤️ by Samriddhi</CompFooter>
                <MobFooter>
                    <FooterLink href="https://github.com/Samridhi-98">
                        <IconContext.Provider value={{ className: "ico1" }}>
                            <FaGithub />
                        </IconContext.Provider>
                    </FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <IconContext.Provider value={{ className: "ico1" }}>
                            <FaLinkedin />
                        </IconContext.Provider>
                    </FooterLink>
                    <FooterLink href="https://twitter.com/Samriddhi981">
                        <IconContext.Provider value={{ className: "ico1" }}>
                            <FaTwitter />
                        </IconContext.Provider>
                    </FooterLink>
                </MobFooter>
            </div>
        )
    }
}

export default Footer;