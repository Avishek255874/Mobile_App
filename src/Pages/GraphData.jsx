import React from 'react'
import Layout from '../Components/Layout/Layout'
import Menu_footer from '../Components/Footer/Menu_footer'
import Profile_header from '../Components/Header/Profile_header'
import Task_header from '../Components/Header/Task_header'

const GraphData = () => {
  return (
                    <Layout footer={<Menu_footer/>} header={<Task_header />} >
                    <h1>GraphData</h1>
                  </Layout>
  )
}

export default GraphData