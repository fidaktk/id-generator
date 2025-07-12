import cuid from 'cuid';
import slugid from 'slugid';

export const cuidId = (): string => cuid();
export const slug = (): string => slugid.nice();