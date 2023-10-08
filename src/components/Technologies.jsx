import React from 'react'
import stylesTechnologies from '../css/Technologies.module.css'

const Technologies = () => {
  return (
    <>
        <div className={stylesTechnologies.technologies}>
            <ul>
                <li>VUE</li>
                <li>NUXT</li>
                <li>REDUX</li>
                <li>SASS</li>
                <li>TYPESCRIPT</li>
                <li>REACT</li>
                <li>VANILLA JAVASCRIPT</li>
            </ul>
        </div>
    </>
  )
}

export default Technologies