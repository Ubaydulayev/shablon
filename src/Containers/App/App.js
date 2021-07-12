import PageOne from '../Pages/PageOne/PageOne';
import PageTwo from '../Pages/PageTwo/PageTwo';
import PageTree from '../Pages/PageTree/PageThree';
import PageFour from '../Pages/PageFour/PageFour';
import PageFive from '../Pages/PageFive/PageFive';
import PageSix from "../Pages/PageSix/PageSix"
import PageSeven from '../Pages/PageSeven/PageSeven';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <PageOne />
      <PageTwo />
      <PageTree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
    </div>
  );
}

export default App;
