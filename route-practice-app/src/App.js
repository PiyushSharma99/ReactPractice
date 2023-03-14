
import Home from "./pages/Home";
import Product from "./pages/Product";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children:[
      {path:'/', element: <Home/>},
      {path:'/product', element: <Product/>},
    ],

  },
  
])


function App() {
  return <RouterProvider router= {router}/>
  // return (
  //   <>
  //     <Home />
  //     <div className="App">Hello Piyush</div>
  //   </>
  // );
}

export default App;
