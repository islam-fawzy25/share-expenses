import React, { useState } from "react";
import { MembersDataInterface } from "../../utilities/types";

interface Props {
    member: MembersDataInterface
    membersList: MembersDataInterface[]
}

export default function ListOfMembers( { member, membersList }:Props) {
    const [variant, setVariant] = useState(false)
    return (
        <li>
            {member.name}
            <button
                disabled={variant}
                onClick={() => {
                    membersList.push(member)
                    setVariant(true)
                }}>
                Add
            </button>
        </li >
    )
}