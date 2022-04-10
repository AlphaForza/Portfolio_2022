import './App.css';
import AboutMe from './components/About/AboutMe';
import Contact from './components/Contact/Contact';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Header />
			<AboutMe />
			<Services />
			<Featured />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
