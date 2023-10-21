import React from 'react'
import LanguageChart from '../components/Language/LanguageChart'
import './home.css'
import TopBar from '../components/top/TopBar'
import PrimiereChart from '../components/PremiereBar/PremiereBarChart'
import FilmLengthChart from '../components/FilmLength/FilmLengthChart'
import GenreChart from '../components/genre/GenreChart'

export default function Home() {
  return (
    <div className='home-container'>
      <LanguageChart/>
      <PrimiereChart/>
      <FilmLengthChart/>
      <GenreChart/>
    </div>
  )
}
