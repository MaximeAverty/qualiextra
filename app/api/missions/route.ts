
import { missions } from '@/src/data/missions';
import { NextResponse } from 'next/server';


export async function GET() {
    return NextResponse.json(missions);
}