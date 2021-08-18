<nav class="navbar navbar-inverse sub-navbar navbar-fixed-top">
  <div class="container">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#subenlaces">
              <span class="sr-only">Interruptor de Navegación</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">SISCOEM DGETI</a>
      </div>
      <div class="collapse navbar-collapse" id="subenlaces">
          <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                      aria-expanded="false">Compatibilidad <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Crear</a></li>
                      <li><a href="#">Seguimiento</a></li>
                      <li><a href="{{route('registrarDocente.showCreate')}}">Registrar docente</a></li>
                      <li><a href="{{route('actualizarDocente.showRfc')}}">Actualizar docente</a></li>
                  </ul>
              </li>
              <li><a href="#">Tablero</a></li>
              <li><a href="#">Ayuda</a></li>
              <li><a href="#">Cerrar sesión</a></li>
          </ul>
      </div>
  </div>
</nav>