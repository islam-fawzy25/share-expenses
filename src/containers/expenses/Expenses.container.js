import React, { useEffect, useState } from "react";
import "./expenses.css"
import CreateExpenseList from "../../components/expenses/CreateExpenseList.component";
import ViewExpensesList from "../../components/expenses/ViewExpensesList.component";
import MemberCard from "../../components/balance-card/MemberCard.component";
import MemberCardButton from "../../components/balance-card/MemberCardButton.component";
//Payments
import PaymentForm from "../../components/payments/PaymentsForm.component";
import PaymentMembersList from "../../components/payments/PaymentMembersList.component";
import PaymentMembersListContainer from "../../components/payments/PaymentMembersListContainer";
import PaymentsHistoryList from "../../components/payments/PaymentsHistoryList.component";
//Balance Card
import MemberPaymentsList from "../../components/balance-card/MemberPaymentsList.component";
import MemberPaymentsButton from "../../components/balance-card/MemberPaymentsButton.component";
export default function ExpensesContainer({
        participatedMember,
        expensesData,
        setExpenses,
        groupIsActive,
        sumExpensesValue,
        numberOfMembers,
        setNumberOfMembers,
    }) {
    const [memberExpensesCardVariant, setMemberExpensesCardVariant] = useState(false)
    const [expenseValue, setExpenseValue] = useState(0.00)
    const [whoIsPaid, setWhoIsPaid] = useState({})
    const [expenseType, setExpenseType] = useState("")
    // Payments
    const [payments, setPayments] = useState([])
    const [paymentAmount, setPaymentAmount] = useState(0)
    const [paymentFrom, setPaymentFrom] = useState("")
    const [paymentTo, setPaymentTo] = useState("")
    const [paymentFromMembersList, setPaymentFromMembersList] = useState([])
    const [paymentToMembersList, setPaymentToMembersList] = useState([])
    const [paymentFromVariant, setPaymentFromVariant] = useState(false)
    const [paymentToVariant, setPaymentToVariant] = useState(false)
    useEffect(() => {
        setPaymentFromMembersList(() => {
            if (!paymentTo) { return participatedMember }
            return participatedMember.filter(member => { return member.name !== paymentTo })
        })
        setPaymentToMembersList(() => {
            return participatedMember.filter(member => { return member.name !== paymentFrom })
        })
    }, [paymentFromVariant, paymentToVariant])

    const joinExpensesWithMember = () => {
        participatedMember.forEach((element) => {
            const findMemberExpenses = expensesData.filter(expenseObj => {
                return expenseObj.member.id === element.id
            })
            const expensesValuesArray = findMemberExpenses.map(obj => { return obj.value })
            const totalPaidCalculation = expensesValuesArray.reduce((a, b) => a + b, 0)
            element.expensesDebit = totalPaidCalculation
            element.debit = element.paymentsDebit + element.expensesDebit
            element.expensesCredit = (sumExpensesValue / numberOfMembers) || 0
            element.balance = element.debit - element.credit
            return element.expenses = findMemberExpenses
        });
    }
    const addExpense = (e) => {
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
    const addNewPayment = (e) => {
        e.preventDefault()
        if (paymentFrom.length <= 0 || paymentTo.length <= 0) { return null }
        setPayments((prev) => {
            return [...prev, {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                amount: paymentAmount,
                from: paymentFrom,
                to: paymentTo
            }]
        })
        setPaymentFromVariant(false)
        setPaymentToVariant(false)
        setPaymentFrom("")
        setPaymentTo("")
        setPaymentAmount(0)
        setMemberExpensesCardVariant(false)
    }
    const joinPaymentsOnMemebrsdebit = () => {
        participatedMember.forEach(member => {
            const getDebitforMemeber = payments.filter(payment => { return payment.from === member.name })
            const paymentsAmountsArray = getDebitforMemeber.map(obj => { return obj.amount })
            const sumAmounts = paymentsAmountsArray.reduce((a, b) => a + b, 0)
            member.debitPaymentsList = getDebitforMemeber
            member.paymentsDebit = sumAmounts
            member.debit = (member.expensesDebit + member.paymentsDebit)
            member.balance = member.debit - member.credit
        })
    }
    const joinPaymentsOnMemebrsCredit = () => {
        participatedMember.forEach(member => {
            const getCreditforMemeber = payments.filter(payment => { return payment.to === member.name })
            const paymentsAmountsArray = getCreditforMemeber.map(obj => { return obj.amount })
            const sumAmounts = paymentsAmountsArray.reduce((a, b) => a + b, 0)
            member.creditPaymentsList = getCreditforMemeber
            member.paymentsCredit = sumAmounts
            member.credit = (member.expensesCredit + member.paymentsCredit)
            member.balance = member.debit - member.credit
        })
    }
    return (
        <>
            <div className="member-expenses-container">
                <div>
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
                        submit={addExpense}
                    />
                    {expensesData && expensesData.map((expData) => (
                        <div key={expData.id}>
                            <ViewExpensesList
                                expensesData={expData}
                            />
                        </div>
                    ))
                    }
                </div>
                <div >
                    <div>
                        <MemberCardButton
                            joinExpensesWithMember={joinExpensesWithMember}
                            memberExpensesCardVariant={memberExpensesCardVariant}
                            setMemberExpensesCardVariant={setMemberExpensesCardVariant}
                            joinPaymentsOnMemebrsdebit={joinPaymentsOnMemebrsdebit}
                            joinPaymentsOnMemebrsCredit={joinPaymentsOnMemebrsCredit}
                        />
                    </div>
                    <div>
                        {memberExpensesCardVariant && participatedMember.map((member) => (
                            <div key={member.id}>
                                <MemberCard
                                    memberData={member}
                                    memberExpensesCardVariant={memberExpensesCardVariant}
                                    setMemberExpensesCardVariant={setMemberExpensesCardVariant}
                                    debitList={
                                        <MemberPaymentsButton
                                            title={"debits"}>
                                            <MemberPaymentsList
                                                debitPayments={member.debitPaymentsList}
                                            />
                                        </MemberPaymentsButton>
                                    }
                                    creditList={
                                        <MemberPaymentsButton
                                            title={"credits"}>
                                            <MemberPaymentsList
                                                creditPayments={member.creditPaymentsList}
                                            />
                                        </MemberPaymentsButton>
                                    }
                                />
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div>
                    <PaymentForm
                        participatedMember={participatedMember}
                        addNewPayment={addNewPayment}
                        setPaymentAmount={setPaymentAmount}
                        paymentAmount={paymentAmount}
                        setPaymentFrom={setPaymentFrom}
                        setPaymentTo={setPaymentTo}
                    >
                        <PaymentMembersListContainer
                            title="From:"
                        >
                            {paymentFromMembersList && paymentFromMembersList.map(member => (
                                <ul key={member.id}>
                                    <div>
                                        <PaymentMembersList
                                            member={member}
                                            setOption={setPaymentFrom}
                                            paymentVariant={paymentFromVariant}
                                            setPaymentVariant={setPaymentFromVariant}
                                        />
                                    </div>
                                </ul>
                            ))
                            }
                        </PaymentMembersListContainer >
                        <PaymentMembersListContainer
                            title="To:"
                        >
                            {paymentToMembersList && paymentToMembersList.map(member => (
                                <ul key={member.id}>
                                    <div>
                                        <PaymentMembersList
                                            member={member}
                                            setOption={setPaymentTo}
                                            paymentVariant={paymentToVariant}
                                            setPaymentVariant={setPaymentToVariant}
                                        />
                                    </div>
                                </ul>
                            ))
                            }
                        </PaymentMembersListContainer>
                    </PaymentForm>
                    {payments && payments.map(payment => (
                        <div key={payment.id}>
                            <PaymentsHistoryList payment={payment} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}