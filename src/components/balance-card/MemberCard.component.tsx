import React from "react";
import { MembersDataInterface } from "../../utilities/types";
interface Props{
    memberData:MembersDataInterface
     debitList:JSX.Element[]
     creditList:JSX.Element[]
}
export default function MemberCard({
    memberData, debitList,creditList
}:Props) {
    return (
        <div>
            <h3>{memberData.name}</h3>
            <p>Debit Expenses  = {memberData.expensesDebit} Kr </p>
            <p>Debit Payments  = {memberData.paymentsDebit} Kr </p>
            <div>{debitList}</div>
            <h4>Total debit = {memberData.debit} Kr </h4>
            <hr></hr>
            <p>Credit Expenses  = {memberData.expensesCredit} Kr </p>
            <p>Credit Payments  = {memberData.paymentsCredit} Kr </p>
            <div>{creditList}</div>
            <h4>Total credit = {memberData.credit} Kr </h4>
            <hr></hr>
            <h3>Your balance = {memberData.balance} Kr</h3>
        </div>
    )
}