import { Menu } from "../Menu/Menu";
import { useTheme } from "@/context/usetheme";

export function Cabecalho() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg min-h-[180px]">
      <div className="max-w-screen-xl mx-auto px-8 h-[180px] flex items-center justify-center">
        <div className="flex items-center" style={{ gap: '280px' }}>
          {/* Logo e Título */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-2 border-yellow-300">
              <span className="text-2xl font-extrabold text-yellow-300">SF</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Sistema <span className="text-yellow-300 drop-shadow-lg">Flow</span>
            </h1>
          </div>
          
          {/* Menu */}
          <div className="flex">
            <Menu />
          </div>

          {/* Botão de tema */}
          <button
            onClick={toggleTheme}
            className="p-3 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors text-2xl border-2 border-white border-opacity-30 hover:border-opacity-50"
            aria-label="Alternar tema"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
