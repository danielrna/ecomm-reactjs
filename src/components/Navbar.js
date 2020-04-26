import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { ButtonContainer } from './Button'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { ProductConsumer } from '../context'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
             </Link>
          </li>
        </ul>

        <Link className="ml-auto" to="/cart">
          <ButtonContainer>
            <div className="rowC">
              <div>
                <div className="cartCount">
                  <ProductConsumer>
                    {(value) => value.cart.length}
                  </ProductConsumer>
                </div>
                <ShoppingCartOutlined />
              </div>
              <div className="cartText">Panier</div>
            </div>
          </ButtonContainer>
        </Link>

      </nav>
    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`