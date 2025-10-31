# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies (hanya untuk build)
RUN npm ci

# Copy seluruh project
COPY . .

# Build Next.js app (standalone)
RUN npm run build

# Stage 2: Pruner (optional, hanya ambil hasil build)
FROM node:20-alpine AS pruner
WORKDIR /app

# Copy only build output from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only standalone build
COPY --from=pruner /app/.next/standalone ./
COPY --from=pruner /app/public ./public
COPY --from=pruner /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
