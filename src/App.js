//Aplicacion usando HOOK react V6 por fabio
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
const router= createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement: <Error/>,
    children:[
      {
        path:'contacts/:id',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path:"/about",
    element: <About></About>

  },
  {
    path:"/contact",
    element:<Contact></Contact>
  }

]);
function App() {
  return (
    <div >
      <RouterProvider router={router}/>

    </div>

  );
}

export default App;
