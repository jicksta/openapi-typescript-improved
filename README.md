# openapi-typescript-improved

TypeScript code generator written in TypeScript. Give this program an OpenAPI/Swagger JSON file and it'll spit out a single `.ts` file that you can `import`/`require` in your client code.

Note: The generated code, by default, will depend on `experimentalDecorators` and `emitDecoratorMetadata` both to be set to `true` in your `tsconfig.json`. In the future, you will be able to disable this.

    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true          /* Enables experimental support for emitting type metadata for decorators. */

With the use of ES7 decorator metadata, the generator can expose code with almost no loss of information found in the source OpenAPI JSON file. You can reflect on which fields are required, the human descriptions of fields and classes, the names of the types of every field, etc. 

## How to install

    $ yarn add openapi-typescript-improved
    # or...
    $ npm install --save openapi-typescript-improved

The generated code will depend on importing a module from this NPM package, so you probably do not want it in `devDependencies`.

## Generating TypeScript 

    $ ./node_modules/openapi-typescript-improved/bin/gen --in-file swagger.json --out-file src/Service.ts

## Consume the generated module from TypeScript

    import Service from "./Service"
    import * as fetch from "isomorphic-fetch"
    
    const client : Service = new Service(fetch)
    client.getCoreAPIVersions()
    
## Future features

* Expand the number of tested sample OpenAPI files
* Generate individual files for each Definition and Service `path` so build tools can know which files to exclude from the build. 

