import { z } from "zod";

export const contactFormSchema = z.object({
  subject: z.string().min(1, "Este campo es obligatorio"),
  email: z.string().email("Email inválido").min(1, "Este campo es obligatorio"),
  numberPhone: z.string(),
  message: z.string().min(1, "Este campo es obligatorio"),
});
