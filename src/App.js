import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './ErrorPage';
import Home from "./routes/home/home.component";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
