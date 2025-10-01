import WayToTeach from './WayToTeach'
import { ways } from '../data'

function TeachingSection() {
    return (
    <>
      <section>
        <h3>Наш подход к обучению</h3>
        <ul>
          {ways.map((way, index) => <WayToTeach key={index} {...way}/>)}
        </ul>    
      </section>
    </>
  )
}

export default TeachingSection