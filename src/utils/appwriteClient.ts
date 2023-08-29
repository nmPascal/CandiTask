// packages
import { Client } from "appwrite";

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_API_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
