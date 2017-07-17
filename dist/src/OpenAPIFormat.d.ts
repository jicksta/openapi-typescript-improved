import { IDefinition } from "./Definition";
export interface IOpenAPI {
    swagger: string;
    paths: any;
    info: {
        title: string;
        version: string;
    };
    definitions: IDefinition<any>[];
}
export default class OpenAPIFormat {
    definitions: IDefinition<any>[];
    constructor(source: IOpenAPI);
    definition<T>(name: string): IDefinition<T>;
}
