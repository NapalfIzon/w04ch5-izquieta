import logo from "./images/memo.png";
import "./App.scss";

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Logo formulario" />
        <h1>Formulario de registro</h1>
        <img className="header__logo" src={logo} alt="Logo formulario" />
      </header>
      <main className="main">
        <h2 className="main__title">Datos personales</h2>
        <div className="main__data">
          <form className="main__data__form">
            <div className="main__data__form__blockA form-row">
              <div className="main__data__form__blockA__name form-group col-md-6">
                <label for="inputName">Nombre</label>
                <input
                  type="text"
                  className="main__data__form__blockA__name--input form-control"
                  id="inputName"
                  placeholder="Nombre"
                />
              </div>
              <div className="main__data__form__blockA__surname form-group col-md-6">
                <label for="inputSurname">Apellidos</label>
                <input
                  type="text"
                  className="main__data__form__blockA__surname--input form-control"
                  id="inputSurname"
                  placeholder="Apellidos"
                />
              </div>
            </div>
            <div className="main__data__form__blockB form-group">
              <div className="main__data__form__blockB__date form-group col-md-6">
                <label for="inputDate">Fecha de Nacimiento</label>
                <input
                  type="date"
                  className="
                  main__data__form__blockB__date--input
                  form-control form-group
                  col-md-6
                "
                  id="inputDate"
                />
              </div>
              <p className="main__data__form__blockB__age form-group col-md-6">
                39 años
              </p>
            </div>
            <div className="main__data__form__blockC form-group">
              <div className="main__data__form__blockC__email form-group col-md-6">
                <label for="inputEmail">E-mail</label>
                <input
                  type="email"
                  className="main__data__form__blockC__email--input form-control"
                  id="inputEmail"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <button
              type="submit"
              className="main__data__form__summit btn btn-primary"
            >
              Continuar
            </button>
          </form>
        </div>
        <h2 className="main__title">Datos de acceso</h2>
        <div className="main__data">
          <form className="main__data__form">
            <div className="main__data__form__blockA form-row">
              <div className="main__data__form__blockA__username form-group col-md-6">
                <label for="inputUsername">Nombre de usuario</label>
                <input
                  type="text"
                  className="main__data__form__blockA__username--input form-control"
                  id="inputUsername"
                  placeholder="Nombre de usuario"
                />
              </div>
            </div>
            <div className="main__data__form__blockB form-row">
              <div className="main__data__form__blockB__password form-group col-md-6">
                <label for="inputPassword">Contraseña</label>
                <input
                  type="text"
                  className="main__data__form__blockB__password--input form-control"
                  id="inputPassword"
                  placeholder="Contraseña"
                />
              </div>
              <div className="main__data__form__blockB__repassword form-group col-md-6">
                <label for="inputRepassword">Confirma contraseña</label>
                <input
                  type="text"
                  className="main__data__form__blockB__repassword--input form-control"
                  id="inputRepassword"
                  placeholder="Confirma Contraseña"
                />
              </div>
            </div>
            <button
              type="submit"
              className="main__data__form__summit btn btn-primary"
            >
              Continuar
            </button>
          </form>
        </div>
        <h2 className="main__title">Acceso</h2>
        <div className="main__data">
          <form className="main__data__form">
            <div className="main__data__form__blockA form-row">
              <div className="main__data__form__blockA__username form-group col-md-6">
                <label for="inputUsername">Nombre de usuario</label>
                <input
                  type="text"
                  className="main__data__form__blockA__username--input form-control"
                  id="inputUsername"
                  placeholder="Nombre de usuario"
                />
              </div>
            </div>
            <div className="main__data__form__blockB form-row">
              <div className="main__data__form__blockB__password form-group col-md-6">
                <label for="inputPassword">Contraseña</label>
                <input
                  type="text"
                  className="main__data__form__blockB__password--input form-control"
                  id="inputPassword"
                  placeholder="Contraseña"
                />
              </div>
              <div className="main__data__form__blockB__checkbox form-group col-md-6">
                <label for="inputCheckbox">Recuerda contraseña</label>
                <input
                  type="checkbox"
                  className="main__data__form__blockB__checkbox--input form-control"
                  id="inputCheckbox"
                  placeholder="Recuerda Contraseña"
                />
              </div>
            </div>
            <button
              type="submit"
              className="main__data__form__summit btn btn-primary"
            >
              Confirmar
            </button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p className="copyright">
          Designed for <a href="https://isdicoders.com/es">ISDI Coders</a> by
          <a href="https://github.com/NapalfIzon/">Napoleón Izquieta</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
