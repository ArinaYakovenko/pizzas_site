import React from 'react'
import style from './NotFound.module.scss'

export default function NotFound() {
    return (
        <div className={style.root}>
            <h1>
                <span>😕</span>
                <br />Нічого не знайдено
            </h1>
            <p className={style.description}>На жаль ця сторінка відсутня н нашому інтернет-магазині</p>
        </div>
    )
}
