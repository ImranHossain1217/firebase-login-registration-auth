import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import Order from "./components/Order";
import Register from "./components/Register";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Order></Order>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
