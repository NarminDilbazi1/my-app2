import React from 'react'
 import Email from './Email'
  import Name from './Name'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import './style.css'

  
  const Profile = () => {
    return (
      <div className='style'>   
      <PersonalInfo personalInfo="I'm Narmin Dilbazi"/>
      <Name name="Name:Narmin"/>
      <Address address="Address:Baku"/>
      <Email email="E-mail:nermindilbazi@gmail.com"/>
      </div>
    )
  }
  
  export default Profile