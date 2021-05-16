
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

