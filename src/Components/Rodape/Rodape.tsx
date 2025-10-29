import neoQuimicaImg from '../../assets/img/rodape/Patrocinadores/neo_quimica.png';
import pampersImg from '../../assets/img/rodape/Patrocinadores/pampers.png';
import unileverImg from '../../assets/img/rodape/Patrocinadores/unilever.png';
import niveaImg from '../../assets/img/rodape/Patrocinadores/nivea.png';
import zetaImg from '../../assets/img/rodape/Patrocinadores/zeta.png';
import kenvueImg from '../../assets/img/rodape/Patrocinadores/kenvue.png';
import nestleImg from '../../assets/img/rodape/Patrocinadores/nestle.png';
import borgImg from '../../assets/img/rodape/Patrocinadores/borg.png';
import cimedImg from '../../assets/img/rodape/Patrocinadores/cimed.png';

const patrocinadores = [
  { name: 'Neo Química', url: 'https://www.neoquimica.com.br', img: neoQuimicaImg },
  { name: 'Pampers', url: 'https://www.pampers.com.br', img: pampersImg },
  { name: 'Unilever', url: 'https://www.unilever.com.br', img: unileverImg },
  { name: 'Nivea', url: 'https://www.nivea.com.br', img: niveaImg },
  { name: 'Zeta', url: 'https://www.instagram.com/zetaskin/', img: zetaImg },
  { name: 'Kenvue', url: 'https://www.kenvue.com/pt-br/', img: kenvueImg },
  { name: 'Nestlé', url: 'https://www.nestle.com.br', img: nestleImg },
  { name: 'Borg', url: 'https://borgsaude.com.br/', img: borgImg },
  { name: 'Cimed', url: 'https://cimedremedios.com.br/', img: cimedImg },
];

export function Rodape() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
        <div className="flex flex-col items-center px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white" style={{ marginBottom: '10px' }}>
            Nossos <span className="text-yellow-500">Parceiros</span>
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center justify-items-center w-full" style={{ maxWidth: '1200px' }}>
            {patrocinadores.map((patrocinador, index) => (
              <a
                key={index}
                href={patrocinador.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
              >
                <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 group-hover:border-yellow-400">
                  <img
                    src={patrocinador.img}
                    alt={patrocinador.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="w-full flex justify-center px-4">
          <div className="flex flex-col items-center gap-4">
            {/* Links de navegação */}
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#sobre" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sobre
              </a>
              <a href="#politica" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#contato" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contato
              </a>
            </nav>

            
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">Sistema Flow</span>. Todos os direitos reservados.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
