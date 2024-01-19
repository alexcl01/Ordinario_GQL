import { ContactModelType, ContactModel } from "../db/contact.ts";
import { GraphQLError } from "npm:graphql@^16.8.1";

export const Query = {
    contacts: async (): Promise<ContactModelType[]> => {
        const contacts = await ContactModel.find().exec();
        return contacts;
    },

    contact: async (_: unknown, args: {id: string }): Promise<ContactModelType> => {
        const contact = await ContactModel.findById(args.id);
        if(!contact) {
            throw new GraphQLError("No results", {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return contact;
    },
};