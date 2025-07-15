# @fidaktk/ids

A lightweight, dependency-efficient ID generator package for Node.js and web projects.
Supports BSON `ObjectId` (compatible with MongoDB/Mongoose), UUIDv4/v5, CUID2, and URL-safe slug IDs.

✅ ESM & CJS compatible
✅ Uses the official `bson` library for `ObjectId`
✅ Fully tested
✅ Browser-compatible

---

## ✨ Features

- 🧠 **BSON `ObjectId`**: Directly uses the official `bson` library for 100% compatibility with MongoDB and Mongoose.
- 🔐 **UUID v4 & v5**: Standard RFC4122 UUIDs.
- ⚡ **CUID2**: Modern, collision-resistant IDs.
- 🌀 **Slug**: URL-friendly IDs via `slugid`.
- ✅ **TypeScript Ready**: Fully typed for a great developer experience.
- 📦 **Dual Module Support**: Works seamlessly with both CommonJS (`require`) and ESM (`import`).

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
import { ObjectId, uuidv4, uuidv5, cuidId, slug } from '@fidaktk/ids';

// Create a new ObjectId
const oid = new ObjectId();
console.log(oid.toHexString()); // e.g., '6693d8a8b2b7b2b7b2b7b2b7'

// Create an ObjectId from a hex string
const oidFromString = new ObjectId('6693d8a8b2b7b2b7b2b7b2b7');

// Other IDs
const uid = uuidv4();
const namedUUID = uuidv5('my-namespace', uuidv5.URL);
const cuid = cuidId();
const shortSlug = slug();
```

### CommonJS

```js
const { ObjectId, uuidv4, uuidv5, cuidId, slug } = require('@fidaktk/ids');

const oid = new ObjectId();
console.log(oid.toHexString());

const uid = uuidv4();
const namedUUID = uuidv5('my-namespace', uuidv5.URL);
const cuid = cuidId();
const shortSlug = slug();
```

---

## 🧪 API Reference

### `ObjectId`
The `ObjectId` class is re-exported from the official `bson` library. It is fully compatible with Mongoose and other MongoDB tools.

- `new ObjectId()`: Creates a new, random ObjectId.
- `new ObjectId(hexString)`: Creates an ObjectId from a 24-character hex string.
- `ObjectId.isValid(hexString)`: Checks if a string is a valid 24-character hex string.
- `ObjectId.createFromTime(timeInSeconds)`: Creates an ObjectId from a Unix timestamp.
- `.toHexString()`: Returns the 24-character hex string representation.
- `.getTimestamp()`: Returns the `Date` object when the ID was created.
- `.equals(other)`: Compares for equality with another ObjectId.

### `uuidv4()`
- Generates a random UUID v4.

### `uuidv5(name, namespace)`
- Generates a deterministic UUID v5 from a name and namespace.

### `cuidId()`
- Generates a CUID2-compliant ID.

### `slug()`
- Generates a short, URL-friendly ID (using `slugid`).

---

## 🔧 Compatibility

| Platform              | Supported |
|-----------------------|-----------|
| Node.js               | ✅ >=16.20.1 |
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