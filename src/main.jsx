import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import What from './What'
import'./him.css'
import Her from './Her'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <What/> */}
    <Her/>
  </StrictMode>,
)

