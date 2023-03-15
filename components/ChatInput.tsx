'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

type Props = {
  chatId: string;
}

function ChatInput({ chatId }: Props) {

  const { data: session } = useSession();

  const [prompt, setPrompt] = useState("");

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
      <form className='p-5 space-x-5 flex'>
        <input
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
          disabled={!session}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          type="text"
          placeholder='Type your message here...'
        />
        <button
          className='bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
          disabled={!prompt || !session}
          type='submit'>
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>

      <div>
        {/* Model Selection */}
      </div>
    </div>
  )
}

export default ChatInput
