import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'purchases.json');

interface Purchase {
  email: string;
  plan: string;
  amount: string;
  method: string;
  cardLast4?: string;
  timestamp: string;
}

function getPurchases(): Purchase[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch {
    // ignore
  }
  return [];
}

function savePurchases(purchases: Purchase[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(purchases, null, 2));
}

// POST - save a new purchase
export async function POST(request: NextRequest) {
  try {
    const { email, plan, amount, method, cardLast4 } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }
    if (!plan || !amount || !method) {
      return NextResponse.json({ error: 'plan, amount and method required' }, { status: 400 });
    }

    const purchases = getPurchases();
    const entry: Purchase = {
      email: email.trim().toLowerCase(),
      plan,
      amount,
      method,
      timestamp: new Date().toISOString(),
    };
    if (cardLast4) entry.cardLast4 = cardLast4;

    purchases.push(entry);
    savePurchases(purchases);

    return NextResponse.json({ ok: true, total: purchases.length });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// GET - list all purchases
export async function GET() {
  const purchases = getPurchases();
  return NextResponse.json({ total: purchases.length, purchases });
}
