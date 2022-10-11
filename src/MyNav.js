
import './App.css';

function MyNav() {
  return (
    <nav>
    <div className="nav_logo">
      <p>mylogo</p>
    </div>
    <ul className="nav_menu">
      <li>
        <a href="">HTML</a>
      </li>
      <li>
        <a href="">CSS</a>
      </li>
      <li>
        <a href="">JavaScript</a>
      </li>
      <li>
        <a href="">React</a>
      </li>
      <li>
        <a href="">facebook</a>
      </li>
      <li>
        <a href="">instagram</a>
      </li>
    </ul>
    <ul class="nav_icon">
      <li>
        <i class="fa-brands fa-facebook"></i>
      </li>
      <li>
        <i class="fa-brands fa-square-instagram"></i>
      </li>
    </ul>
  </nav>
  );
}

export default MyNav;
