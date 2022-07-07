import styles from './headerStyles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContainer__imgLogo} />
      <div className={styles.headerContainer__imgPerson} />
    </header>
  )
}