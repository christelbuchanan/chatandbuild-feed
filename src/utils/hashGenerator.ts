/**
 * Generates a random hash similar to Twitter/X's tweet IDs
 * @returns A random alphanumeric string
 */
export const generateRandomHash = (): string => {
  // Generate a random string of characters (letters and numbers)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 10; // Twitter uses varying lengths, but we'll use 10 for simplicity
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return result;
};

/**
 * Extracts a hash from a permalink URL
 * @param url The permalink URL
 * @returns The extracted hash or null if not found
 */
export const extractHashFromUrl = (url: string): string | null => {
  if (!url) return null;
  
  // Match the pattern chatandbuild.com/chat/HASH
  const match = url.match(/chatandbuild\.com\/chat\/([A-Za-z0-9]+)/);
  return match ? match[1] : null;
};

/**
 * Creates a permalink URL from a hash
 * @param hash The hash to use in the permalink
 * @returns The full permalink URL
 */
export const createPermalinkFromHash = (hash: string): string => {
  return `https://chatandbuild.com/chat/${hash}`;
};
