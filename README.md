
## Passo a Passo

Primeiro , cria o projeto:

```bash
npx create next-app nomeDoProjeto
# or
yarn create next-app nomeDoProjeto
```

Depois entra na pasta do projeto:
```bash
cd nomeDoProjeto
```
Abre no VS code:
```bash
code .
```
roda o projeto
```bash
npm run dev
# or
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.


##  Configurando TypeScript

adciona as dependencias necesarias
```bash
yarn add --dev typescript @types/react @types/node
```
cria arquivo tsconfig.json
```bash
touch tsconfig.json
```
roda o comando
```bash
npm run dev
# or
yarn dev
```

mude o strict do tsconfig para true

cria pasta src na raiz do projeto e mova a pasta pages para dentro dela e renomeia o index.js pra index.tsx

##  Configurando o EditorConfig

cria na raiz do projeto o arquivo .editorconfig e dentro dele adicione os seguintes codigos:

root = true

```bash
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

##  Configurando o Eslint

No terminal intale o Eslint:

```bash
npx eslint --init
```

instale os plugins necessarios com:

```bash
yarn add eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
```

instale os plugin do react hooks:

```bash
yarn add eslint-plugin-react-hooks --dev
```
em "plugins" dentro do .eslintrc.json adicione:
  "react-hooks"

Abaixo de "env" crie:
 "settings":{
   "react":{
     "version": "detect"
   }
 },


Adicione algumas regras em "rules":
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn"
ainda em "rules" desative a regra do propTypes:
  "react/props-types": "off"
e tambem desabilite o react-in-jsx-scope:
  "react/react-in-jsx-scope": "off"
desative a boundary-types:
  "@typescript-eslint/explicit-module-boundary-types": "off"
  ficara assim:
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/props-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }


##  Configurando o Prettier com o Eslint

instale o prettier:

```bash
  yarn add --dev --exact prettier
```
crie na raiz do projeto o arquivo .prettierrc e adicione o seguinte codigo:
```bash
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

Para configurar Prettier com o Eslint intale os plugins:

```bash
  yarn add --dev eslint-plugin-prettier
  yarn add --dev eslint-config-prettier
```

Adicione no eslintrc.json:
```bash
{
  "extends": ["plugin:prettier/recomended"]
}
```

##  Configurando Git Hooks com Husky

Primeiro instale o Husky:
```bash
yarn add husky --dev
```
em seguida rode o comando :
```bash
yarn husky install
```
Instala o lint-staged:

```bash
yarn add lint-staged --dev
```
Adicione as regras no package.json logo abaixo dos scripts:
"lint-staged": {
  "src/**/*": [
    "yarn lint --fix"
  ]
},


##  Instalando e Configurando Jest com Typescript

instalar dependencias necessarias:

```bash
yarn add --dev jest @babel/preset-typescript @types/jest
```

No eslintrc faça:

"env":{
  "jest": true,
  "node": true
}

Crie o arquivo jest.config.js na raiz do projeto e escreva os comandos:
```bash
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_mudules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
```

Crie o arquivo .babelrc na raiz do projeto e escreva os comandos:
```bash
{
  "presets": ["next/babel", "@babel/preset-typescript"]
}
```

Crie uma pasta na raiz do projeto chamada .jest e crie um arquivo setup.ts

Va no package.json e defina o comando de teste no scripts:

```bash
{
  "test": "jest"
}
```
##  Instalando e Configurando React Testing Library

instale as dependencias:

```bash
yarn add --dev @testing-library/react @testing-library/jest-dom
```
import no setup.ts:
```bash
import '@testing-library/jest-dom'
```


##  Instalando e Configurando Styled-Components

instale as dependencias:

```bash
yarn add styled-components
yarn add --dev @types/styled-components babel-plugin-styled-components
```
Dentro do .babelrc adicione acima de presets:
```bash
  "plugins":[
    [
      "babel-plugin-styled-components",
      {
        "ssr": false
      }
    ]
  ],
```
Configuracao do styled component :: dentro de pages crie um novo arquivo _document.tsx
# boilerplate-nextjs
# boilerplate-nextjs
