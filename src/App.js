//import './App.css' // Reusable sonrası kaldırıldı
import './AppContainer.css'
import FormikContainer from './components/building_reusable_formik_control/FormikContainer'
import LoginForm from './components/building_reusable_formik_control/LoginForm'
import RegistrationForm from './components/building_reusable_formik_control/RegistrationForm'
import YoutubeForm from './components/YoutubeForm'

function App() {
  return (
    <div className="App">
      {/* <YoutubeForm /> */}

      {/* <FormikContainer /> */}

      {/* <LoginForm /> */}

      <RegistrationForm />
    </div>
  )
}

export default App
