import { Container } from "@mui/joy"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSubscribe } from "../hooks/pubSubHook"


export default function Header() {
  const [user, setUser] = useState<string | null>(localStorage.getItem('codetunes-user'))
  const navigate = useNavigate()

  useSubscribe('login-event', () => {
    fechData()
  })

  const fechData = () => {
    setUser(localStorage.getItem('codetunes-user'))
  }

  const handleLogout = () => {
    localStorage.clear()
    fechData()
    navigate('/')
  }

  useEffect(() => {
    fechData()
  }, [])

  return (
    <nav style={{ position: 'sticky', top: '0', zIndex: '999', backdropFilter: 'blur(12px)', backgroundColor: 'hsla(0, 0%, 94%, .6)' }}>
      <Container sx={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to={'/'} style={{ textDecoration: 'none', color: '#000000' }} className="link">
          <h1>CodeTunes</h1>
        </Link>
        {
          user === null
            ? (
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to={'/login'} style={{ color: "black"}} className="link">Login</Link>
                <Link to={'/register'} style={{ color: "black"}} className="link" >Register</Link>
              </div>
            )
            : (
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <p style={{ fontWeight: 'bold' }}>Hola {user}</p>
                <a href="/own" style={{ color: "black" }} className="link" >Mis artistas</a>
                <a style={{ color: "black" }} onClick={handleLogout} className="link" >Logout</a>
              </div>
            )
        }
      </Container>
    </nav>
  )
}
