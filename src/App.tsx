import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer
} from 'react'

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {

  const [users, setUser] = useState<[User]>()
  const inputRef = useRef<HTMLInputElement>(null)

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])
  const greeling = useCallback(
    (user: User) => {
      alert(`Hello ${user.name}`)
    },
    []
  )

  // async function loadData() {
  //   const response = await fetch('https://api.github.com/users/AlanDeveloperEX')

  //   const data = await response.json()

  //   return setUser(data)
  // }

  inputRef.current?.focus()

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  )
}

export default App
