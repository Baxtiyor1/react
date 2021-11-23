import Users from "./components/users/users";
import Post from "./components/post/post";
import Update from "./components/update/Update";
import Header from "./components/Header/Header";
import LogIn from './components/Login/Login'

import { Route, Routes } from "react-router";


//SASS
import './App.scss'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={'/'} element={<Users />} />
        <Route path={'/login'} element={<LogIn />} />
        <Route path={'/posts'} element={<Post />} />
        <Route path={'/update'} element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
