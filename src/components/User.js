import userFoto from './assets/img/catanacomics.svg';

export default function User() {
    const user = [userFoto, 'catanacomics', 'Catana']
    return (
        <div className="usuario">
            <img src={user[0]} />
            <div className="texto">
              <strong>{user[1]}</strong>
              {user[2]}
            </div>
        </div>
    );
}
