import React, { useState } from 'react'
import { StudentDetail } from '@/components/swr'

export default function SwrPage() {
  const [detailList, setDetailList] = useState([1, 1, 1])

  function handleAddStudent() {
    setDetailList([...detailList, 1])
  }

  return (
    <div>
      <h1>SWR Page </h1>
      <button onClick={handleAddStudent}>Add Student</button>
      <ul>
        {detailList.map((_, index) => (
          <li key={index}>
            <StudentDetail studentId='lea11ziflg8xoizb' />
          </li>
        ))}
      </ul>
    </div>
  )
}
