import { useEffect, useState } from "react"

const Dashboard = () => {
  const [isloading, setIsloading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/dashboard")
      const data = await response.json()
      setDashboardData(data)
      setIsloading(false)
    }
    fetchData()
  }, [])

  if (isloading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts:{dashboardData.posts}</h3>
      <h3>Posts:{dashboardData.likes}</h3>
      <h3>Posts:{dashboardData.followers}</h3>
      <h3>Posts:{dashboardData.following}</h3>
    </div>
  )
}

export default Dashboard
