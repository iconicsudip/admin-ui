// import { useGetMembers } from '../../api/user.hooks'
import styles from './UserTable.module.scss'
import { useEffect, useState } from "react"
import { toCapitalize } from "../../utils/functions"
import { T_Member } from '../../types/user'
import { TbCheck, TbEdit, TbTrash } from 'react-icons/tb'
import Pagination from '../Pagination'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const allMemebers = [
    {
        "id": "1",
        "name": "Aaron Miles",
        "email": "aaron@mailinator.com",
        "role": "member"
    },
    {
        "id": "2",
        "name": "Aishwarya Naik",
        "email": "aishwarya@mailinator.com",
        "role": "member"
    },
    {
        "id": "3",
        "name": "Arvind Kumar",
        "email": "arvind@mailinator.com",
        "role": "admin"
    },
    {
        "id": "4",
        "name": "Caterina Binotto",
        "email": "caterina@mailinator.com",
        "role": "member"
    },
    {
        "id": "5",
        "name": "Chetan Kumar",
        "email": "chetan@mailinator.com",
        "role": "member"
    },
    {
        "id": "6",
        "name": "Jim McClain",
        "email": "jim@mailinator.com",
        "role": "member"
    },
    {
        "id": "7",
        "name": "Mahaveer Singh",
        "email": "mahaveer@mailinator.com",
        "role": "member"
    },
    {
        "id": "8",
        "name": "Rahul Jain",
        "email": "rahul@mailinator.com",
        "role": "admin"
    },
    {
        "id": "9",
        "name": "Rizan Khan",
        "email": "rizan@mailinator.com",
        "role": "member"
    },
    {
        "id": "10",
        "name": "Sarah Potter",
        "email": "sarah@mailinator.com",
        "role": "admin"
    },
    {
        "id": "11",
        "name": "Keshav Muddaiah",
        "email": "keshav@mailinator.com",
        "role": "member"
    },
    {
        "id": "12",
        "name": "Nita Ramesh",
        "email": "nita@mailinator.com",
        "role": "member"
    },
    {
        "id": "13",
        "name": "Julia Hunstman",
        "email": "julia@mailinator.com",
        "role": "member"
    },
    {
        "id": "14",
        "name": "Juan Alonso",
        "email": "juan@mailinator.com",
        "role": "admin"
    },
    {
        "id": "15",
        "name": "Gabriel Montoya",
        "email": "gabriel@mailinator.com",
        "role": "admin"
    },
    {
        "id": "16",
        "name": "Beatrice Iglesias",
        "email": "beatrice@mailinator.com",
        "role": "admin"
    },
    {
        "id": "17",
        "name": "Sarah Symms",
        "email": "sarah.s@mailinator.com",
        "role": "admin"
    },
    {
        "id": "18",
        "name": "Patrick Pinheiro",
        "email": "patrick@mailinator.com",
        "role": "admin"
    },
    {
        "id": "19",
        "name": "Anand Patel",
        "email": "anand@mailinator.com",
        "role": "member"
    },
    {
        "id": "20",
        "name": "Kishore Kalburgi",
        "email": "kishore@mailinator.com",
        "role": "member"
    },
    {
        "id": "21",
        "name": "Rebecca Norris",
        "email": "rebecca@mailinator.com",
        "role": "member"
    },
    {
        "id": "22",
        "name": "Özgür Başak",
        "email": "ozgur@mailinator.com",
        "role": "member"
    },
    {
        "id": "23",
        "name": "Robin Andersen",
        "email": "robin@mailinator.com",
        "role": "member"
    },
    {
        "id": "24",
        "name": "Nandini Kumar",
        "email": "nandini@mailinator.com",
        "role": "member"
    },
    {
        "id": "25",
        "name": "Nikita Smith",
        "email": "nikita@mailinator.com",
        "role": "member"
    },
    {
        "id": "26",
        "name": "Colton Doe",
        "email": "colton@mailinator.com",
        "role": "member"
    },
    {
        "id": "27",
        "name": "Alain Senna",
        "email": "alain@mailinator.com",
        "role": "member"
    },
    {
        "id": "28",
        "name": "Ashwin Jain",
        "email": "ashwin@mailinator.com",
        "role": "member"
    },
    {
        "id": "29",
        "name": "Seema Bhatt",
        "email": "seema@mailinator.com",
        "role": "member"
    },
    {
        "id": "30",
        "name": "Kayla Scarpinski",
        "email": "kayla@mailinator.com",
        "role": "member"
    },
    {
        "id": "31",
        "name": "Ajay Ghosh",
        "email": "ajay@mailinator.com",
        "role": "member"
    },
    {
        "id": "32",
        "name": "Chris Lindberg",
        "email": "chris@mailinator.com",
        "role": "member"
    },
    {
        "id": "33",
        "name": "Christina Mourujärvi",
        "email": "christina@mailinator.com",
        "role": "member"
    },
    {
        "id": "34",
        "name": "Mikhail Bill",
        "email": "mikhail@mailinator.com",
        "role": "member"
    },
    {
        "id": "35",
        "name": "Eino Göregen",
        "email": "eino@mailinator.com",
        "role": "member"
    },
    {
        "id": "36",
        "name": "Zachariah Johansson",
        "email": "zacharaiah@mailinator.com",
        "role": "member"
    },
    {
        "id": "37",
        "name": "Aimaan Mohammed",
        "email": "aimaan@mailinator.com",
        "role": "admin"
    },
    {
        "id": "38",
        "name": "Aika Tsunoda",
        "email": "aika@mailinator.com",
        "role": "member"
    },
    {
        "id": "39",
        "name": "Kimiko Minamoto",
        "email": "kimiko@mailinator.com",
        "role": "member"
    },
    {
        "id": "40",
        "name": "Alyona Baginskaite",
        "email": "alyona@mailinator.com",
        "role": "member"
    },
    {
        "id": "41",
        "name": "Anirudh Mukherjee",
        "email": "anirudh@mailinator.com",
        "role": "member"
    },
    {
        "id": "42",
        "name": "Alyona Gov",
        "email": "alyonagov@mailinator.com",
        "role": "member"
    },
    {
        "id": "43",
        "name": "Robin Singh",
        "email": "robin@mailinator.com",
        "role": "member"
    },
    {
        "id": "44",
        "name": "Vijay Vasudevan",
        "email": "vijayv@mailinator.com",
        "role": "member"
    },
    {
        "id": "45",
        "name": "Steve Smith",
        "email": "steve@mailinator.com",
        "role": "member"
    },
    {
        "id": "46",
        "name": "Anirudh Banerjee",
        "email": "anirudhb@mailinator.com",
        "role": "member"
    }
]

export default function UserTable() {
    // const members = useGetMembers()
    const totalRow = 10
    const [newData, setNewData] = useState<T_Member[]>(allMemebers)
    const [members, setMembers] = useState<T_Member[]>()
    const [page, setPage] = useState<number>(1)
    const [headers, setHeaders] = useState<string[]>([])
    const [editableRow, setEditableRow] = useState<string | null>(null)
    const [selectedRows, setSelectedRows] = useState<{ id: string, checked: boolean }[]>([])
    const searchedText = useSelector((state: RootState) => state.userDetails)
    const [allChecked, setAllChecked] = useState<boolean>(false)

    const handleEffectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedRows(members?.map(member => {
                return {
                    id: member?.id,
                    checked: true
                }
            }) || [])
        } else {
            setSelectedRows(members?.map(member => {
                return {
                    id: member.id,
                    checked: false
                }
            }) || [])
        }

        setAllChecked(!allChecked)
    }

    const handleEffectOne = (checked: boolean, rowId: string) => {
        setSelectedRows((selectedRows) => {
            const newSelectedRows = selectedRows.map(row => {
                if (row.id === rowId) {
                    return {
                        id: row.id,
                        checked: checked
                    }
                }
                return row
            })
            return newSelectedRows
        })
        setAllChecked(true)
    }

    const handleToggleEditableRow = (rowId: string | null) => {
        setEditableRow(rowId)
    }

    const setPaginatedData = (allMemebers: T_Member[]) => {
        const start = (page - 1) * (totalRow)
        const end = page * (totalRow)
        setMembers(allMemebers.slice(start, end))
    }

    const handleChangeContent = (value: string, rowName: string, rowId: string) => {
        setNewData(newData.map(member => {
            if (member.id === rowId) {
                return {
                    ...member,
                    [rowName]: value
                }
            }
            return member
        }))
    }
    const handleDelete = (rowId: string) => {
        const newMembers = newData?.filter(member => member.id !== rowId)
        setNewData(newMembers!)
    }

    const handleSelectedRows = () => {
        const newMembers = newData?.filter(member => {
            const selected = selectedRows.filter(row => row.id === member.id)
            return !selected[0]?.checked ?? false
        })
        setNewData(newMembers!)

        setAllChecked(false)
    }

    useEffect(() => {
        const headers = Object.keys(allMemebers[allMemebers.length - 1])
        setHeaders(headers)

    }, [])

    useEffect(() => {
        setPaginatedData(newData)
        setSelectedRows(newData.map(member => {
            return {
                id: member.id,
                checked: false
            }
        }))
    }, [page, newData])

    useEffect(() => {
        const filteredData = allMemebers.filter(member => {
            return member.name.toLowerCase().includes(searchedText.userQuery.toLowerCase()) || member.email.toLowerCase().includes(searchedText.userQuery.toLowerCase()) || member.role.toLowerCase().includes(searchedText.userQuery.toLowerCase())
        })
        setNewData(filteredData)
    }, [searchedText])
    return (
        <div className={styles.user_table}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th><input className='checkbox' type="checkbox" checked={selectedRows.filter(row => {
                            return row.checked === true
                        }).length === members?.length && members.length !== 0 ? true : false} onChange={handleEffectAll} /></th>
                        {headers.map((header: string) => {
                            if (header === 'id') return null
                            return <th key={header}>{toCapitalize(header)}</th>
                        })}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members?.length === 0 && <tr><td colSpan={headers.length + 2}>No data found</td></tr>}
                    {members?.map((member: T_Member) => {
                        const isRowSelected = selectedRows.filter(row => {
                            return row.id === member.id
                        })
                        return (
                            <tr key={member.id} className={isRowSelected[0]?.checked ? styles.selected_row : ''}>
                                <td><input className='checkbox' type="checkbox" checked={isRowSelected[0]?.checked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    handleEffectOne(e.target.checked, member.id)
                                }} /></td>
                                {headers.map((header: string) => {
                                    const content = header === 'role' ? toCapitalize(member[header as keyof T_Member]) : member[header as keyof T_Member]
                                    if (header === 'id') return null
                                    return (
                                        <td key={header}>
                                            {editableRow === null ? content : editableRow === member.id ? header === 'role' ?
                                                <select name="" id="" value={member[header as keyof T_Member]} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChangeContent(e.target.value, header, member.id)}>
                                                    <option value="admin">Admin</option>
                                                    <option value="member">Member</option>
                                                </select>
                                                : <input type="text" value={content} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeContent(e.target.value, header, member.id)} /> : content}
                                        </td>
                                    )
                                })}
                                <td className={styles.actions}>
                                    {editableRow === member.id ?
                                        <button className='save' onClick={() => handleToggleEditableRow(null)}>
                                            <TbCheck />
                                        </button>
                                        : <>
                                            <button className='edit' onClick={() => handleToggleEditableRow(member.id)}>
                                                <TbEdit />
                                            </button>
                                            <button className='delete' onClick={() => handleDelete(member.id)}>
                                                <TbTrash />
                                            </button>
                                        </>}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className={styles.footer}>
                <button onClick={handleSelectedRows} className={`delete-selected ${selectedRows.filter(row => row.checked === true).length === 0 || members?.length === 0 ? styles.disable : ''}`}
                >Delete Selected</button>
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={Math.ceil(newData.length / totalRow)}
                />
            </div>
        </div>
    )
}
