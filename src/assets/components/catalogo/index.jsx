import CafeBoquira from '../image/cafeBoquira.png'
export default function Catalogo() {
	return (
		<section className="py-16 bg-[#412121]">
			<div className="container mx-auto px-4">
				<p className="text-md text-center font-semibold text-[#8B4513] tracking-wider mb-2">
					NOSSOS CAFÉS
				</p>
				<h2 className="text-4xl font-bold text-center mb-1 text-[#EDC7A2] font-[Playfair_Display] ">
					Catálogo de Produtos
				</h2>
				<div className="w-23 h-0.5 bg-[#EDC7A2] mx-auto mt-2 mb-2"></div>
				<p className="text-lg text-center text-[#EDC7A2] mb-9">
					Descubra a linha completa do Café Boquira
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
					{/* CARD PRODUTO */}
					<div className="bg-white rounded-xl shadow-lg p-6 max-w-sm">
						<img
							src={CafeBoquira}
							alt="Café Boquira"
							className="w-full h-64 object-contain mb-4"
						/>

						<h3 className="text-2xl font-semibold mb-2 text-[#412121] text-center">
							Café Boquira Tradicional
						</h3>

						<p className="text-gray-700 mb-4 ">
							Café 100% natural com sabor intenso e aroma marcante.
						</p>
						<a
							href="https://wa.me/557799290546?text=Olá,%20vim%20pelo%20site%20e%20quero%20pedir%20o%20Café%20Boquira"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="bg-[#EDC7A2] font-bold text-[#412121] py-2 px-4 w-full rounded hover:bg-[#EDC7A2]/90 transition duration-300 cursor-pointer">
								Pedir no WhatsApp
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
