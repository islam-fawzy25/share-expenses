import React, { ChangeEvent } from "react";

interface Props {
    newMemberName: string
    handleOnClick: () => void
    groupIsActive: boolean
    handleChange:(e:ChangeEvent<HTMLInputElement>)=> void
}
export default function CreateMember({
    newMemberName,
    handleOnClick,
    groupIsActive,
    handleChange
}: Props) {
    return (
        <div style={{ display: !groupIsActive ? "block" : "none" }}>
            <h1>Create your account</h1>
            <input
                type="text"
                value={newMemberName || " "}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <button
                disabled={!newMemberName}
                onClick={handleOnClick}
            >
                Add
            </button>
        </div>
    )
}