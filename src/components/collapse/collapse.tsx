import { useState, type ReactNode } from 'react'

type CollapseProps = {
    children: ReactNode
}

export function Collapse({ children }: CollapseProps) {
    const [open, setOpen] = useState<boolean>(false)

    console.log("I am inside Collapse")

    return (
        <div>
            <button onClick={() => setOpen(prev => !prev)} style={{
                rotate: open
                    ? '180deg'
                    : '0deg'
            }}>
                ^
            </button>
            {open &&
                children
            }
        </div>
    )
}
