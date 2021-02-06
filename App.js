import './App.css';
import Flower from './images/flower.jpg';
import Logo from './logo.svg';
import { ReactComponent as ReactLogo } from './logo.svg';
function App() {
  return (
    <div className="App">
      <img src={require('./images/flower.jpg').default} height={200} width={200} />
      <br />
      <img src={Flower} height={200} width={200} /><br />
      <img src={Logo} height={200} width={200} /><br />
      {/* <ReactLogo /> */}
      <img src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2016/04/network-connections.jpg"
        height={200} width={200} />
    </div>
  );
}

export default App;
