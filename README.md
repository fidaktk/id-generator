# @fidaktk/ids

A compact, fast, and dependency-light ID generator library for Node.js and browser environments.  
Supports `ObjectID`, `UUID v4/v5`, `CUID2`, and `slugid` – **without the MongoDB driver**.

---

## ✨ Features

- MongoDB-compatible `ObjectID` generator
- UUID v4 and v5 (RFC compliant)
- Collision-resistant `cuid2` (recommended)
- URL-safe short `slugid`
- Built-in TypeScript types
- Fully tree-shakeable and ESM-first

---

## 📦 Installation

```bash
npm install @fidaktk/ids
```

---

## 🚀 Usage

### Modern ESM Import (Recommended)

```ts
import { ObjectID, uuidv4, uuidv5, cuidId, slug } from '@fidaktk/ids';

// Mongo-like ObjectID
const mongoId = new ObjectID().toHexString();

// UUID v4
const uuid = uuidv4();

// UUID v5
const namedUuid = uuidv5('example.com', '6ba7b810-9dad-11d1-80b4-00c04fd430c8');

// CUID2
const cuid = cuidId();

// Slug (short URL-safe ID)
const shortSlug = slug();
```

---

## ⚠️ CommonJS Compatibility

This package is **ESM-only**.  
To use in CommonJS (e.g. `require()`), use a dynamic import:

```js
const ids = await import('@fidaktk/ids');
const id = new ids.ObjectID().toHexString();
```

---

## 🧪 Available Generators

| Name      | Description                    | Example                        |
|-----------|--------------------------------|--------------------------------|
| ObjectID  | MongoDB-style ID               | `64ee4ba75a37dbed0e170d51`     |
| uuidv4    | Random UUID                    | `0f770978-f071-4a1c-b19b-...`  |
| uuidv5    | Name-based UUID (RFC 4122)     | `0ce4a4e4-0c3e-5c42-...`       |
| cuidId    | Secure, k-sortable CUID2       | `ckr1jmrhf00002q51k14gyy49`    |
| slug      | Short, URL-safe ID             | `7d4b9eqgRFe1ziTC2kHGVB`       |

---

## 📄 License

MIT © [Fida ur Rehman](https://github.com/fidaktk)
