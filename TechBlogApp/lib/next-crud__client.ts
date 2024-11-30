import { Client } from "appwrite";
const client = new Client();
client.setProject(process.env.NEXT_APPWRITE_PROJECT_ID as string);

export default client;
