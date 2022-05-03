import React from "react";


interface Props {
    newMemberName: string
    setNewMemberName: (newMemberName: string) => void
    handlerOnClick: () => void
    groupIsActive: boolean
}
export default function CreateMember({
    newMemberName,
    setNewMemberName,
    handlerOnClick,
    groupIsActive
}: Props) {
    return (
        <div style={{ display: !groupIsActive ? "block" : "none" }}>
            <h1>Create your account</h1>
            <input
                type="text"
                value={newMemberName || " "}
                onChange={(e) => { setNewMemberName(e.target.value) }}
                placeholder="Enter your name"
            />
            <button
                disabled={!newMemberName}
                onClick={handlerOnClick}
            >
                Add
            </button>
        </div>
    )
}