// pages/api/health.js (eller app/api/health/route.ts för App Router)
// GOLDEN PATH: Alla repos MÅSTE ha denna endpoint

// För Pages Router (pages/api/health.js):
export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    version: process.env.npm_package_version || '1.0.0',
    timestamp: new Date().toISOString(),
    repo: process.env.VERCEL_GIT_REPO_SLUG || 'unknown',
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'unknown'
  });
}

// ============================================
// För App Router (app/api/health/route.ts):
// ============================================
/*
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    version: process.env.npm_package_version || '1.0.0',
    timestamp: new Date().toISOString(),
    repo: process.env.VERCEL_GIT_REPO_SLUG || 'unknown',
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'unknown'
  });
}
*/
