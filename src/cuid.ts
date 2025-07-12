import slugid from 'slugid';
import { createId } from '@paralleldrive/cuid2';

export const cuidId = (): string => createId(); // secure, 24-character ID
export const slug = (): string => slugid.nice();