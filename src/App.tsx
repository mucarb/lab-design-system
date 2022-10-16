/* ----- TERMINAL ------
 * 1º npm create vite@latest
 * 2º npm install
 * 3º npm run dev (executa o programa)
 * 4º npm install -D tailwindcss postcss autoprefixer
 * 5º npx tailwindcss init -p (-p cria o cria tambem o arquivo de configuração do postcss)
 * 6º npx sb init --builder @storybook/builder-vite --use-npm
 * 7º npm run storybook (executa o storybook)
 * 8º npm install --save clsx
 * $ npm install @radix-ui/react-slot
 * 10º npm install phosphor-react
 * 11º npm install @radix-ui/react-checkbox
 * 12º npm install @storybook/storybook-deployer --save-dev
 * 13º npm install @storybook/addon-a11y
 */

import { Envelope, Lock, LockKey } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  // classes de estilização importadas do tailwind
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="password"
              placeholder="Digite seu email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />

          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possuí conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
