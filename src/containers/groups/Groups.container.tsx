import React, { ChangeEvent, useState } from "react";
import CreateGroup from "../../components/groups/CreateGroup.component";
import ListOfMembers from "../../components/groups/ListOfMembers.component";
import { MembersDataInterface, GroupsDataArray } from "../../utilities/types"

interface Props {
    participatedMember: MembersDataInterface[]
    groupIsActive: boolean
    setGroupIsActive: (groupIsActive: boolean) => void
    membersData: MembersDataInterface[]
}

export default function Groups({
    participatedMember,
    groupIsActive,
    setGroupIsActive,
    membersData
}: Props
) {
    const [newGroupName, setNewGroupName] = useState("")
    const [groupsData, setGroups] = useState<GroupsDataArray[]>([])
    const createNewGroup = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setGroups((prev: any) => {
            return [...prev, {
                id: Date.now(),
                name: newGroupName,
                members: []
            }]
        })
    }
    const newGroupNameHanler = ((e: ChangeEvent<HTMLInputElement>) => {
        setNewGroupName(e.target.value)
    })

    const changeBoolean = () => {
        setGroupIsActive(true)
    }
    return (
        <>
            <CreateGroup
                changeBoolean={changeBoolean}
                newGroupNameHanler={newGroupNameHanler}
                newGroupName={newGroupName}
                groupIsActive={groupIsActive}
                createNewGroup={createNewGroup}
            >
                {
                    membersData && membersData.map(member => (
                        <div key={member.id}>
                            <ListOfMembers
                                member={member}
                                membersList={participatedMember}
                            />
                        </div>
                    ))
                }
            </CreateGroup>
        </>
    )
}