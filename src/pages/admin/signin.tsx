import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { FormEvent, useCallback, useEffect, useState, useRef } from 'react'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'

export default function SignInPage() {
  const inputUsername = useRef<HTMLInputElement>(null)
  const [passowrdIsVisible, setPassowrdVibility] = useState<boolean>(false)

  useEffect(() => {
    inputUsername.current?.focus()
  }, [inputUsername])

  const handleSignIn = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const username = event.currentTarget.username.value
    const password = event.currentTarget.password.value
  }, [])

  return (
    <>
      <Navbar />
      <section className="py-20 grid place-content-center p-8">
        <div className="flex gap-20">
          <div className="max-w-md">
            <form
              onSubmit={handleSignIn}
              className="flex flex-col bg-gray-200 p-8 rounded-md shadow-lg"
            >
              <h1 className="font-black text-2xl text-center mb-5">Login</h1>
              <div className="flex flex-col space-y-3 mb-6">
                <input
                  ref={inputUsername}
                  type="text"
                  name="username"
                  placeholder="Login"
                  className="px-5 py-3 w-full outline-none rounded-md"
                />
                <div className="relative">
                  <input
                    type={passowrdIsVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="Senha"
                    className="px-5 py-3 w-full outline-none rounded-md"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2  text-lg">
                    {passowrdIsVisible ? (
                      <RiEyeLine
                        className="cursor-pointer"
                        onClick={() => setPassowrdVibility(!passowrdIsVisible)}
                      />
                    ) : (
                      <RiEyeCloseLine
                        className="cursor-pointer"
                        onClick={() => setPassowrdVibility(!passowrdIsVisible)}
                      />
                    )}
                  </span>
                </div>
              </div>
              <button className="px-7 py-3 bg-red rounded-md text-light font-bold tracking-wide">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
