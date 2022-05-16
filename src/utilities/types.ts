export interface MembersDataInterface {
    id: number
    name: string
    expenses: []
    debitPaymentsList: []
    creditPaymentsList: []
    expensesDebit: number
    paymentsDebit: number
    debit: number
    expensesCredit: number
    paymentsCredit: number
    credit: number
    balance: number
}

export interface GroupsDataArray {
    id: number
    name: string
    member: []
}

export interface ExpensesArray {
    id: number
    member: { id: number, name: string }
    date: string
    value: number
    notes: string
}

export interface Payment {
    id: number
    amount: number
    from: string
    to: string
    date: string
}