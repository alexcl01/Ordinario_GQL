import mongoose from "npm:mongoose@8.0.1";
import { Contact } from "../types.ts";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    nameAndLastNames: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    hourCountry: { type: String, required: true },
});

export type ContactModelType = mongoose.Document & Omit <Contact, "id">;
export const ContactModel = mongoose.model<ContactModelType>(
    "Contact",
    ContactSchema
);