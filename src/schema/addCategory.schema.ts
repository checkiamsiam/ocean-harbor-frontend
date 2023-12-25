import { z } from "zod";

const addCategoryValidation = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  icon: z.any().optional(),
});

export default addCategoryValidation;
