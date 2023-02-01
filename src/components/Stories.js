import gag from './assets/img/9gag.svg';
import meowed from './assets/img/meowed.svg';
import barked from './assets/img/barked.svg';
import nathanwpylestrangeplanet from './assets/img/nathanwpylestrangeplanet.svg';
import wawawicomics from './assets/img/wawawicomics.svg';
import respondeai from './assets/img/respondeai.svg';
import filomoderna from './assets/img/filomoderna.svg';
import memeriagourmet from './assets/img/memeriagourmet.svg';

export default function Stories() {
    const users = [[gag, '9gag'], [meowed, 'meowed'], [barked, 'barked'], [nathanwpylestrangeplanet, 'nathanwpylestrangeplanet'], [wawawicomics, 'wawawicomics'], [respondeai, 'respondeai'], [filomoderna, 'filomoderna'], [memeriagourmet, 'memeriagourmet']];
    return (
        <div className="stories">
            {users.map(usuarios => {
            return (<div className="story">
                <div className="imagem">
                <img src={usuarios[0]} />
                </div>
                <div className="usuario">
                {usuarios[1]}
                </div>
            </div>)})}

            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
