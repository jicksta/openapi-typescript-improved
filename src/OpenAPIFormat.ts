import { Definition, IDefinition } from "./Definition"

export interface IOpenAPI {
  swagger: string
  paths: object
  info: { title: string; version: string }
  definitions: {[fullName: string]: IDefinition<any>}
}

export class OpenAPIFormat implements IOpenAPI {

  definitions: {[fullName: string]: Definition<any>}

  swagger: string
  paths: object
  info: { title: string; version: string; }

  constructor(source: IOpenAPI) {
    this.info = source.info
    this.swagger = source.swagger
    this.paths = source.paths
    this.definitions = Object.entries(source.definitions).reduce((memo, [fullName, definition]) => {
      memo[fullName] = new Definition(fullName, definition)
      return memo
    }, <{[fullName: string]: Definition<any>}> {})
  }

  definition(name: string) : Definition<any> {
    const def = this.definitions[name]
    if(!def) throw new Error("Could not find definition named '" + name + "'")
    return def;
  }

}