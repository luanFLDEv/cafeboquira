import { GiCoffeeCup } from 'react-icons/gi'
import { GiEcology } from 'react-icons/gi'
import { LuMedal } from 'react-icons/lu'
import { MdOutlineTerrain } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
export default function Diferenciais() {
	return (
		<section className="py-16 bg-[#f5f5f5] pt-24" id="diferenciais">
			<div className="container mx-auto px-4">
				<p className="text-lg text-center text-[#412121] mb-3">
					POR QUE NOS ECOLHER
				</p>
				<h2 className="text-4xl font-bold text-center font-[Playfair_Display]">
					Nossos Diferenciais
				</h2>
				<div className="w-23 h-0.5 bg-[#EDC7A2] mx-auto mt-2 mb-4"></div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="group bg-white p-6 rounded-xl  shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#6B3E26]">
						<div className="flex flex-col items-center mb-4">
							<GiCoffeeCup className="text-4xl mb-2 hover:bg-red-400 group-hover:text-white " />
							<h3 className="text-xl font-semibold mb-3 group-hover:text-white text-center">
								Café Artesanal
							</h3>
							<p className="text-gray-600 group-hover:text-gray-200">
								Produzimos café artesanal de alta qualidade, cultivado com
								paixão e cuidado, proporcionando uma experiência única aos
								amantes de café.
							</p>
						</div>
					</div>
					<div className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#6B3E26]">
						<div className="flex flex-col items-center mb-4">
							<GiEcology className="text-4xl mb-2 hover:bg-green-400 group-hover:text-white" />
							<h3 className="text-xl font-semibold mb-3 group-hover:text-white text-center">
								Sustentabilidade
							</h3>
							<p className="text-gray-600 group-hover:text-gray-200">
								Valorizamos práticas agrícolas responsáveis e respeitamos o meio
								ambiente. Nossos grãos são cultivados em fazendas sustentáveis,
								onde garantimos que cada etapa do processo seja ecologicamente
								correta.
							</p>
						</div>
					</div>
					<div className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#6B3E26]">
						<div className="flex flex-col items-center mb-4">
							<LuMedal className="text-4xl mb-2 hover:bg-blue-400 group-hover:text-white" />
							<h3 className="text-xl font-semibold mb-3 group-hover:text-white text-center">
								Qualidade Premium
							</h3>
							<p className="text-gray-600 group-hover:text-gray-200">
								Investimos em tecnologia e treinamento para garantir que cada
								xícara seja perfeita, proporcionando uma experiência única aos
								amantes de café.
							</p>
						</div>
					</div>
					<div className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#6B3E26]">
						<div className="flex flex-col items-center mb-4">
							<MdOutlineTerrain className="text-4xl mb-2 hover:bg-green-400 group-hover:text-white" />
							<h3 className="text-xl font-semibold mb-3 group-hover:text-white text-center">
								Origem Controlada
							</h3>
							<p className="text-gray-600 group-hover:text-gray-200">
								Desde a colheita até o preparo, cada etapa do nosso processo é
								cuidadosamente planejada para garantir a qualidade e o sabor
								excepcionais do nosso café.
							</p>
						</div>
					</div>
					<div className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#6B3E26]">
						<div className="flex flex-col items-center mb-4">
							<LuMedal className="text-4xl mb-2 hover:bg-blue-400 group-hover:text-white" />
							<h3 className="text-xl font-semibold mb-3 group-hover:text-white text-center">
								Produçãoo cuidadosa
							</h3>
							<p className="text-gray-600 group-hover:text-gray-200">
								Produção cuidadosa que mantém o sabor natural do café,
								proporcionando uma experiência única aos amantes de café.
							</p>
						</div>
					</div>
					<div className="group bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#6B3E26]">
						<div className="flex flex-col items-center mb-4">
							<BsStars className="text-4xl mb-2 hover:bg-yellow-400 group-hover:text-white" />
							<h3 className="text-xl font-semibold mb-3 group-hover:text-white text-center">
								Qualidade Premium
							</h3>
							<p className="text-gray-600 group-hover:text-gray-200">
								Investimos em tecnologia e treinamento para garantir que cada
								xícara seja perfeita, proporcionando uma experiência única aos
								amantes de café.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
