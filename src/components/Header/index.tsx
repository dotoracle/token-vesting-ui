import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  LogoMobile,
  RightColumn,
  ConnectWalletButton,
  MobileWrap,
} from './Styled'
import MainMenu from './MainMenu'
import MobileMenu from './MobileMenu'
import MenuToggle from './MenuToggle'
import LogoPNG from '../../assets/images/logo.png'
import LogoMobilePNG from '../../assets/images/logo-mobile.png'

function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Row className="align-items-center">
          <Col xs={6} md={3}>
            <a href="/">
              <Logo src={LogoPNG} alt="DotOracle" />
              <LogoMobile src={LogoMobilePNG} alt="DotOracle" />
            </a>
          </Col>
          <Col xs={6} md={9}>
            <RightColumn>
              <MainMenu />
              <MobileWrap>
                <ConnectWalletButton variant="primary">Connect Wallet</ConnectWalletButton>
                <MenuToggle openMenuCallback={() => setMobileMenuOpen(!mobileMenuOpen)} />
              </MobileWrap>
            </RightColumn>
          </Col>
        </Row>
      </HeaderContainer>
      <MobileMenu isOpen={mobileMenuOpen} />
    </HeaderWrapper>
  )
}

export default Header
