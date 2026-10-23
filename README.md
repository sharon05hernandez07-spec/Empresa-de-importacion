# Empresa de Importación

App móvil (React Native + Expo SDK 58 + TypeScript) para gestionar una empresa de importación: suppliers, products, shipments y customs.

## Requisitos

- Node 22 o superior
- pnpm 10.34.8 (`corepack enable && corepack prepare pnpm@10.34.8 --activate`)
- Expo Go (SDK 58) en el celular, con la misma cuenta de Expo en el celular y en la terminal (`pnpm exec expo login`)

## Ejecutar

    pnpm install
    pnpm start

Si la red bloquea la conexión con el celular, usar `pnpm start --tunnel`.

## Estado por rama

- `week-01`: pantalla de shipments con tarjetas (Core Components y Flexbox)
- `week-02`: listas con `FlatList`, búsqueda sin tildes, pantalla de products y tema tipográfico
- `week-03`: React Navigation 7 con tabs (Shipments y Products), stacks anidados, pantallas de detalle y rutas tipadas