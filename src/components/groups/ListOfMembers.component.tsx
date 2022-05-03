import React, { useState } from "react";
import { MembersDataInterface } from "../../interfaces";

interface Props {
    member: MembersDataInterface
    membersList: MembersDataInterface[]
}

export default function ListOfMembers(
    { member, membersList }: Props
) {
    const [variant, setVariant] = useState(false)
    return (
        <li>
            {member.name}
            <button
                disabled={variant}
                onClick={() => {
                    membersList.push({
                        id: member.id, name: member.name,
                        expenses: [],
                        debit: 0,
                        totalPaid: 0
                    })
                    setVariant(true)
                }}>
                Add
            </button>
        </li>
    )
}