import useSWR from "swr"

const featcher = async (url) => {
  const response = await fetch("http://localhost:4000/dashboard")
  const data = await response.json()
  return data
}
const DashboardSwr = () => {
  const { data, error } = useSWR("dashboard", featcher)

  if (error) return <div>'An error has occured'</div>
  if (!data) return <div>'IsLoding...'</div>
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Posts:{data.posts}</h3>
      <h3>Likes:{data.likes}</h3>
      <h3>Followers:{data.followers}</h3>
      <h3>Following:{data.following}</h3>
    </div>
  )

  return <div></div>
}

export default DashboardSwr
