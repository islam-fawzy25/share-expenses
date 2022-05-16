import React from "react";
interface Props {
    title: string
    children: JSX.Element[]
}
export default function PaymentMembersListContainer({ title, children }: Props) {
    return (
        <>
            <p>{title}</p>
            <div>{children}</div>
        </>
    )
}