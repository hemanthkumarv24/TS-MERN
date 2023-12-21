import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { update } from './redux/accountSlice';
import { useState } from 'react';

function App() {
  const myName = useSelector(state => state.account.name)
  const dispatch = useDispatch();
const [name, setName] = useState('');
  const handleUpdate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(update({name}))
  }
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>TSAmazon  {myName}</Navbar.Brand>
          </Container>
          <input type="text"
          placeholder={myName}
          onChange={e => setName(e.target.value)}
          />
          <button onClick={handleUpdate}>
            update
          </button>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  )
}

export default App
