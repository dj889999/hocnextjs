import React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,
  })
  function handleMutate() {
    mutate({ name: 'Updated Name' })
  }

  return (
    <div>
      Name: {data?.name || 'Loading...'}{' '}
      {isValidating && <span style={{ color: 'blue' }}>Updating...</span>}
      <br />
      {error && <span style={{ color: 'red' }}>Failed to load</span>}
      <br />
      <button onClick={handleMutate}>Mutate</button>
    </div>
  )
}
