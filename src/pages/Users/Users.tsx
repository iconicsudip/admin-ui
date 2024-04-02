import styles from './Users.module.scss'
import SearchBox from '../../components/SearchBox'
import UserTable from '../../components/UserTable'

export default function Users() {
  return (
    <div className={styles.users}>
        <SearchBox />
        <UserTable />
    </div>
  )
}
