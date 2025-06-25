export const timeAgo = (timestamp: number, date: number): string => {
  const diffInSeconds = Math.floor((date - timestamp) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
};

export const setLocalStorage = (key: string, value: any) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorage = (key: string) => {
  if (key) {
    return localStorage.getItem(key);
  }
};

export const deleteLocalStorage = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
