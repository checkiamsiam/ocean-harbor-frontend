import { z } from "zod";

const addProductSchema = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  netWeight: z.string({
    required_error: "netWeight is required",
  }),
  packetPerBox: z
    .string({
      required_error: "packetPerBox name is required",
    })
    .refine((val) => {
      return !isNaN(Number(val)) && Number(val) > 0;
    }, "packetPerBox must greater than 0"),
  type: z.string({
    required_error: "type is required",
  }),
  image: z.any().optional(),
  categoryId: z.string({
    required_error: "category is required",
  }),
  subCategoryId: z.string({
    required_error: "subCategory is required",
  }),
  brandId: z.string({
    required_error: "brand is required",
  }),
});

export default addProductSchema;
