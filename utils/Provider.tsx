
"use client"

import React, { useState } from 'react'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

export default function Provider({children}) {
    const [client]=useState(new QueryClient())
  return (
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
  )
}