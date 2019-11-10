
export const isDev = window.location.hostname === "localhost";

export const apiUrl = isDev ? "http://localhost:4000/graphql" : "https://hd8rt04jxa.execute-api.eu-central-1.amazonaws.com/prod/graphql";