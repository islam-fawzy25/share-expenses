import React from "react";

export default function MemberExpensesCard({
    memberData
}) {
    return (
        <div>
            <h1>Member card</h1>
            <h3>{memberData.name}</h3>
            <p>Total Paid: {memberData.totalPaid} Kr </p>
            <p>Need {memberData.debit} Kr from each member</p>
        </div>
    )
}