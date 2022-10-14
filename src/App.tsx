/* ----- TERMINAL ------
 * 1º npm create vite@latest
 * 2º npm install
 * 3º npm run dev (executa o programa)
 * 4º npm install -D tailwindcss postcss autoprefixer
 * 5º npx tailwindcss init -p (-p cria o cria tambem o arquivo de configuração do postcss)
 * 6º npx sb init --builder @storybook/builder-vite --use-npm
 * 7º npm run storybook (executa o storybook)
 * 8º npm install --save clsx
 */

import "./styles/global.css";

export function App() {
  // classes de estilização importadas do tailwind
  return (
    <>
      <h1 className="font-bold text-2xl text-violet-500">Hello World!</h1>
      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
    </>
  );
}
