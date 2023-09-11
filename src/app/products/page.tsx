
/* Atualiza a página a cada 30 segundos.*/
// export const revalidate = 30

export default async function Home() {
    /* Renderização de forma estática. */
    // const response = await fetch('https://rms-project-yt.github.io/products/data.json')

    /* Reexecuta a requisição a cada 30 segundos. O resto se mantem extático.*/
    const response = await fetch('https://rms-project-yt.github.io/products/data.json', {
        next: {
            revalidate: 30,
        },
    })

    /* Quando quero que o cache seja igual para todos os usuários. */
    /*const response = await fetch('https://rms-project-yt.github.io/products/data.json', {
        // A mesma requisição para todos os usuários. (Igual para todos os usuários)
        cache: 'force-cache'
    })*/

    /* Quando quero que o cache seja diferente para cada usuário. */
    /*const response = await fetch('https://rms-project-yt.github.io/products/data.json', {
        // Não quero armazenar em cache de modo global para todos os usuários.
        // Todos os usuários executarção uma chamada diferente na API

        // SSR - Server side handle
        cache: 'no-store'
    })*/

    const user = await response.json()

    return (
        <div>
            <h1>Produtos</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}