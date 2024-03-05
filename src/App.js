import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'shop',
        element: <Shop/>
      }
    ]
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
