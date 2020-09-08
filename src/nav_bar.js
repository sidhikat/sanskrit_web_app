'use strict';



class NavBar extends React.Component {

  render() {

    return(
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">SwatSanskrit</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="./index.html">Home</a>
              <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown">
                Vocabulary</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            <a class="nav-link" href="#">Sanskrit Keyboard</a>
            <a class="nav-link" href="./scripts.html">Game</a>
          </nav>
        </div>
      </header>

    )
  }
}

const domContainer = document.querySelector('#nav_bar_component');
ReactDOM.render(<NavBar />, domContainer);
