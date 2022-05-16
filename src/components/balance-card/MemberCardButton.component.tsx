import React from "react";

interface Props {
    joinExpensesWithMember: () => void
    memberExpensesCardVariant: boolean
    setMemberExpensesCardVariant: (memberExpensesCardVariant: boolean) => void
    joinPaymentsOnMemebrsdebit:()=>void
    joinPaymentsOnMemebrsCredit:()=>void
}
export default function MemberCardButton({
    joinExpensesWithMember,
    memberExpensesCardVariant,
    setMemberExpensesCardVariant,
    joinPaymentsOnMemebrsdebit,
    joinPaymentsOnMemebrsCredit
}:Props) {
    return (
        <>
            <h1>Members cards</h1>
            <button onClick={() => {
                joinExpensesWithMember()
                joinPaymentsOnMemebrsCredit()
                joinPaymentsOnMemebrsdebit()
                setMemberExpensesCardVariant(!memberExpensesCardVariant)
            }}
            >
                Show members blance
            </button>
        </>
    )
}