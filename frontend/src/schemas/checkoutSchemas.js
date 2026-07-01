import * as z from 'zod';

export const addressSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  streetAddress: z.string().min(5, 'Street address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pinCode: z.string().min(6, 'Valid PIN code is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
});

export const checkoutSchema = z.object({
  billingAddress: addressSchema,
  sameAsBilling: z.boolean(),
  shippingAddress: addressSchema.optional(),
}).refine(data => {
  if (!data.sameAsBilling && !data.shippingAddress) {
    return false;
  }
  return true;
}, {
  message: "Shipping address is required when 'Same as billing' is unchecked",
  path: ["shippingAddress"]
});
