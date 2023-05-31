import { z } from "zod"

export const schema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória"),
    phone: z.string()
})

export type RegisterData = z.infer<typeof schema>