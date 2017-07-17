#!/usr/bin/env ts-node
import * as fs from "fs"
import {OpenAPIFormat} from "./OpenAPIFormat"
import { renderDefinition } from "./templates"
import { Definition } from "./Definition"

const referencePath = fs.realpathSync(__dirname + "/../reference");
const exampleK8sJSON = referencePath + "/kubernetes.json";

const k8s = JSON.parse(fs.readFileSync(exampleK8sJSON).toString());
const api = new OpenAPIFormat(k8s);

const podListDefinition: Definition<any> = api.definition("io.k8s.api.core.v1.PodList");
//templates.definition(podListDefinition)

console.log(podListDefinition);
console.log("\n\n", renderDefinition(podListDefinition));