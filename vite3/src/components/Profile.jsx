import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  
    const {user} = useContext(UserContext)
  
    return user? (
    <div>
            <h1>{user.userName}</h1>
            <h1>{user.Password}</h1>

    </div>
  ):<div>No Data Found</div>
}

export default Profile
