import './App.scss';
import work_1 from "./Img/work_1.jpg"


function App() {
  return (
    <div className="container">
     <h1>Work</h1>
     <img src={work_1} alt="work_1" />
     <div className="work-title">
      <h2>Designing Dashboards</h2>
      <div className='work-date'></div>
      <p className='work-date-text'>2020</p>
      <p className="work-dashboard" >Dashboard</p>
      <p className="work-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
     </div>
     <div className="vector"></div>
    </div>
  );
}

export default App;
