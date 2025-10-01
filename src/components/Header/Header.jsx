import logo from '/logo-name.svg'
import { useEffect, useState } from 'react'
import {styled} from 'styled-components'
// import './Header.css'

const HeadetContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

const name = "CloCK"

function Header() {
const [now, setNow] = useState(new Date())

useEffect(() => {
  const interval = setInterval(() => setNow(new Date()), 1000)
  return () => {
    clearInterval(interval)
  }
}, [])
  
return (
    <HeadetContainer>
      <img src={logo} alt={name} />
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeadetContainer>
  )
}

export default Header