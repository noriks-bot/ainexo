import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'leads.json');

function getLeads(): Array<{ email: string; consent: boolean; newsletter: boolean; timestamp: string }> {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch {
    // ignore
  }
  return [];
}

function saveLeads(leads: Array<{ email: string; consent: boolean; newsletter: boolean; timestamp: string }>) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
}

// POST - save a new lead
export async function POST(request: NextRequest) {
  try {
    const { email, consent, newsletter } = await request.json();
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const leads = getLeads();
    
    // Check for duplicate
    const exists = leads.some(l => l.email.toLowerCase() === email.toLowerCase());
    if (!exists) {
      leads.push({
        email: email.trim().toLowerCase(),
        consent: !!consent,
        newsletter: !!newsletter,
        timestamp: new Date().toISOString(),
      });
      saveLeads(leads);
    }

    return NextResponse.json({ ok: true, total: leads.length });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// GET - list all leads
export async function GET() {
  const leads = getLeads();
  return NextResponse.json({ total: leads.length, leads });
}
