# @fidaktk/ids

A lightweight, dependency-efficient ID generator package for Node.js and web projects.  
Supports MongoDB-compatible `ObjectID`, UUIDv4/v5, CUID2, and URL-safe slug IDs — all without requiring the full MongoDB driver.

✅ ESM & CJS compatible  
✅ Zero external dependencies for ObjectID  
✅ Fully tested  
✅ Browser-compatible  

---

## ✨ Features

- 🧠 MongoDB-like `ObjectID` — no driver required
- 🔐 UUID v4 & v5 (namespaced)
- ⚡ CUID2 — modern, collision-resistant IDs
- 🌀 Slug-friendly IDs via `slugid`
- ✅ TypeScript ready
- 📦 Works with both CommonJS and ESM

---

## 📦 Installation

```bash
npm install @fidaktk/ids
# or
yarn add @fidaktk/ids
```

---

## 🚀 Usage

### ES Modules

```ts
import { ObjectID, uuidv4, uuidv5, cuidId, slug } from '@fidaktk/ids';

const oid = new ObjectID().toHexString();
const uid = uuidv4();
const namedUUID = uuidv5('my-namespace', uuidv5.URL);
const cuid = cuidId();
const shortSlug = slug();
```

### CommonJS

```js
const { ObjectID, uuidv4, uuidv5, cuidId, slug } = require('@fidaktk/ids');

const oid = new ObjectID().toHexString();
const uid = uuidv4();
const namedUUID = uuidv5('my-namespace', uuidv5.URL);
const cuid = cuidId();
const shortSlug = slug();
```

---

## 🧪 API Reference

### `ObjectID`
- `new ObjectID()`
- `new ObjectID(hexString)`
- `ObjectID.isValid(id)`
- `ObjectID.createFromHexString(hex)`
- `ObjectID.createFromTime(time)`
- `.toHexString()`
- `.getTimestamp()`
- `.equals(other)`

### `uuidv4()`
- Generates a random UUID v4.

### `uuidv5(name, namespace)`
- Deterministic UUID v5 from name + namespace.

### `cuidId()`
- Generates a CUID2-compliant ID.

### `slug()`
- Short, URL-friendly ID (slugid-compatible).

---

## 🔧 Compatibility

| Platform              | Supported |
|-----------------------|-----------|
| Node.js               | ✅        |
| Browser (via bundler) | ✅        |
| CommonJS (`require`)  | ✅        |
| ESM (`import`)        | ✅        |

---

## 📁 Project Structure

```
.
├── src/
│   ├── objectid.ts
│   ├── uuid.ts
│   ├── cuid.ts
│   ├── index.ts
├── dist/
├── test/
├── package.json
├── tsconfig.json
├── jest.config.mjs
└── README.md
```

---

## 📜 License

MIT License © [Fida ur Rehman](https://github.com/fidaktk)