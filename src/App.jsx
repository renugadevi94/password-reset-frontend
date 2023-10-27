
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Forgot from './components/Forgot'
import CreateAcc from './components/CreateAcc'
import Reset from './components/Reset'
import Verify from './components/Verify'
import Password from './components/Password'

function App() {
  
  return (
    <div className="app">
      
    <Routes>

             <Route path="/" element={<Signin />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/forgot" element={<Forgot /> } />
             <Route path="/created" element={<CreateAcc />} />
             
             <Route path="/mail" element={<Verify />} /> 
             <Route path="/password" element={<Password/>} /> 
             <Route path="users/reset/:id" element={<Reset />} />
                  
            
          
        
      
      </Routes>
      
      </div>
  )
}

export default App
