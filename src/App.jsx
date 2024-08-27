import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalDown } from './components/personal'
import { PersonalDownExtra } from './components/personal'
import { PersonalDownResume } from './components/personal'
import Forms from './components/forms'
import ResumeMain from './components/ResumeMain'
function App() {

  const [name, setName] = useState('Dean Dwiggins12');
  const [jobTitle, setJobTitle] = useState('Fitness Supervisor')  //you have to lift state up, then pass it in as props to child components
  const [email, setEmail] = useState('deandwig@gmail.com')


  return (
    <div className='page'>

      <PersonalDown name={name} setName={setName} jobTitle={jobTitle} setJobTitle={setJobTitle} email={email} setEmail={setEmail} />
      <ResumeMain name={name} jobTitle={jobTitle} />

    </div>
  )

}

export default App
