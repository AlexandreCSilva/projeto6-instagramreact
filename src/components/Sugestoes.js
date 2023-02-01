import badvibesmemes from './assets/img/bad.vibes.memes.svg';
import chibirdart from './assets/img/chibirdart.svg';
import razoesparaacreditar from './assets/img/razoesparaacreditar.svg';
import adorable_animals from './assets/img/adorable_animals.svg';
import smallcutecats from './assets/img/smallcutecats.svg';
import respondeai from './assets/img/respondeai.svg';
import filomoderna from './assets/img/filomoderna.svg';
import memeriagourmet from './assets/img/memeriagourmet.svg';

export default function Sugestoes() {
    const sugestoes = [[badvibesmemes, 'bad.vibes.memes'], [chibirdart, 'chibirdart'], [razoesparaacreditar, 'razoesparaacreditar'], [adorable_animals, 'adorable_animals'], [smallcutecats, 'smallcutecats'], [respondeai, 'respondeai'], [filomoderna, 'filomoderna'], [memeriagourmet, 'memeriagourmet']];
    return (
        <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoes.map(usuarios => {
                return (
                    <div className="sugestao">
                    <div className="usuario">
                      <img src={usuarios[0]} />
                      <div className="texto">
                        <div className="nome">{usuarios[1]}</div>
                        <div className="razao">Segue você</div>
                      </div>
                    </div>
      
                    <div className="seguir">Seguir</div>
                  </div>
            )})}
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}