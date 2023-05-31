import { z } from "zod"

export const schema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().email("Deve ser um e-mail"),
    phone: z.string()
})

export type RegisterContactData = z.infer<typeof schema>