import React from 'react'
import c from '../styles/InformationAboutCompanyList.module.scss'

export default function InformationAboutCompanyList() {
    return (

        <>
            <div className={c.information_list}>
                <h3>Information about company</h3>
                <ul>
                    <li>About us</li>
                    <li>Vacansies</li>
                    <li>Contacts</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className={c.information_list}>
                <h3>Help</h3>
                <ul>
                    <li>Credits</li>
                    <li>Garanties</li>
                    <li>Service Senter</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className={c.information_list}>
                <h3>More information</h3>
                <ul>
                    <li>About us</li>
                    <li>Vacansies</li>
                    <li>Contacts</li>
                    <li>Conditions</li>
                </ul>
            </div>
        </>
    )
}
