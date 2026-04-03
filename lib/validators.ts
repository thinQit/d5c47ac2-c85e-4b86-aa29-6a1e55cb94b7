import { z } from "zod";

export const productQuerySchema = z.object({
  collection: z.string().optional(),
  size: z.string().optional(),
  color: z.string().optional(),
  priceMin: z.coerce.number().int().nonnegative().optional(),
  priceMax: z.coerce.number().int().nonnegative().optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  q: z.string().optional(),
  inStock: z.coerce.boolean().optional(),
  sort: z.enum(["new", "best-sellers", "price-asc", "top-rated"]).optional(),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(50).default(20),
});

export const reviewListQuerySchema = z.object({
  productId: z.string().cuid(),
  sort: z.enum(["newest", "top"]).default("newest"),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(50).default(10),
});

export const createReviewSchema = z.object({
  productId: z.string().cuid(),
  rating: z.number().int().min(1).max(5),
  title: z.string().min(3).max(120).optional(),
  body: z.string().min(20).max(2000),
});

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  topic: z.enum(["sizing", "return", "order", "product", "other"]),
  orderNumber: z.string().max(64).optional(),
  message: z.string().min(20).max(3000),
});

export const checkoutItemSchema = z.object({
  productId: z.string().cuid(),
  variantId: z.string().cuid().optional(),
  quantity: z.number().int().positive().max(20),
});

export const createCheckoutSessionSchema = z.object({
  items: z.array(checkoutItemSchema).min(1),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
  promoCode: z.string().max(64).optional(),
  shippingOption: z.enum(["standard", "express"]).default("standard"),
});
