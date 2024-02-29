import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import Dashboard from "./pages/dashboard.tsx";
const router = createBrowserRouter(
    [
        {
            path:"/",
            element : <Login />
        },

        {
            path:"/dashboard",
            element : <Dashboard />
        },




    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App