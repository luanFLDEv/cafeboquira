import Xicara from '../image/xicaracafe.png'
import SenhorCafe from '../image/sernhorcafe250.png'
export default function About() {
	return (
		<section className="py-16 bg-[#f5f5f5] pt-24" id="sobre">
			<div className="flex items-center gap-12 max-w-7xl mx-auto  flex-col-reverse ">
				<img src={Xicara} alt="Xícara de Café Boquira" className="w-200  " />
				<div className="container mx-auto px-4 ">
					<p className="text-md text-center font-semibold text-[#8B4513] tracking-wider mb-2">
						NOSSA HISTÓRIA
					</p>
					<h2 className="text-4xl font-bold text-center mb-8 font-[Playfair_Display]">
						Sobre o café Boquira
					</h2>
					<div className="max-w-3xl mx-auto text-left text-lg text-[#412121]">
						<p className="size-lg  mb-4">
							Fundado em 2001, o Café Boquira nasceu com um propósito claro:
							levar para a mesa das pessoas um café de qualidade, com sabor
							marcante e aroma que faz a diferença em cada xícara desde o
							início, o trabalho sempre foi guiado pela dedicação e pelo cuidado
							em cada etapa do processo.
						</p>
						<p className="mt-4">
							A seleção dos grãos, a torra equilibrada e a moagem cuidadosa
							garantem um café predominantemente Arábica, com sabor intenso e
							características que agradam quem realmente aprecia um bom café.
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-12 max-w-7xl mx-auto mt-16 flex-col">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-8"></h2>
					<p className="text-lg text-[#412121] mb-4">
						Mais do que um café, o Café Boquira representa uma história
						construída com trabalho, esforço e paixão desde 2001. Cada pacote
						carrega a essência de uma marca que acredita que um bom café não é
						apenas uma bebida, mas um momento de prazer, energia e conexão no
						dia a dia.
					</p>
					<p className="text-lg text-[#412121] mb-4">
						Ao longo dos anos, o Café Boquira conquistou a confiança dos
						clientes através da simplicidade, da qualidade constante e do
						compromisso de entregar um produto que represente tradição e
						respeito pelo consumidor.
					</p>

					<p className="text-lg text-gray-700"></p>
				</div>
				<img src={SenhorCafe} alt="Senhor Café" className="w-200" />
			</div>
		</section>
	)
}
