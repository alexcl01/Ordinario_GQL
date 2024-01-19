import { ContactModelType, ContactModel } from "../db/contact.ts";
import { GraphQLError } from "npm:graphql@^16.8.1";

export const Mutation = {
    addContact: async (
        _: unknown,
        args: { nameAndLastNames: string, phoneNumber: string }
    ): Promise <ContactModelType> => {
        const contact = {
            nameAndLastNames: args.nameAndLastNames,
            phoneNumber: args.phoneNumber,
        };

        const base_url = "https://api.api-ninjas.com/v1/validatephone";
        const url_phone = `${base_url}?number=${args.phoneNumber}`;
        const validatePhone = await fetch(url_phone);
        if(validatePhone.status !== 200){
            throw new GraphQLError("Invalid number", {
                extensions: { code: "NOT_FOUND" },
            });
        }

        const newContact = await ContactModel.create(contact);
        return newContact;
    },

    deleteContact: async (
        _: unknown,
        args: { id: string }
    ): Promise<ContactModelType> => {
        const contact = await ContactModel.findByIdAndDelete(args.id);
        if(!contact) {
            throw new GraphQLError("No results", {
            extensions: { code: "NOT_FOUND" },
            });
        }
        return contact;
    }, 

    updateContact: async (
        _: unknown,
        args: { id: string, nameAndLastNames: string, phoneNumber: string }
    ): Promise<ContactModelType> => {
        const contact = await ContactModel.findByIdAndUpdate (
            args.id,
            { nameAndLastNames: args.nameAndLastNames, phoneNumber: args.phoneNumber },
            { new: true, runValidators: true }
        );
        if(!contact) {
            throw new GraphQLError("No results", {
            extensions: { code: "NOT_FOUND" },
            });
        }
        return contact;
    },

    getContact: async (
        _: unknown,
        args: { id: string }
    ): Promise<ContactModelType> => {
        const contact = await ContactModel.findById(args.id);
        if(!contact) {
            throw new GraphQLError("No results", {
            extensions: { code: "NOT_FOUND" },
            });
        }
        return contact;
    },
};