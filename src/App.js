import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import ErrorPage from './ErrorPage';
import Home from "./routes/home/home.component";



const Shop = () => {
  return (
    <div>
      <h1>I am shopping</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'shop',
        element: <Shop/>
      },
    ]
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
