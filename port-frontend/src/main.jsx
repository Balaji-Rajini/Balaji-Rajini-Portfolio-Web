import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  
  <Routes>
        <Route path="/about" element={<About />} />
     
     <Route path="/" element={<App />}></Route>

    </Routes>
    
    </BrowserRouter>



  )
