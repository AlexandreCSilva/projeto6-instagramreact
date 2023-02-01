import meowed from './assets/img/meowed.svg';
import gatotelefone from './assets/img/gato-telefone.svg';
import respondeai from './assets/img/respondeai.svg';
import barked from './assets/img/barked.svg';
import dog from './assets/img/dog.svg';
import adorableanimals from './assets/img/adorable_animals.svg';

export default function Posts() {
    const users = [[meowed, 'meowed', gatotelefone, respondeai, 'respondeai', '101.523'], [barked, 'barked', dog, adorableanimals, 'adorable_animals', '99.159']];
    
    function curtir (e){
        let v = false;
        let like;
        if (!e.target){
            like = e;
        } else {
            like = e.target.parentNode;
        }
        
        if (!like.classList.contains('liked')){
            v = !v;
        }
        like.classList.toggle('liked');
        
        like.children[0].name = v ? 'heart' : 'heart-outline';
    }

    const curtirPost = e => {
        // salva na constante like o botão do post que foi curtido
        const like = e.target.parentNode.parentNode.children[2].children[0].children[0].children[0];

        if (!like.classList.contains('liked')){
            e.target.parentNode.classList.add('gostei');
            setTimeout(function(){e.target.parentNode.classList.remove('gostei')}, 2000);
            curtir(like)
        }
    }
    
    return (
        <div className="posts">
            {users.map(user => {
            ;
            return (
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={user[0]} />
                        {user[1]}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo" onClick={curtirPost}>
                    <img src={user[2]} />
                    <ion-icon name="heart"></ion-icon>
                </div>

                <div className="fundo">
                    <div className="acoes">
                    <div>
                        <span className='like' onClick={curtir}>
                            <ion-icon name="heart-outline"></ion-icon>
                        </span>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div className="curtidas">
                    <img src={user[3]} />
                    <div className="texto">
                        Curtido por <strong>{user[4]}</strong> e <strong>outras {user[5]} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>)})}

        </div>
    );
}