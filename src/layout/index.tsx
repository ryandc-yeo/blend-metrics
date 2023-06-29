import { ReactNode } from "react";


interface ILayoutProps {
    children: ReactNode
}

export function Layout(props: ILayoutProps) {
    const { children } = props

    return (
        <div className="w-full h-full grid grid-cols-[70px,_1fr]">

            <main>
                {children}
            </main>
        </div>
    )
}