export default function Footer() {
	return (
		<footer className="bg-[#000000] py-4  pt-24 text-center text-[#EDC7A2]">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0">
					<h2 className="font-[Playfair_Display]">Café Boquira</h2>
					<p className="text-sm text-gray-400 w-150">
						Produzindo café de qualidade desde 2001, o Café Boquira é uma marca
						que representa tradição, sabor intenso e aroma marcante. Com uma
						história construída com trabalho, esforço e paixão, cada pacote de
						café carrega a essência de uma marca que acredita que um bom café
						não é apenas uma bebida, mas um momento de prazer, energia e conexão
						no dia a dia.
					</p>
				</div>
				<div className="mb-4 md:mb-0 font-[Playfair_Display]">
					Contato:
					<ul className="list-none mt-2 text-left">
						<li>Email: Cafeboquira@gmail.com</li>
						<li>Telefone: (77) 99929-0546</li>
						<li>Endereço: </li>
						<li>Redes Sociais: @cafeboquira</li>
					</ul>
				</div>
				<div className="mb-4 md:mb-0 font-[Playfair_Display]">
					Informações:
					<ul className="list-none mt-2 text-left">
						<li>Política de Privacidade</li>
						<li>Termos de Uso</li>
						<li>FAQ</li>
					</ul>
				</div>
			</div>
			<p className="mt-8">
				&copy; 2026 Café Boquira. Todos os direitos reservados.
			</p>
		</footer>
	)
}
