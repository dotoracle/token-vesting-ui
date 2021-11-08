import styled from 'styled-components/macro'
import { Container, Button } from 'react-bootstrap'

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${props => props.theme.color.headerBg};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 5px;
  position: relative;
`
export const HeaderContainer = styled(Container)`
  > .row {
    min-height: 80px;
  }
`
export const Logo = styled.img`
  display: none;
  height: auto;

  @media (min-width: 768px) {
    display: block;
  }
`
export const LogoMobile = styled.img`
  display: block;
  height: auto;

  @media (min-width: 768px) {
    display: none;
  }
`
export const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: right;
`
export const ConnectWalletButton = styled(Button)`
  border-radius: 3px;
  transition: all 0.5s ease;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  font-size: 14px;
  width: 180px;

  &.btn {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
  }

  &.btn-primary {
    background-color: ${props => props.theme.color.primary};
    border: 1px solid ${props => props.theme.color.primary};

    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme.color.secondary};
      border: 1px solid ${props => props.theme.color.secondary};
    }

    &:active,
    &:focus {
      box-shadow: 0 0 0 0.25rem ${props => props.theme.color.secondary}42;
    }
  }
`
// Main Menu
export const MainMenuWrapper = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 992px) {
    display: flex;
    margin-right: 3rem;
  }
`
export const MenuLink = styled.a`
  position: relative;
  padding: 0 30px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;

  &:hover {
    text-decoration: none;

    &::after {
      width: calc(100% - 60px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 30px;
    background-color: ${props => props.theme.color.primary};
    width: 0;
    height: 2px;
    transition: all 0.4s ease;
  }
`

// Mobile Menu
export const MobileWrap = styled.div`
  display: flex;
  align-items: center;
`
export const MenuToggleBtn = styled.a`
  color: #fff;
  margin-left: 1rem;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }
`
export const MobileMenuWrapper = styled.ul`
  padding: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${props => props.theme.color.headerBg};

  li {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ffffff26;
  }
  li:first-child {
    border-top: 1px solid #ffffff26;
  }
  li:last-child {
    border-bottom: 0;
  }
`
export const MobileMenuLink = styled.a`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`
