import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

const Layout = ({ children, header, footer ,bgColor }) => {
    return (
        <div>
            <Header header={header}  bgColor={bgColor} />
            <Container>{children}</Container>
            <Footer footer={footer}   bgColor={bgColor}/>
        </div>
    )
}

export default Layout