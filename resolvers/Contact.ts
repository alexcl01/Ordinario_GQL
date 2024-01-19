import { ContactModelType, ContactModel } from "../db/contact.ts";
import { GraphQLError } from "npm:graphql@^16.8.1";

export const Contact = {
    phoneNumber: async (parent: ContactModelType): Promise<ContactModelType> => {
        const contact = await ContactModel.findById(parent.phoneNumber).exec();
        if (!contact) {
            throw new GraphQLError ("No results", {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return contact;
    },
};