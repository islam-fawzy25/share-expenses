import React, { ChangeEvent, useState } from "react";
import CreateMember from "../../components/members/CreateMember.component";

// Modify type any
interface Props {
    groupIsActive: boolean
    setMembersData: (arg: any) => void
}

export default function Members({ groupIsActive, setMembersData }: Props
) {
    const [newMemberName, setNewMemberName] = useState("")
    const createNewMember = () => {
        setMembersData((prev: any) => {
            return [...prev, {
                id: Date.now(),
                name: newMemberName,
                expenses: [],
                debitPaymentsList: [],
                creditPaymentsList: [],
                expensesDebit: 0,
                paymentsDebit: 0,
                debit: 0,
                expensesCredit: 0,
                paymentsCredit: 0,
                credit: 0,
                balance: 0,
            }]
        })
        setNewMemberName(" ")
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { setNewMemberName(e.target.value) }

    return (
        <>
            <CreateMember
                newMemberName={newMemberName}
                handleOnClick={createNewMember}
                groupIsActive={groupIsActive}
                handleChange={handleChange}
            />
        </>
    )
}