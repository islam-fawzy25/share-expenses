import React from "react";
import {Payment} from "../../utilities/types"
interface Props{
    debitPayments:Payment[]
    creditPayments:Payment[]
}
export default function MemberPaymentsList({ debitPayments, creditPayments }:Props) {
    return (
        <>
            {debitPayments && debitPayments.map(element => (
                <p key={element.id}>
                    <span>{element.amount} Kr.</span>
                    <span>To {element.to} </span>
                    <span>on {element.date}</span>
                </p>
            ))
            }
            {creditPayments && creditPayments.map(element => (
                <p key={element.id}>
                    <span>{element.amount} Kr.</span>
                    <span>From {element.from} </span>
                    <span>on {element.date}</span>
                </p>
            ))
            }
        </>
    )
}