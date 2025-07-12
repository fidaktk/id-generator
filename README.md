# @fidaktk/ids

A simple and powerful utility library to generate unique IDs:
- MongoDB-style `ObjectID`
- UUID v4 & v5
- CUID
- SlugID

> Built with TypeScript. Zero dependencies. Fully tested.

---

## ✨ Features

- ✅ `ObjectID` class (with `.toHexString()`, `.equals()`, `.getTimestamp()`)
- ✅ `uuidv4()` — RFC4122 v4 compliant
- ✅ `uuidv5()` — deterministic based on name + namespace
- ✅ `cuidId()` — collision-resistant CUID
- ✅ `slug()` — short human-friendly CUID

---

## 📦 Install

```bash
npm install @fidaktk/ids
```

or

```bash
yarn add @fidaktk/ids
```

---

## 🚀 Usage

```ts
import { ObjectID, uuidv4, uuidv5, cuidId, slug } from '@fidaktk/ids';

// ObjectID (MongoDB-style)
const id = new ObjectID();
console.log(id.toHexString(), id.getTimestamp());

// UUID v4
console.log(uuidv4());

// UUID v5
console.log(uuidv5('user@example.com', '6ba7b810-9dad-11d1-80b4-00c04fd430c8'));

// CUID
console.log(cuidId());

// SlugID
console.log(slug());
```

---

## 🔍 API

| Export         | Type     | Description |
|----------------|----------|-------------|
| `new ObjectID()` | `ObjectID` class | 12-byte Mongo-compatible ID with helper methods |
| `uuidv4()`     | `string` | Random UUID v4 |
| `uuidv5(name, namespace)` | `string` | Deterministic UUID v5 |
| `cuidId()`     | `string` | Collision-resistant short ID |
| `slug()`       | `string` | Short, unique slug-style ID |

---

## 🧪 Testing

```bash
npm test
```

Includes test coverage for:
- ObjectID generation & equality
- UUIDv4 & UUIDv5
- CUID & slug formats

---

## 📄 License

MIT © [Fida ur Rehman](https://github.com/fidaktk)
