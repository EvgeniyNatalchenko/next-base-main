import React from 'react'
import { useSelector } from 'react-redux';


export default function Footer() {

    const currentuser = useSelector(store => store.currentuser)

    return (
        <div>
            Footer comp   current user id={currentuser}
        </div>
    )
}
