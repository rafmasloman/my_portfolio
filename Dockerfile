# syntax=docker/dockerfile:1.4
########################################
# Stage 1: deps - install dependencies #
########################################
FROM node:18-alpine AS deps
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install all dependencies (devDependencies juga) dengan cache
RUN --mount=type=cache,target=/root/.npm \
    npm ci

########################################
# Stage 2: builder - build Next.js     #
########################################
FROM node:18-alpine AS builder
WORKDIR /app

# Copy source code
COPY . .

# Copy node_modules dari stage deps
COPY --from=deps /app/node_modules ./node_modules

# Build Next.js (Tailwind & fonts butuh devDependencies)
RUN --mount=type=cache,target=/root/.npm \
    npm run build

########################################
# Stage 3: runner - production image  #
########################################
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy production build artifacts
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Copy node_modules runtime (hanya yang diperlukan)
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
