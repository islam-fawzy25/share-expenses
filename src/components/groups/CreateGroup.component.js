import React, { useState } from "react";
import ListOfMembers from "./ListOfMembers.component";

export default function CreateGroup({
    setGroups,
    newGroupName,
    setNewGroupName,
    participatedMember,
    setParticipatedMember,
    setSearchInput,
    searchInput,
    searchResult,
    setGroupIsActive,
    groupIsActive
}) {

    const createNewGroup = (e) => {
        e.preventDefault()
        setGroups((prev) => {
            return [{
                id: Date.now(), name: newGroupName,
                members: []
            }]
        })
    }
    return (
        <div style={{ display: !groupIsActive ? "block" : "none" }}>
        <form
            onSubmit={createNewGroup}>
            <div >
                <h1>Add group members</h1>
                <input
                    type="text"
                    placeholder="Add a group members"
                    value={searchInput}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <ul>
                    {
                        searchResult && searchResult.map(member => (
                            <div key={member.id}>
                                <ListOfMembers
                                    member={member}
                                    membersList={participatedMember}
                                    setMembersList={setParticipatedMember}
                                />
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div>
                <p>Create new group</p>
                <input
                    type="text"
                    value={newGroupName}
                    onChange={(e) => { setNewGroupName(e.target.value) }}
                    placeholder="Add a group name"
                />
                <button
                onClick={()=>{
                    setGroupIsActive(true)
                }}
                    type="submit"
                >
                    Create
                </button>
            </div>
        </form>
        </div>
    )
}