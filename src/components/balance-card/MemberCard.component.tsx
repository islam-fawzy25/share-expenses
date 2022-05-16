import React from "react";
import { MembersDataInterface } from "../../utilities/types";
interface Props{
    memberData:MembersDataInterface
     debitList:[]
     creditList:[]
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
            <p>Total debit = {memberData.debit} Kr </p>
            <hr></hr>
            <p>Credit Expenses  = {memberData.expensesCredit} Kr </p>
            <p>Credit Payments  = {memberData.paymentsCredit} Kr </p>
            <div>{creditList}</div>
            <p>Total credit = {memberData.credit} Kr </p>
            <hr></hr>
            <p>Your balance = {memberData.balance} Kr</p>
        </div>
    )
}