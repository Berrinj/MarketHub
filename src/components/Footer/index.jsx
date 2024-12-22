import { StyledFooter, StyledFooterContent, StyledFooterText } from "./index.styles";

/**
 * @returns the Footer component with the footer content
 */

function Footer() {
    return <StyledFooter>
        <StyledFooterContent>
        <p>Developed by BerreMarte &#169; 2024 </p>
        <StyledFooterText>A Noroff School Project</StyledFooterText>
        </StyledFooterContent>
        </StyledFooter>
  }

  export default Footer;