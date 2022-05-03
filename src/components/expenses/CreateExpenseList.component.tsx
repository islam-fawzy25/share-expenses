import React from "react";
import { MembersDataInterface } from "../../interfaces";

interface WhoIsPaid{
     id: number,
      name: string 
}
interface Props {
    participatedMember: MembersDataInterface[]
    expenseValue: number
    setExpenseValue: (expenseValue: number) => void
    setWhoIsPaid: ({})=>void
    groupIsActive: boolean
    expenseType: string
    setExpenseType: (expenseType: string) => void
    sumExpensesValue: number
    submit: () => void
}

export default function CreateExpenseList({
    participatedMember,
    expenseValue, setExpenseValue,
    setWhoIsPaid,
    groupIsActive,
    expenseType,
    setExpenseType,
    sumExpensesValue,
    submit
}: Props
) {

    return (
        <div>
            <h1>Save your expenses here:</h1>
            <form
                onSubmit={submit}
            >
                <label >Price:</label>
                <input type="number"
                    value={expenseValue}
                    onChange={(e) => { setExpenseValue(Number(e.target.value)) }}
                    required
                />
                <br />
                <label>Add notes:</label>
                <input type="text"
                    value={expenseType}
                    onChange={(e) => { setExpenseType(e.target.value) }}
                    required
                />
                <div>
                    <p>Add who is paid:</p>
                    {groupIsActive && participatedMember.map(member =>
                        <div key={member.id}>
                            <li>
                                {member.name}
                                <button type="submit"
                                    disabled={expenseType.length === 0 || expenseValue === 0}
                                    onClick={() => {
                                        setWhoIsPaid({ id: member.id, name: member.name })
                                    }}>
                                    Add
                                </button>
                            </li>
                        </div>
                    )}
                </div>
                <h2> Expenses history list:</h2>
            </form>
            <>
                Total expenses = {sumExpensesValue}
            </>
        </div>
    )
}