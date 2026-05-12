import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const supabase = createClient();
  
  // Check if we have a session
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL('/', request.url), {
    status: 302,
  });
}
