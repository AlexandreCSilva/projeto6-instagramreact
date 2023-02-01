import Stories from './Stories';
import Posts from './Posts';
import User from './User';
import Sugestoes from './Sugestoes';
import MenuMobile from './MenuMobile';

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories/>
                <Posts/>
            </div>
            <div className="sidebar">
                <User/>
                <Sugestoes/>
            </div>
            <MenuMobile/>
        </div>
    );
}
