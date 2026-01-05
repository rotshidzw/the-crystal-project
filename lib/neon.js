import { neon } from '@netlify/neon';

export const getSqlClient = () => {
  const databaseUrl = process.env.NETLIFY_DATABASE_URL || process.env.NETLIFY_DATABASE_URL_UNPOOLED;
  if (!databaseUrl) {
    return null;
  }

  return neon(databaseUrl);
};
