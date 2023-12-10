import App from './App'
import {createHashRouter, createBrowserRouter} from 'react-router-dom';
import {SignUp} from './components/SignUp';
import {LogIn} from './components/LogIn';

const Router = createBrowserRouter([{
     path: '/',
     element: <App />,
     children: [
        {
            index: true,
            element: <SignUp />
        },
        {
            path:"/logIn/",
            element: <LogIn />
        }
     ]

}])

export default Router;
