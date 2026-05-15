import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://krpwlfcxeleezmgktjsz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtycHdsZmN4ZWxlZXptZ2t0anN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNTQzNDcsImV4cCI6MjA5MzkzMDM0N30.1V3NEb0j-zxPzwxSjNhfABzsLznTVlqMNGMrr5yfAUM'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
