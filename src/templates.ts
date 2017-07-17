import { Definition } from "./Definition"

const INCLUDE_NAMESPACES = false

export function renderDefinition(def: Definition<any>) {
  const withNamespace: (s: string) => string = s => INCLUDE_NAMESPACES ? s : s // TODO

  return withNamespace(`
    
    // ${def.description}}
    export interface ${def.name()} {
    
      ${repeated(def.requiredProperties().map(prop => `
        // ${prop.description}
        // @required
        ${prop.name}: ${prop.type}
      `))}
      
      ${repeated(def.optionalProperties().map(prop => `
        // ${prop.description}
        // @optional
        ${prop.name}?: ${prop.type};
      `))}
      
    }
    
  `)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function repeated(any: any[]): string {
  return any.map(o => o.toString()).join("\n")
}

export function conditional(expr: boolean, output: string): string {
  return expr ? output : ""
}

//function binary<T>(left: (from: T) => string, right: (from: T) => string) : (expr: boolean) => string {
//  return (expr: boolean) => expr ? left()
//}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*
/*
{
  "io.k8s.api.core.v1.PodList": {
    "description": "PodList is a list of Pods.",
    "required": [
      "items"
    ],
    "properties": {
      "apiVersion": {
        "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources",
        "type": "string"
      },
      "items": {
        "description": "List of pods. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md",
        "type": "array",
        "items": {
          "$ref": "#/definitions/io.k8s.api.core.v1.Pod"
        }
      },
      "kind": {
        "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds",
        "type": "string"
      },
      "metadata": {
        "description": "Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds",
        "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta"
      }
    },
    "x-kubernetes-group-version-kind": [
      {
        "group": "",
        "version": "v1",
        "kind": "PodList"
      }
    ]
  }
}
*/
