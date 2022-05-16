import React, { ChangeEvent } from "react";

interface Props {
    newGroupName: string
    groupIsActive: boolean
    children: JSX.Element[],
    createNewGroup: (e: { preventDefault: () => void; }) => void
    newGroupNameHanler: (e: ChangeEvent<HTMLInputElement>) => void
    changeBoolean: () => void
}
export default function CreateGroup({
    newGroupName,
    createNewGroup,
    groupIsActive,
    children,
    newGroupNameHanler,
    changeBoolean
}: Props
) {

    return (
        <div style={{ display: !groupIsActive ? "block" : "none" }}>
            <form
                onSubmit={createNewGroup}>
                <div >
                    <h1>Add group members</h1>
                    <ul>
                        {children}
                    </ul>
                </div>
                <div>
                    <p>Create new group</p>
                    <input
                        type="text"
                        value={newGroupName}
                        onChange={newGroupNameHanler}
                        placeholder="Add a group name"
                    />
                    <button
                        onClick={changeBoolean}
                        type="submit"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}