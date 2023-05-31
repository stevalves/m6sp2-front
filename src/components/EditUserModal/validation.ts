import { z } from "zod";

export const schema = z
  .object({
    name: z.string(),
    email: z.string().email("Deve ser um e-mail válido."),
    phone: z.string(),
    password: z.string(),
  })
  .partial();

export type EditUserData = z.infer<typeof schema>;
