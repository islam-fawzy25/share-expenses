/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';

import CreateGroup from './components/groups/CreateGroup.component';
import CreateMember from './components/members/CreateMember.component';
import Expenses from './containers/Expenses.container';
function App() {
  //Goup
  const [groupsData, setGroups] = useState([])
  const [numberOfMembers, setNumberOfMembers] = useState(0)
  const [newGroupName, setNewGroupName] = useState("")
  const [participatedMember, setParticipatedMember] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [groupIsActive, setGroupIsActive] = useState(false)
  // Expenses
  const [expensesData, setExpenses] = useState([])
  const [expenseValue, setExpenseValue] = useState(0.00)
  const [whoIsPaid, setWhoIsPaid] = useState([])
  const [expenseType, setExpenseType] = useState("")
  const [sumExpensesValue, setSumExpensesValue] = useState()
 
  //Members
  const [membersData, setMembersData] = useState([])
  const [newMemberName, setNewMemberName] = useState()
  const createNewMember = () => {
    setMembersData((prev) => {
      return [...prev, {
        id: Date.now(),
        name: newMemberName,
        expenses: []
      }]
    })
    setNewMemberName(" ")
  }


  useEffect(() => {

    let filteredResult = membersData.filter(member => { return member.name.toLocaleLowerCase().includes(searchInput) })
    setSearchResult(filteredResult)
    setNumberOfMembers(participatedMember.length)
    setSumExpensesValue(() => {
      const values = expensesData.map(data => data.value)
      const reducer = (accumulator, curr) => accumulator + curr;
      if (values.length === 0) return null
      const result = values.reduce(reducer)
      return result
    }
    )
  }, [newMemberName, expensesData,
    newGroupName, participatedMember,
    setParticipatedMember, searchInput, membersData,
    groupsData, setGroups,
    whoIsPaid, setWhoIsPaid,
 
  ])

  //console.log(membersData);
  //console.log(groupsData);
  console.log(participatedMember);
  console.log(expensesData);


  return (
    <div className="App">
      <CreateMember
        membersData={membersData}
        newMemberName={newMemberName}
        setMembersData={setMembersData}
        setNewMemberName={setNewMemberName}
        handlerOnClick={createNewMember}
        groupIsActive={groupIsActive}
      />
      <CreateGroup
        groupsData={groupsData}
        setGroups={setGroups}
        newGroupName={newGroupName}
        setNewGroupName={setNewGroupName}
        membersData={membersData}
        participatedMember={participatedMember}
        setParticipatedMember={setParticipatedMember}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        groupIsActive={groupIsActive}
        setGroupIsActive={setGroupIsActive}
        setMembersData={setMembersData}
      />

      <Expenses
        setParticipatedMember={setParticipatedMember}
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
    
      />
    </div>
  );
}

export default App;
