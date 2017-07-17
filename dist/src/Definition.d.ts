export declare class Definition implements IDefinition {
    properties: Property[];
    fullName: string;
    description: string;
    required: string[];
    name(): string;
    namespace(): string;
    hasNamespace(): boolean;
    requiredProperties(): Property[];
    optionalProperties(): Property[];
}
export declare class Property implements IProperty {
    name: string;
    type: string;
    required: boolean;
    description: string;
    constructor(source: IProperty);
}
export interface IDefinition<GeneratedType> {
    fullName: string;
    properties: Property[];
    description: string;
    required: string[];
}
export interface IProperty {
    name: string;
    type: string;
    required: boolean;
}
