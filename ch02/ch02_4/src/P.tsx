import type {FC, ReactNode} from 'react'

export type PProps = {
  children?: ReactNode | undefined
}

const P: FC<PProps> = props => {
  return <p {...props} />
}

export default P