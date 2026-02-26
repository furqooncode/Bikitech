import Home from './Home.jsx'
import { Toaster } from 'react-hot-toast';


export default function App(){
  return(
    <div>
      <Toaster position="top-center" />
      <Home />
    </div>
  )
}