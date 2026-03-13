import Logo from '../image/logoescura4.png'

export default function Header() {
	return (
		<header className="bg-[#412121] fixed h-20 top-0 w-full z-50" id="inicio">
			<div className="container mx-auto flex items-center h-full justify-between">
				<img src={Logo} alt="Logo do Café Boquira" className="h-16 w-auto" />
				<a
					href="https://wa.me/557799290546?text=Olá,%20quero%20saber%20mais%20sobre%20o%20Café%20Boquira"
					target="_blank"
					rel="noopener noreferrer"
					className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition indes-50"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
						alt="WhatsApp"
						className="w-8 h-8"
					/>
				</a>
				<nav>
					<ul className="flex space-x-10">
						<li>
							<a
								href="#"
								className="text-[#EDC7A2] hover:text-[#653614] transition-colors"
							>
								INICIO
							</a>
						</li>
						<li>
							<a
								href="#sobre"
								className="text-[#EDC7A2] hover:text-[#653614] transition-colors"
							>
								SOBRE
							</a>
						</li>
						<li>
							<a
								href="#catalago"
								className="text-[#EDC7A2] hover:text-[#653614] transition-colors"
							>
								PRODUTOS
							</a>
						</li>
						<li>
							<a
								href="#diferenciais"
								className="text-[#EDC7A2] hover:text-[#653614] transition-colors"
							>
								DIFERENCIAS
							</a>
						</li>
						<li>
							<a
								href="#expreimente"
								className="text-[#EDC7A2] hover:text-[#653614] transition-colors"
							>
								CONTATO
							</a>
						</li>
					</ul>
				</nav>
				<a
					href="https://wa.me/557799290546?text=Olá,%20vim%20pelo%20site%20e%20quero%20pedir%20o%20Café%20Boquira"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-[#EDC7A2] text-[#412121] py-2 px-4 rounded hover:bg-[#653614] transition-colors"
				>
					FALE CONOSCO
				</a>
			</div>
		</header>
	)
}
