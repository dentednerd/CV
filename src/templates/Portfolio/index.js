import React, { useState } from 'react'
import portfolioData from '../../data/portfolioData'
import Project from './Project'
import Menu from './Menu'

const PortfolioTemplate = () => {
  const [currentProject, setCurrentProject] = useState('ladbible')
  const categories = ['LBG', 'NC', 'JI']

  return (
    <>
      <Project project={portfolioData[currentProject]} />
      <div className="menuwrapper">
        {categories.map(cat => (
          <Menu category={cat} setCurrentProject={setCurrentProject} />
        ))}
      </div>
    </>
  )
}

export default PortfolioTemplate
