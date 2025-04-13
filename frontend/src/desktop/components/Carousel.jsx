import '../styles/Carousel.css';
import {
  js,
  py,
  ts,
  html5,
  dotnet,
  css3,
  docker,
  nodedotjs,
  reactSvg,
  mysqlSvg,
  csharp,
} from '../../svg/index';

function Carousel() {
  return (
    <ul className="Carusel">
      <li><img src={ js } alt="JavaScript" /></li>
      <li><img src={ py } alt="Python" /></li>
      <li><img src={ ts } alt="Typescript" /></li>
      <li><img src={ html5 } alt="Html5" /></li>
      <li><img src={ dotnet } alt="Dotnet" /></li>
      <li><img src={ css3 } alt="Css3" /></li>
      <li><img src={ docker } alt="Docker" /></li>
      <li><img src={ nodedotjs } alt="Node.js" /></li>
      <li><img src={ reactSvg } alt="React" /></li>
      <li><img src={ mysqlSvg } alt="MySql" /></li>
      <li><img src={ csharp } alt="CSharp" /></li>
    </ul>
  );
}

export default Carousel;
