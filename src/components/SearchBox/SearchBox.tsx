import { useEffect, useState } from 'react'
import useDebounce from '../../utils/useDebounce'
import styles from './SearchBox.module.scss'
import { setUser } from '../../store/slices/userSlices'
import { useDispatch } from 'react-redux'
import { TbSearch } from 'react-icons/tb'

export default function SearchBox() {
    const [search, setSearch] = useState<string>('')
    const dispatch = useDispatch()
    const debouncedSearch = useDebounce(search)
    const handleSearch = (value: string) => {
        setSearch(value)
    }

    const handleOnEnter = (e:any) => {
        if (e.key === "Enter") {
            dispatch(setUser({
                userQuery: search
            }))
        }
    }

    const handleSetSearch = () => {
        dispatch(setUser({
            userQuery: debouncedSearch
        }))
    }

    useEffect(() => {
        if(debouncedSearch === ''){
            dispatch(setUser({
                userQuery: ''
            }))
        }
    }, [debouncedSearch])
    return (
        <div className={styles.search_box}>
            <input className={styles.search} type="text" value={search} onChange={(e) => handleSearch(e.target.value)} placeholder="Search by name, email or role" onKeyDown={handleOnEnter} />
            <button className={`${styles.search_btn} search-icon`} onClick={handleSetSearch}>
                <TbSearch />
                Search
            </button>
        </div>
    )
}
