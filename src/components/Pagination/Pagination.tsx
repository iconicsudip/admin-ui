import React from 'react'
import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight } from 'react-icons/tb';
import styles from './Pagination.module.scss'

interface Props {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

export default function Pagination({ page, setPage, totalPages }: Props) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    return (
        <div className={styles.pagination}>
            <button className={`first-page ${page===1 ? styles.disable:''}`} onClick={() => setPage(1)} disabled={page === 1}>
                <TbChevronsLeft />
            </button>
            <button className={`previous-page ${page === 1 ? styles.disable : ''}`} onClick={() => setPage(page - 1)} disabled={page === 1}>
                <TbChevronLeft />
            </button>
            {pages.map((p) => (
                <button className={`page-numbers ${page === p?styles.active:''}`} key={p} onClick={() => setPage(p)} disabled={page === p}>
                    {p}
                </button>
            ))}
            <button className={`next-page ${page === totalPages ? styles.disable : ''}`} onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                <TbChevronRight />
            </button>
            <button className={`last-page ${page === totalPages ? styles.disable : ''}`} onClick={() => setPage(totalPages)} disabled={page === totalPages}>
                <TbChevronsRight />
            </button>
        </div>
    )
}
