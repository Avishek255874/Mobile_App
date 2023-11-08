import React from 'react'
import Layout from '../Components/Layout/Layout'
import Profile_header from '../Components/Header/Profile_header'
import Item_Add from '../Components/Footer/Item_Add'
import Menu_footer from '../Components/Footer/Menu_footer'

const DateCalander = () => {
  return (
                    <Layout footer={<Menu_footer/>} header={<Profile_header />} >
                    <h1>statices</h1>
                  </Layout>
  )
 

}

export default DateCalander