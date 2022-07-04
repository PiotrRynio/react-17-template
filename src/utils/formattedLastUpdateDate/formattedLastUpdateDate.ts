export const formattedLastUpdateDate = (lastUpdateDate: Date) => {
  // date to ms

  return lastUpdateDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
