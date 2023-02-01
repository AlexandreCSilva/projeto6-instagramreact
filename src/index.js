import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import Corpo from './components/Corpo';

import "./css/reset.css";
import "./css/style.css";

ReactDOM.render(
    <div>
        <Menu/> 
        <Corpo/>
    </div>,
    document.querySelector(".root")
);