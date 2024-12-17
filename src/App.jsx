import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import TraineeReg from "./components/auth/registration/TraineeReg";
import Login from "./components/auth/login/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import "./App.css";

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="trainee" element={<TraineeReg />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
