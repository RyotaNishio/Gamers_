import {Header} from "./header";
import React, {ReactNode} from "react";

export const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <head>
                <title>Gamers</title>
            </head>
            <body className="min-h-screen bg-cyan-100">
                <header>
                    <Header/>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </>
    )
}