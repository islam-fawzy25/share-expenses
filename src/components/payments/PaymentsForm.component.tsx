import React, { ChangeEvent } from "react";
interface Props {
    addNewPayment: () => void
    setPaymentAmount: (paymentAmount: number) => void
    paymentAmount: number
    children: JSX.Element
}
export default function PaymentForm({
    addNewPayment,
    setPaymentAmount,
    paymentAmount,
    children
}: Props) {
    return (
        <div>
            <h3>Add Payments</h3>
            <form
                onSubmit={addNewPayment}
            >
                <input type="number"
                    placeholder=" payment amount"
                    value={paymentAmount}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPaymentAmount(Number(e.target.value))
                    }}
                    min="1"
                    required
                />
                <div>
                    {children}
                </div>
                <button
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}