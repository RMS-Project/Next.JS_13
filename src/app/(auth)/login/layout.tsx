// Layout que complementa o layout para todas as páginas que estiverem dentro da pasta login.
// É um efeito cascata, concatenando os layouts.

import { ReactNode } from "react"

interface LoginLayoutProps {
    children: ReactNode
}

export default function LoginLayout({ children } : LoginLayoutProps) {
    return ( 
        <>
            <h1>Auth</h1>
            {children}
        </>
    )
}