import React from "react";
import { Interface } from "readline";
interface Props {
    joinExpensesWithMember: () => void
    memberExpensesCardVariant: boolean
    setMemberExpensesCardVariant: (memberExpensesCardVariant: boolean) => void
}
export default function MemberExpensesCardButton({
    joinExpensesWithMember,
    memberExpensesCardVariant,
    setMemberExpensesCardVariant,
}: Props
) {
    return (
        <>
            <button onClick={() => {
                joinExpensesWithMember()
                setMemberExpensesCardVariant(!memberExpensesCardVariant)
            }}
            >
                Show members expenses
            </button>
        </>
    )
}