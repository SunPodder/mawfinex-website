# Dockerfile for Express API server with Bun
FROM oven/bun:1-alpine
WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 express

COPY package.json bun.lock ./
RUN bun install --production --frozen-lockfile

# Copy only necessary files
COPY ./*.js ./
COPY ./.env ./

# Change ownership of files to non-root user
RUN chown -R express:bunjs /app

# Switch to non-root user
USER express

# Set working directory to server
WORKDIR /app

EXPOSE 3001

CMD ["bun", "index.js"]
