import { z } from "zod";

const addSubCategoryValidation = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  categoryId: z.string({
    required_error: "category is required",
  }),
  icon: z.any().optional(),
});

export default addSubCategoryValidation;
