export class Definition<T> implements IDefinition<T> {

  // e.g. "io.k8s.api.core.v1.PodList"
  public fullName: string;

  public description: string;

  public required: string[];

  public properties: Property[]

  constructor(fullName: string, source: IDefinition<T>) {
    this.fullName = fullName
    this.description = source.description
    this.required = source.required
    this.properties = this.properties ? Object.entries(source.properties).map(([name, prop]) => new Property(name, prop)) : []
  }

  public name() : string {
    const match = /^(.+\.)?([^.]+)$/.exec(this.fullName)
    if(!match) throw new Error("No name found!")
    return match[2]
  }

  public namespace() : string {
    if(this.hasNamespace()) {
      const match = /^(.+)\.[^.]+$/.exec(this.fullName)
      if (match) return match[1]
    }
    throw new Error("Does not have a namespace!")
  }

  public hasNamespace() {
    return ! /^[^.]+$/.test(this.fullName)
  }

  public requiredProperties() : Property[] {
    return this.properties.filter(prop => this.required.indexOf(prop.name) !== -1)
  }

  public optionalProperties() : Property[] {
    return this.properties.filter(prop => this.required.indexOf(prop.name) === -1)
  }

}

export interface IDefinition<GeneratedType> {

  fullName: string

  properties: IProperty[]

  // e.g. "PodList is a list of Pods"
  description: string // e.g.

  // e.g. ["items"]
  required: string[]

}

export class Property implements IProperty {
  public name: string;
  public type: string;
  public required: boolean;
  public description: string;

  constructor(name: string, source: IProperty) {
    this.name = name;
    this.type = source.name;
    this.required = source.required;
  }

}

export interface IProperty {
  name: string;
  type: string;
  required: boolean;
  description: string;
}
