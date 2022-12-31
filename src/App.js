import React from "react";
import { Provider } from "./AppContext";
import Header from "./Components/Header";
import ThreeCardDraw from "./Components/ThreeCardDraw";
import YesNoAnswer from "./Components/YesNoAnswer";
import YesNoQuestion from "./Components/YesNoQuestion";
import ExploreFortyServants from "./ExploreFortyServants";
import FortyModal from "./Components/Modal";
import "./SCSS/main.scss";

// Renderizando componentes no app principal

const App = () => {

    return (
        <Provider>
            <Header />
            <ThreeCardDraw />
            <YesNoQuestion />
            <YesNoAnswer />
            <ExploreFortyServants />
            <FortyModal />
        </Provider>
        
    )
};


export default App;