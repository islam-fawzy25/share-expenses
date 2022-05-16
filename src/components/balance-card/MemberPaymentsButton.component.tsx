import React, { useState } from "react";
interface Props{
    title:string
    children:JSX.Element[]
}
export default function MemberPaymentsButton({ title, children }:Props) {
    const [memberPaymentsListVariant, setMemberPaymentsListVariant] = useState(false)
    return (
        <>
            <button
                onClick={() => { setMemberPaymentsListVariant(!memberPaymentsListVariant) }}
            >
                Check {title} List
            </button>
            {memberPaymentsListVariant && <div>{children}</div>}
        </>
    )
}