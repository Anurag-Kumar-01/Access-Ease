import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AccessEaseApp from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx' 
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FeaturePage from './pages/FeaturePage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import store from './store/index.js'
import { Provider } from 'react-redux'
import DashboardPage from './pages/DashboardPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <AccessEaseApp/>,
    children: [
      {
        path: '/',
        element : <HomePage/>,

      },{
        path : '/Login',
        element : <LoginPage/>,
      },
      {
        path: '/Signup',
        element: <SignupPage/>
      },{
        path: '/About',
        element: <AboutPage/>
      },{
        path: '/Contact',
        element: <ContactPage/> 
      },{
        path: '/Feature',
        element: <FeaturePage/>
      },{
        path: '/Pricing',
        element: <PricingPage/>
      },{
        path : '/Dashboard',
        element : <DashboardPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
