const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const token = process.env.NEXT_PUBLIC_TOKEN_STORAGE;

export const env = {
    apiBaseUrl: apiBaseUrl,
    dateTimeFormat: "DD-MM-YYYY",
    timeFormat: "HH:mm A",
    token: token || "",
  };
  