import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || 'https://owetjfakahhfdrtlwvdh.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93ZXRqZmFrYWhoZmRydGx3dmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNzY4MzAsImV4cCI6MjAxNTg1MjgzMH0.LbvAkgBoG0UWdiuhrBYZJ5m3gUVTSOdqn-yQVU27rQ4';

export default createClient(supabaseUrl, supabaseAnonKey)