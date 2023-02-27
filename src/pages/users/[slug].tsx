import { useRouter } from 'next/router'

export const User = () => {
  const router = useRouter()
  const { slug } = router.query

  return <div>User by param {slug}</div>
}

export default User
