export default function Depoimentos() {
	return (
		<section className="py-16  bg-[#412121]">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-8">Depoimentos</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white rounded-lg shadow-md p-6">
						<p className="text-gray-700 mb-4">
							"O café Boquira é simplesmente incrível! O sabor é encorpado e o
							aroma é irresistível. Recomendo a todos os amantes de café!"
						</p>
						<p className="text-gray-700 font-semibold">- Maria S.</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6">
						<p className="text-gray-700 mb-4">
							"Desde que comecei a tomar o café Boquira, não consigo mais voltar
							para outras marcas. A qualidade é excepcional e o sabor é único!"
						</p>
						<p className="text-gray-700 font-semibold">- João P.</p>
					</div>
					<div className="bg-white rounded-lg shadow-md p-6">
						<p className="text-gray-700 mb-4">
							"O café Boquira é a melhor escolha para quem busca um café de alta
							qualidade. Cada xícara é uma experiência de sabor e prazer!"
						</p>
						<p className="text-gray-700 font-semibold">- Ana L.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
