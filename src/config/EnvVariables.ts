type EnvVariables = {
  apiUrl: string;
};

export const EnvVariables: EnvVariables = {
  apiUrl: import.meta.env.VITE_API_URL || "",
};
