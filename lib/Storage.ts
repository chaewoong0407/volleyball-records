export const getToken = () => {
  return typeof window !== 'undefined'
    ? sessionStorage.getItem('volleyball-token')
    : null;
};

export const TestToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibmphc3MyMSJ9.dKMIkqJf8-HYRxJHWGh5P7FyaWFiiQjiZlnjhNDyUFY';
