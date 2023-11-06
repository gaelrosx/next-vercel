import { FC } from "react"

interface Props {
    children: React.ReactNode | undefined,
}

export const WhiteLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '50px',
        color: 'black'
    }}>
        <h3>Whitte Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
