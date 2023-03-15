'use client'

import React from 'react'
import NewChat from './NewChat'
import { useSession, signOut } from 'next-auth/react'


function SideBar() {

  const { data: session } = useSession();

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>

          {/* New Chat */}
          <NewChat />

          <div>
            {/* Model Selection */}
          </div>

          {/* Chat Rows */}

        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Pic"
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
        />
      )}

    </div>
  )
}

export default SideBar
