export const isAppleMobile = () => {
  const userAgent = window.navigator.userAgent;
  return Boolean(userAgent.match(/iPad|iPhone|Macintosh/));
};
