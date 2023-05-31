// import './App.css';
import './App.scss';
function App() {
  return (
    <div className="App">
     <footer>
			<div className='footer-img'>
				<div className='footer-img-icon'>
					<a href="https://ru-ru.facebook.com/"><img src={require('./img-footer/fb.png')} alt="" /></a>
					<a href="https://www.instagram.com/"><img src={require('./img-footer/insta.png')} alt="" /></a>
					<a href="https://twitter.com/?lang=ru"><img src={require('./img-footer/Twitter.png')} alt="" /></a>
					<a href="https://www.linkedin.com/"><img src={require('./img-footer/Linkedin.png')} alt="" /></a>
				</div>
				<div>
					<p><img src={require('./img-footer/Copyright ©2020 All rights reserved.png')} alt="" /></p>
				</div>
				
			</div>
		 </footer>
    </div>
  );
}

export default App;
