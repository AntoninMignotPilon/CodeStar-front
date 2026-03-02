# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0
ARG PNPM_VERSION=10.2.0

FROM node:${NODE_VERSION}-alpine

# Pour le développement, il est préférable d'utiliser 'development'
# Next.js n'aime pas les valeurs non-standard ou 'production' durant un 'pnpm dev'
ENV NODE_ENV=development

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

# 1. Ajuster les permissions du dossier de travail dès le début
RUN chown node:node /usr/src/app

# 2. Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# 3. Installer TOUTES les dépendances (y compris devDeps comme TypeScript)
# On ne met pas --prod car 'pnpm dev' a besoin des devDependencies
RUN --mount=type=cache,target=/home/node/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# 4. Copier le reste du code en changeant le propriétaire pour 'node'
COPY --chown=node:node . .

# Utiliser l'utilisateur node pour la sécurité
USER node

EXPOSE 3000

CMD ["pnpm", "dev"]