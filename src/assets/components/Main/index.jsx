import Mainfoto from '../image/cafeboquiramain.png'

export default function Main() {
	return (
		<main className="relative w-full h-screen">
			{/* imagem de fundo */}
			<img
				src={Mainfoto}
				alt="Café Boquira"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* overlay escuro */}
			<div className="absolute inset-0 bg-black/40"></div>

			{/* conteúdo */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
				<h3 className="text-3xl mb-4 font-extralight tracking-[0.2em]">
					CAFÉ · 100% NATURAL
				</h3>
				<h2 className="text-7xl  mb-4 font-[Playfair_Display]">Café Boquira</h2>
				<p className="text-3xl max-w-xl mb-6 font-[Playfair_Display]">
					Tradição e qualidade em cada xícara. Do grão selecionado ao prazer de
					saborear nosso café.
				</p>
				<div className="flex gap-4">
					<a
						href="https://wa.me/557799290546?text=Olá,%20vim%20pelo%20site%20e%20quero%20pedir%20o%20Café%20Boquira"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#EDC7A2] text-[#412121] py-3 px-6 rounded hover:bg-[#653614] hover:text-white transition duration-750"
					>
						Pedir Agora
					</a>
					<a
						href="#"
						className="border border-white py-3 px-6 rounded hover:border-[#653614] hover:text-[#653614] transition duration-500"
					>
						Ver Catálogo
					</a>
				</div>
			</div>
		</main>
	)
}
