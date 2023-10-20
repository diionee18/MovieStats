import React from 'react'
import LanguageChart from '../components/Language/LanguageChart'
import './home.css'
import TopBar from '../components/top/TopBar'
import PrimiereChart from '../components/PremiereBar/PremiereBarChart'

export default function Home() {
  return (
    <div className='home-container'>
      <LanguageChart/>
      <PrimiereChart/>
    </div>
  )
}
