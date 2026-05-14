import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jxdkputqukzzwnlxxdxu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZGtwdXRxdWt6endubHh4ZHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTE3MzgsImV4cCI6MjA2MTAyNzczOH0.7sLMPAQDlR_qY9b9cRpEhMXi7hqV2AHqsR8oBXRa5gA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
