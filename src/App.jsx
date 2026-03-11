import './App.css'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import About from './assets/components/about'
import Catalogo from './assets/components/catalogo'
import Diferenciais from './assets/components/diferenciasi'
import Depoimentos from './assets/components/depoimentos/index,'
import Experimente from './assets/components/expreimente'
import Footer from './assets/components/footer'
function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<About />
			<Catalogo />
			<Diferenciais />
			{/* <Depoimentos /> */}
			<Experimente />
			<Footer />
		</div>
	)
}

export default App
