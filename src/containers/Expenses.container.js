import React, { useState } from "react";
import CreateExpenseList from "../components/expenses/CreateExpenseList.component";
import ViewExpensesList from "../components/expenses/ViewExpensesList.component";
import ExpensesCard from "../components/expenses/MemberExpensesCard.component";
import MemberExpensesCardButton from "../components/expenses/MemberExpensesCardButton.component";


export default function ExpensesContainer(
    {
        participatedMember,
        expenseValue,
        setExpenseValue,
        expensesData,
        setExpenses,
        whoIsPaid,
        setWhoIsPaid,
        groupIsActive,
        expenseType,
        setExpenseType,
        sumExpensesValue,
        numberOfMembers,
        setNumberOfMembers,
    }) {
    const [memberExpensesCardVariant, setMemberExpensesCardVariant] = useState(false)


    const joinExpensesWithMember = () => {
        participatedMember.forEach(element => {
            const findMemberExpenses = expensesData.filter(expenseObj => {
                return expenseObj.member.id === element.id
            })
            const expensesValuesArray = findMemberExpenses.map(obj => { return obj.value })
            const totalPaidCalculation = expensesValuesArray.reduce((a, b) => a + b, 0)
            element.debit = totalPaidCalculation - (totalPaidCalculation / numberOfMembers)
            element.totalPaid = totalPaidCalculation
            return element.expenses = findMemberExpenses
        });
    }

    const submit = async (e) => {
        e.preventDefault()
        setExpenses((prev) => {
            return [...prev, {
                id: Date.now(),
                member: { id: whoIsPaid.id, name: whoIsPaid.name },
                date: new Date().toLocaleDateString(),
                value: expenseValue,
                notes: expenseType,
            }]
        })
        setMemberExpensesCardVariant(false)
        setExpenseValue("")
        setExpenseType("")
    }

    return (
        <>
            <CreateExpenseList
                participatedMember={participatedMember}
                expenseValue={expenseValue}
                setExpenseValue={setExpenseValue}
                expensesData={expensesData}
                setExpenses={setExpenses}
                whoIsPaid={whoIsPaid}
                setWhoIsPaid={setWhoIsPaid}
                groupIsActive={groupIsActive}
                expenseType={expenseType}
                setExpenseType={setExpenseType}
                numberOfMembers={numberOfMembers}
                setNumberOfMembers={setNumberOfMembers}
                sumExpensesValue={sumExpensesValue}
                submit={submit}
            />
            {expensesData && expensesData.map((expData) => (
                <div key={expData.id}>
                    <ViewExpensesList
                        expensesData={expData}
                    />
                </div>
            ))
            }
            <div>
                <div>
                    <MemberExpensesCardButton
                        joinExpensesWithMember={joinExpensesWithMember}
                        memberExpensesCardVariant={memberExpensesCardVariant}
                        setMemberExpensesCardVariant={setMemberExpensesCardVariant}
                    />
                </div>
                <div>
                    {memberExpensesCardVariant && participatedMember.map((member) => (
                        <div key={member.id}>
                            <ExpensesCard
                                memberData={member}
                                memberExpensesCardVariant={memberExpensesCardVariant}
                                setMemberExpensesCardVariant={setMemberExpensesCardVariant}
                            />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}