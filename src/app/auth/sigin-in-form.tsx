"use client"

import { useState } from 'react'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Password } from '@/components/ui/password'
import { Button } from '@/components/ui/button'
import { SubmitHandler } from 'react-hook-form'
import { useLogin } from '@/hooks/query/authQuery'
import { AuthAPI } from '@/services/types'
import * as z from 'zod'
import { storage } from '@/utils/storage'
import { routes } from '@/config/routes'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/ui/spinner'

const loginSchema = z.object({
  email: z.string().email({ message: "Wrong Email" }),
  password: z.string().min(1, { message: "wrong password" })
})

type Login = z.infer<typeof loginSchema>

const initialValue: Login = {
  email: "pikachu@gmail.com",
  password: "12345"
}

const randomToken = 'fe6oEdd2CDEd3ezWjEQFuAqucklAk046M8VEHDoLeBm9FAg7AKEqtgcWdippJ2lf'

const SignInForm = () => {
  const [reset, setReset] = useState({})
  const [wrongPassword, setWrongPassword] = useState<string>("");
  const [wrongEmail, setWrongEmail] = useState<string>("");
  const { mutate: mutateLogin, isLoading } = useLogin()
  const [isWithoutLogin, setWithoutLogin] = useState<boolean>(false)

  const router = useRouter()

  const onSubmit: SubmitHandler<Login> = data => {
    mutateLogin(data, {
      onSuccess(response: AuthAPI.Login.Response) {
        storage.setToken(response.token);
      },
      onError(error: any) {
        setWrongPassword("Email or Password does not match");
        setWrongEmail("  ")
        setWithoutLogin(true)
      }
    })
  }

  const handleWithoutLogin = () => {
    storage.setToken(randomToken)
    router.replace(routes.main)
  }

  return (
    <>
      <Form<Login>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValue,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-7">
            <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="email@pokemon.id"
              color="primary"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register("email")}
              error={errors.email?.message || wrongEmail}
            />
            <Password
              label="Password"
              placeholder="********"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="primary"
              {...register("password")}
              error={errors.password?.message || wrongPassword}
            />
            <Button
              className="w-full px-6 text-white"
              type="submit"
              size="lg"
              color="primary"
            >
              <span>Sign In</span>
            </Button>
          </div>
        )}
      </Form>
      {isWithoutLogin ? (
        <div className='mt-6'>
          <Button
          className="w-full px-6 text-white bg-pokemon-bug"
          type="submit"
          size="lg"
          color="primary"
          onClick={handleWithoutLogin}
        >
          <span>Continue Without Login</span>
        </Button>
      </div>
      ) : null}
      {isLoading ? (
        <div className="grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center">
          <Spinner size="xl" />
        </div>
      ) : null}
    </>
  );
}

export default SignInForm