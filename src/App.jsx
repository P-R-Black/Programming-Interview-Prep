import React, { useState } from 'react';
import './index.css'

import { Stage } from './components/stage/Stage'
import { Footer } from './components/footer/Footer';

const App = () => {

    return (
        <div className="app">
            <Stage
            />
            <hr />
            <Footer/>
        </div>
        
    )

}

export default App;