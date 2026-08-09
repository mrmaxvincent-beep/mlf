import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// Falls back to static content (see callers) when env vars aren't set yet —
// keeps `npm run dev` usable before .env.local exists, same as the design
// prototype's "no supabase client -> use static data" behavior.
export const supabase = isSupabaseConfigured ? createClient(url!, anonKey!) : null;

export type OyenNote = {
  id: string;
  body: string;
  from_label: string | null;
  approved: boolean;
  created_at: string;
};

export type UpcomingEvent = {
  id: string;
  when_label: string;
  name: string;
  description: string;
  href: string;
  sort_order: number;
};
