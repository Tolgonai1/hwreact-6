import './App.css';
import Slider from "./Slider";

const images = [
    {url: 'https://cdn.ceoworld.biz/wp-content/uploads/2019/12/Paris-France.jpg'},
    {url: 'https://thebettervacation.com/wp-content/uploads/2022/03/Dubai-Miracle-Garden.jpg'},
    {url: 'https://carthage.group/wp-content/uploads/2020/10/66552.jpg'},
    {url: 'https://myflyingleap.com/wp-content/uploads/2021/04/US_2.jpg'},
    {url: 'https://thesologlobetrotter.com/wp-content/uploads/2021/01/Untitled-design-48-1200x675.jpg'}
]

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Slider images={images}/>
        </div>
    </div>
  );
}

export default App;
