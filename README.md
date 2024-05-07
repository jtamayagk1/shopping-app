npx create-next-app
npm run dev

npm install prisam --save-dev
npx prisma init

touch .env
```ts
DATABASE_URL="db_url"
```

add to .gitignore
```
# local env files
.env*.local
.env
```

npx prisma db pull
npx prisma generate

cd src
mkdir lib
cd lib
touch prisma.ts
```ts
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

add to tsconfig.json
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"],
          "db": ["./lib/prisma"]
        }
    }
}
```