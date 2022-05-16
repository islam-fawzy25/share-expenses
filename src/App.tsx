/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import { MembersDataInterface, ExpensesArray } from './utilities/types';

import Expenses from './containers/expenses/Expenses.container';
import Members from './containers/members/Members.container';
import Groups from './containers/groups/Groups.container';
function App() {
  //Goup
  const [numberOfMembers, setNumberOfMembers] = useState(0)
  const [participatedMember, setParticipatedMember] = useState<MembersDataInterface[]>([])
  const [groupIsActive, setGroupIsActive] = useState(false)
  // Expenses
  const [expensesData, setExpenses] = useState<ExpensesArray[]>([])
  const [sumExpensesValue, setSumExpensesValue] = useState(0)
  //Members
  const [membersData, setMembersData] = useState<MembersDataInterface[]>([])
  useEffect(() => {
    setNumberOfMembers(participatedMember.length)
    setSumExpensesValue(() => {
      const values = expensesData.map(data => data.value)
      const reducer = (accumulator: number, curr: number) => accumulator + curr;
      if (values.length === 0) return 0
      const result = values.reduce(reducer)
      return result
    })
  }, [expensesData, participatedMember])
  console.log(participatedMember);
  return (
    <div className="App">
      <Members
        groupIsActive={groupIsActive}
        setMembersData={setMembersData}
      />
      <Groups
        participatedMember={participatedMember}
        groupIsActive={groupIsActive}
        setGroupIsActive={setGroupIsActive}
        membersData={membersData}
      />
      <Expenses
        participatedMember={participatedMember}
        expensesData={expensesData}
        setExpenses={setExpenses}
        groupIsActive={groupIsActive}
        numberOfMembers={numberOfMembers}
        setNumberOfMembers={setNumberOfMembers}
        sumExpensesValue={sumExpensesValue}
      />
    </div>
  );
}

export default App;
