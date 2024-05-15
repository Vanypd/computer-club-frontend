import { FieldType } from "../enums/enum";

export interface Validations {
    minLength: number;
    maxLength: number;
    fieldType: FieldType;
}