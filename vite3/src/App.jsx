import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
        <div className="flex flex-col items-center mt-10">
          <Login/>
          <Profile/>
        </div>
    </UserContextProvider>
  )
}

export default App
