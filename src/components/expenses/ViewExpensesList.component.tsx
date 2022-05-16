import React from "react";
import "./expenses.style.css"
import { ExpensesArray } from "../../utilities/types";
interface Props {
    expensesData: ExpensesArray
}
export default function ViewExpensesList({ expensesData }: Props) {
    return (
        <div className="expenses-history-list">
            <p>Date:{expensesData.date}</p>
            <p>Value:{expensesData.value} Kr</p>
            <p>Paid for:{expensesData.notes}</p>
            <p>{expensesData.member.name} is paid</p>
        </div>
    )
}
