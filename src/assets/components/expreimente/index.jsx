import MulherCafe from '../image/mulgertomandocafe.png'

export default function Experimente() {
	return (
		// 		Café Boquira

		// Fundado em 2001, o Café Boquira nasceu com um propósito claro: levar para a mesa das pessoas um café de qualidade, com sabor marcante e aroma que faz a diferença em cada xícara.

		// Desde o início, o trabalho sempre foi guiado pela dedicação e pelo cuidado em cada etapa do processo. A seleção dos grãos, a torra equilibrada e a moagem cuidadosa garantem um café predominantemente Arábica, com sabor intenso e características que agradam quem realmente aprecia um bom café.

		// Ao longo dos anos, o Café Boquira conquistou a confiança dos clientes através da simplicidade, da qualidade constante e do compromisso de entregar um produto que represente tradição e respeito pelo consumidor.

		// Mais do que um café, o Café Boquira representa uma história construída com trabalho, esforço e paixão desde 2001. Cada pacote carrega a essência de uma marca que acredita que um bom café não é apenas uma bebida, mas um momento de prazer, energia e conexão no dia a dia.

		// Café Boquira – Sabor intenso, aroma marcante e uma tradição que começou em 2001.
		<section className="relative py-32">
			{/* imagem de fundo */}
			<img
				src={MulherCafe}
				alt="Mulher segurando xícara de café"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			{/* overlay com cor do site */}
			<div className="absolute inset-0 bg-[#412121]/80"></div>

			{/* conteúdo */}
			<div className="relative container mx-auto px-4 text-center text-white">
				<h2 className="text-4xl  mb-8 font-extralight ">
					EXPERIMENTE O SABOR DO CAFÉ BOQUIRA
				</h2>

				<h2 className="text-5xl font-semibold mb-4 font-[Playfair_Display]">
					Sabor intenso, aroma marcante e uma longa tradição{' '}
				</h2>

				<p className="mb-6 text-xl max-w-3xl mx-auto">
					Nosso café tradicional é feito com grãos selecionados, torrados em
					pequenas quantidades para preservar o sabor e aroma únicos.
				</p>

				<div className="flex gap-4 justify-center">
					<a
						href="https://wa.me/557799290546?text=Olá,%20quero%20pedir%20o%20Café%20Boquira"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="bg-[#EDC7A2] text-black py-3 px-10 rounded hover:opacity-90 cursor-pointer">
							Pedir Agora
						</button>
					</a>
					<a
						href="https://wa.me/557799290546?text=Olá,%20quero%20pedir%20o%20Café%20Boquira"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="border border-[#EDC7A2] text-[#EDC7A2] py-3 px-6 rounded hover:bg-[#EDC7A2] hover:text-black transition duration-300 cursor-pointer">
							Falar no WhatsApp
						</button>
					</a>
				</div>
			</div>
		</section>
	)
}
