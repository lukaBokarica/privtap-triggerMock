import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from "./components/common/Header/Header";

function App() {

    return (
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
