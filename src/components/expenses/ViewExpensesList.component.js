import React from "react";

export default function ViewExpensesList({ expensesData }) {
    return (
        <div>
            <div>
                <p>Date:{expensesData.date}</p>
                <p>Value:{expensesData.value} Kr</p>
                <p>Paid for:{expensesData.notes}</p>
                <p>{expensesData.member.name} is paid</p>
            </div>
        </div>
    )
}
