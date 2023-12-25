import { z } from "zod";

const addBrandValidation = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  logo: z.any().optional(),
});

export default addBrandValidation;
