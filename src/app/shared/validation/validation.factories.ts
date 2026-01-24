import {
    required,
    minLength,
    pattern,
    SchemaPath,
    email,
} from "@angular/forms/signals";

export const requiredField =
    (message = 'This field is required') =>
        (field: SchemaPath<any>) =>
            required(field, { message });

export const minLen =
    (length: number, message?: string) =>
        (field: SchemaPath<any>) =>
            minLength(field, length, {
                message: message ?? `Minimum length is ${length}`,
            });

export const emailField =
    (message = 'Email format is invalid') =>
        (field: SchemaPath<any>) =>
            email(field, { message });

export const patternField =
    (regex: RegExp, message: string) =>
        (field: SchemaPath<any>) =>
            pattern(field, regex, { message });