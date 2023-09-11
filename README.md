This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Sobre o NEXT 2023

- Hidratação parcial - Server side render

- App pasta principal onde fica minhas páginas

- Somente arquivos nomeados com page.tsx serão reconhecidas como páginas.

- () - Para organizar em pastas use parenteses para não aparecerem nas rotas no navegador
Ex: (auth)

- layout.tsx, será tudo o HTML que será repetido na aplicação.

- Caso tenha um layout.tsx em subpastas, será concatenado para formar o layout.

- head.tsx - curtomiza o cabeçalho da aplicação. Pode ter uma head para cada subpasta (Concatena igual layout).

- loading.tsx - Quando estiver ocorrendo um processamento a página será exibida até que apareça o conteúdo.
OBS: Pode-se usar o "skeleton screens".

- notfound.tsx - Para criar um 404.

- error.tsx - Será exibido quando ocorrer um erro na página.

- template.tsx - Igual ao layout porém recarrega a cada troca de página. Usado para quando é necessário matar o componente para criar um novo.

- [] - rotas com parâmetros. EX: pasta products com pasta [id] com arquivo page.tsx.

- Ao fazer uma requisição ele não será apresentado na página final exibida para o usuário. Isso ocorrerá no servidor e depois renderizada para o cliente. Procure saber por "Server-side First".
OBS: Diz ser possível chamar o próprio banco de dados na solicitação fetch.

- revalidate - posso usar para recarregar o componente por inteiro ou carregar apenas uma requisição.
Ex: Global revalidate ou em fetch passar parâmetro next com revalidate.

- Em uma cascata de componentes que fazem requisição o NEXT vai executar todas as requisições simultaneamente primeiro.
  Caso um destes componentes dependa da resposta de outra ele vai identificar automaticamente e executar na ordem e somente depois que a dependência for retornada. Tudo automaticamente.

36:00 