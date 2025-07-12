import { v4, v5 } from 'uuid';

export const uuidv4 = (): string => v4();
export const uuidv5 = (name: string, namespace: string): string => v5(name, namespace);