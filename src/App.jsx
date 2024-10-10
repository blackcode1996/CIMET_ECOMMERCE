import './App.css'
import { AllRoutes } from './routes/Allroutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( 
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000} // Toasts will automatically close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <AllRoutes/>
    </>
  )
}

export default App
