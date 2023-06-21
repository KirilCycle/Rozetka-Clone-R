import React from 'react'
import c from './style/Error.module.scss'

type ErrorMessage = string

interface ErrorComponentProps {
    errorMessage: ErrorMessage
}

export default function ErrorComponent({errorMessage}:ErrorComponentProps) {
    return (
        <div className={c.error_container}>
            <h2>Ups something went wrong ({errorMessage})</h2>
            <span className="material-symbols-outlined">
                chat_error
            </span>
        </div>
    )
}
