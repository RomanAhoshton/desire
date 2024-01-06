import { ReactNode } from 'react'
import styles from './index.module.scss'


interface Container {
    children:ReactNode
}

const Container = ({children}:Container) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Container