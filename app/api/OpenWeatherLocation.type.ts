import { z } from "zod";

const localNamesSchema = z.record(z.string(), z.string());

const locationSchema = z.object({
  name: z.string(),
  local_names: localNamesSchema,
  lat: z.number(),
  lon: z.number(),
  country: z.string(),
  state: z.string().optional(),
});

export const locationSearchResponseSchema = z.array(locationSchema);

export type Location = z.infer<typeof locationSchema>;
export type LocationSearchResponse = z.infer<typeof locationSearchResponseSchema>;
