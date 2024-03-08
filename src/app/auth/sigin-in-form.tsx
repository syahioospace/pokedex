"use client"

import { useState } from 'react'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Password } from '@/components/ui/password'
import { Button } from '@/components/ui/button'
import { SubmitHandler } from 'react-hook-form'
import * as z from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: "Wrong Email" }),
  password: z.string().min(1, { message: "wrong password" })
})

type Login = z.infer<typeof loginSchema>

const initialValue: Login = {
  email: "pikachu@gmail.com",
  password: "12345"
}

const SignInForm = () => {
  const [reset, setReset] = useState({})

  const onSubmit: SubmitHandler<Login> = data => {
    console.log(data)
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
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="********"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              color="primary"
              {...register("password")}
              error={errors.password?.message}
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
    </>
  );
}

export default SignInForm