import React from "react";
import "./payments.style.css"
import {Payment} from "../../utilities/types"
interface Props {
    payment:Payment
}
export default function PaymentsHistoryList({ payment }: Props) {
    return (
        <div className="payments-history-list">
            <p>Amount: {payment.amount}Kr</p>
            <p>From: {payment.from}  </p>
            <p>To: {payment.to} </p>
            <p>Date: {payment.date}</p>
        </div>
    )
}