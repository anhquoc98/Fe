import React from 'react';
import Header from "./component/Header";
import Home from "./component/Home";

interface AppProps {
    title: string;
}

const App: React.FC<AppProps> = ({title}) => {
    return (
        <>
            <Header/>
            <Home/>
        </>
    );
};

export default App;
