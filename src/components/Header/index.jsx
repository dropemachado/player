import "./styles.css";
import logo from "../../assets/logo.svg"
import perfil from "../../assets/perfil.png"

function Header () {
  return (
    <div className="header__container">
        <img src={logo} alt="logo" />
        <div className="header__welcome">
          <img className="header__welcome-img" src={perfil} alt="foto de perfil" />
          <span className="header__welcome-span">Bem vindo, Pedro!</span>
        </div>
    </div>
  )
}

export default Header;