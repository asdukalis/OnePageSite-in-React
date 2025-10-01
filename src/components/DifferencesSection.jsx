import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'

function DifferencesSection() {
    const [contentType, setContentType] = useState(null)
  
    function handleClick(type){
        setContentType(type) 
    }

  // let tabContent = null
  // if(tabContent) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Нажмите на кнопку</p>
  // }
    return (
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={contentType === 'way'} BtnClick={() => handleClick('way')}>Подход</Button>
          <Button isActive={contentType === 'easy'} BtnClick={() => handleClick('easy')}>Доступность</Button>
          <Button isActive={contentType === 'program'} BtnClick={() => handleClick('program')}>Концентрация</Button>
          
          {/* {!contentType ? <p>Нажмите на кнопку</p> : null}
          {contentType ? <p>{differences[contentType]}</p>: null} */}
          {!contentType && <p>Нажмите на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
          {/* {tabContent} */}
        </section>
    )
}


export default DifferencesSection