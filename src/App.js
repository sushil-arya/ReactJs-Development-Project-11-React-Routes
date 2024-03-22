import React from 'react';
import Home from './pages/Home';

//import something from somelocation/somelibrary

//import someNamedImport from someLocation/someLibrary
import { Login } from './pages/Login';

import { Register } from './pages/Register';
import { BrowserRouter as GrandParent, Routes as Parent, Route as Child } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

export default function App() {
    //Every function return something
    return (
            <>  
                <GrandParent>
                    <Parent>
                        <Child path="/" element={<Home />} >

                        </Child>
                        <Child path="/login" element={<Login />} >

                        </Child>
                        <Child path="/register" element={<Register />} >

                        </Child>
                        <Child path="*" element={<PageNotFound />} >

                        </Child>
                    </Parent>
                </GrandParent>
            </>
    );
}
