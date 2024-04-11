import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";

import Work from './Pages/Work/Work.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import ShowCase from './Pages/Showcase/ShowCase.jsx';
import Skills from './Pages/Skills/Skills.jsx';
import Review from './Pages/Testimonials/Review.jsx';
import { Provider } from "react-redux"
import { store } from './Store/store.js';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Work />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="showcase" element={<ShowCase />} />
      <Route path="skills" element={<Skills />} />
      <Route path="testimonials" element={<Review />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>


  </React.StrictMode>,
)
