const noAccessResponse = `You don't have permission to access this resource.`;

export const isResponseWithArrayValid = response => {
  if (response === noAccessResponse) return false;
  return Array.isArray(response);
};
