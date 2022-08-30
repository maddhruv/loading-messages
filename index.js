import { messages } from "./messages.json";

export const allMessages = messages;

export const getRandomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];

export default getRandomMessage;
