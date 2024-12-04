"use client"
import React, { useState } from 'react'
import SpaceIframe from './SpaceIframe'
import { Space } from '@/types/Space'
import LogsContainer from './LogsContainer'

const SpaceViewContent = ({ data, emptyRepo }: { data: Space, emptyRepo: boolean }) => {
  const [showLogs, setShowLogs] = useState(false)
  return (
    <div className="relative w-full mt-4">
      <button className="py-2 px-3 font-medium text-gray-300 absolute top-0 -translate-y-[125%] right-6 bg-blue-600 rounded-md" onClick={() => { setShowLogs(prev => !prev) }}>{showLogs ? "Hide Logs" : "Show Logs"}</button>
      <div className="w-full bg-black border border-gray-800">
      {
        showLogs ? 
        <LogsContainer data={data}/>
        :<SpaceIframe url={data.deployed_url || `https://${data.repository.path_with_namespace.replace("/", "-")}.spaces-dev.clusterprotocol.io`} emptyRepo={emptyRepo} />
      }
      </div>
    </div>
  )
}

export default SpaceViewContent