# EryAI Core Schema

Central hub för databastyper och CI/CD-konfiguration för alla EryAI-repositories.

## 🚦 CI Status

| Repository | Status | Description |
|------------|--------|-------------|
| **eryai-dashboard** | [![CI](https://github.com/eryai-tech/eryai-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/eryai-dashboard/actions/workflows/ci.yml) | Customer dashboard |
| **eryai-engine** | [![CI](https://github.com/eryai-tech/eryai-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/eryai-engine/actions/workflows/ci.yml) | Universal AI motor |
| **eryai-monitoring** | [![CI](https://github.com/eryai-tech/eryai-monitoring/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/eryai-monitoring/actions/workflows/ci.yml) | Automated testing |
| **eryai-sales** | [![CI](https://github.com/eryai-tech/eryai-sales/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/eryai-sales/actions/workflows/ci.yml) | Sales tools |
| **eryai-tech** | [![CI](https://github.com/eryai-tech/eryai-tech/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/eryai-tech/actions/workflows/ci.yml) | Landing page |
| **eryai-demos** | [![CI](https://github.com/eryai-tech/eryai-demos/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/eryai-demos/actions/workflows/ci.yml) | Demo sites |
| **ery-ai-demo-restaurang** | [![CI](https://github.com/eryai-tech/ery-ai-demo-restaurang/actions/workflows/ci.yml/badge.svg)](https://github.com/eryai-tech/ery-ai-demo-restaurang/actions/workflows/ci.yml) | Bella Italia demo |

## 🔄 Hub and Spoke

| Workflow | Status |
|----------|--------|
| **Broadcast Schema** | [![Broadcast](https://github.com/eryai-tech/eryai-core-schema/actions/workflows/broadcast-schema.yml/badge.svg)](https://github.com/eryai-tech/eryai-core-schema/actions/workflows/broadcast-schema.yml) |

## 📁 Structure

```
eryai-core-schema/
├── types/
│   └── database.types.ts    # Auto-generated from Supabase
├── templates/
│   ├── ci.yml               # CI workflow template
│   └── jsconfig.json        # JSDoc config template
└── scripts/
    └── format-types.js      # Type formatting
```

## 🚀 How It Works

1. **Daily at 02:00 UTC**: Workflow generates fresh TypeScript types from Supabase
2. **Broadcast**: Types and CI config pushed to all spoke repositories
3. **CI Validation**: Each repo validates types and builds on every push

## 📋 Manual Trigger

To manually sync all repos:
1. Go to **Actions** → **Broadcast Schema to Spokes**
2. Click **Run workflow**
