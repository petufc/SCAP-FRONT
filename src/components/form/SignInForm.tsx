"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import PrimaryTitle from "../PrimaryTitle";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(1, "Email obrigatório").email("Invalid email"),
  password: z
    .string()
    .min(1, "Senha obrigatória"),
});

export default function SignInForm () {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
    setEmail(values.email);
    setPassword(values.password);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if(result?.error) {
      console.log(result);
      return;
    }

    router.replace('/admin');
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <PrimaryTitle text="Entrar no SCAP" />
      <div className="border-solid border-[#CBD5E1] border-2 px-[17px] py-[21px] rounded-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <div className="space-y-[10px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-medium">Seu email</FormLabel>
                  <FormControl>
                    <Input
                      className="text-[14px] mt-1 border-slate-300 border-[1.5px]"
                      placeholder="Seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[18px] font-medium">Sua senha</FormLabel>
                  <FormControl>
                    <Input
                      className="text-[14px] mt-1 border-slate-300 border-[1.5px]"
                      placeholder="Sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Link href="#" className="self-start text-[14px] mt-[13px] text-[#33415C]">Esqueceu sua senha?</Link>
          <Button className="w-[108px] self-center mt-[5px]" type="submit">
            Logar
          </Button>
        </form>
      </div>
    </Form>
  );
};
