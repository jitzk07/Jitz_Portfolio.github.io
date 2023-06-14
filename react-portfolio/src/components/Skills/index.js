import { useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Skills = () => {

    const[letterClass] = useState('text-animate')

    return (
        <>

  <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','r','o','j','e','c','t','s']}
              idx={15}
            />

          </h1>

          <h2>
            Food Delivery
          </h2>
          <p>
          The project was created using <b>MERN</b>
          <br/> 
          Use of <b>JSON web token</b> to verify user.<br/>  
          User can <b>add, update, remove</b> items from their cart and can also see their previous orders.
          </p>
          <h2>
            3-D Portfolio
          </h2>
          <p>
          The project was created using <b>React.js</b>.<br/> Use of Advanced Animations
          </p>
          <h2>
            Real Estate Price Prediction
          </h2>
          <p>
          using <b>ML techniques</b>.<br/> Worked on Analyzing and predicting the price using different techniques
          </p>
          </div>
          </div>
        </>

    )

}
export default Skills
