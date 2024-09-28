import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSideBar from '../components/DashSideBar'
import DashProfile from '../components/DashProfile'
import DashPosts from '../components/DashPosts'
import DashUser from '../components/DashUser'
import DashComment from '../components/DashComment'
import DasnboardComp from '../components/DasnboardComp'

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        {/* SideBar */}
        <DashSideBar />
      </div>
        {/* Dash Profile */}
        { tab === 'profile' && <DashProfile />}
        {/* Posts */}
        { tab === 'posts' && <DashPosts />}
        {/* Users */}
        { tab === 'users' && <DashUser />}
        {/* Comments */}
        { tab === 'comments' && <DashComment />}
        {/* Dashboard comp */}
        { tab === 'dash' && <DasnboardComp />}
    </div>
  )
}
