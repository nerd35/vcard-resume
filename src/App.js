import React from 'react';
import Background from "./components/Background";
import Preloader from "./components/Preloader";
import Container from "./components/Container";

function App() {
    return <div>
        <Preloader/>
        <Background/>
        <Container/>
    </div>
}

export default App;
