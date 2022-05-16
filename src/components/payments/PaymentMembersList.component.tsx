import React from "react";
import { MembersDataInterface } from "../../utilities/types"
interface Props {
    member: MembersDataInterface
    membersList: MembersDataInterface[]
    setOption: (member: string) => void
    paymentVariant: boolean
    setPaymentVariant: (paymentVariant: boolean) => void
}
export default function PaymentMembersList({
    member,
    setOption,
    paymentVariant,
    setPaymentVariant
}: Props) {
    return (
        <>
            <li>{member.name}</li>
            <button
                disabled={paymentVariant}
                onClick={() => {
                    setOption(member.name)
                    setPaymentVariant(true)
                }}
            >
                Add
            </button>
        </>
    )
}