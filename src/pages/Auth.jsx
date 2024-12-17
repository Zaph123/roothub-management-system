import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  )
}

export default Auth
