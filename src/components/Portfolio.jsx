import React from 'react'
import Header from './Header'
import GeneralFooter from './GeneralFooter'

const Portfolio = () => {
  return (
    <>
        <Header/>

        <main class="main">

            <div class="project">
                <div class="data">
                    <h2 class="name-project"><a href="project.html">AGRIMANAGER</a></h2>
                    <p class="type-work"></p>
                </div>
                <div class="technologies">
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
            </div>

            <div class="project">
                
                <div class="data">
                    <h2 class="name-project">INFRAPEDIA</h2>
                    <p class="type-work"></p>
                </div>
                
                <div class="technologies">
                    <ul>
                        <li>VUE</li>
                        <li>SASS</li>
                        <li>VUEX</li>
                        <li>VANILLA JAVASCRIPT</li>
                        <li>TAILWINDCSS</li>
                    </ul>
                </div>
            </div>

            <div class="project">
                <div class="data">
                    <h2 class="name-project">KOMERCIA</h2>
                    <p class="type-work">freelance</p>
                </div>
                <div class="technologies">
                    <ul>
                        <li>VUE</li>
                        <li>VUEX</li>
                        <li>VANILLA JAVASCRIPT</li>
                        <li>TAILWINDCSS</li>
                    </ul>
                </div>
            </div>

            <div class="project">
                <div class="data">
                    <h2 class="name-project">SERACERA</h2>
                    <p class="type-work">freelance</p>
                </div>
                <div class="technologies">
                    <ul>
                        <li>WORDPRESS</li>
                        <li>ECOMMERCE</li>
                    </ul>
                </div>
            </div>

            <div class="project">
                <div class="data">
                    <h2 class="name-project">AGRIMANAGER V2.0</h2>
                    <p class="type-work"></p>
                </div>
                <div class="technologies">
                    <ul>
                        <li>REDUX</li>
                        <li>REACT</li>
                        <li>MICROFRONTENDS WITH WEBPACK</li>
                        <li>VANILLA JAVASCRIPT</li>
                        <li>TAILWINDCSS</li>
                    </ul>
                </div>
            </div>
            
    
        </main>

        <GeneralFooter/>
    </>
  )
}

export default Portfolio