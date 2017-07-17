"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var INCLUDE_NAMESPACES = false;
function renderDefinition(def) {
    var withNamespace = function (s) { return INCLUDE_NAMESPACES ? s : s; }; // TODO
    return withNamespace("\n    \n    // " + def.description + "}\n    export interface " + def.name() + " {\n    \n      " + repeated(def.requiredProperties().map(function (prop) { return "\n        // " + prop.description + "\n        // @required\n        " + prop.name + ": " + prop.type + "\n      "; })) + "\n      \n      " + repeated(def.optionalProperties().map(function (prop) { return "\n        // " + prop.description + "\n        // @optional\n        " + prop.name + "?: " + prop.type + ";\n      "; })) + "\n      \n    }\n    \n  ");
}
exports.renderDefinition = renderDefinition;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function repeated(any) {
    return any.map(function (o) { return o.toString(); }).join("\n");
}
exports.repeated = repeated;
function conditional(expr, output) {
    return expr ? output : "";
}
exports.conditional = conditional;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RlbXBsYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFBO0FBRWhDLDBCQUFpQyxHQUFvQjtJQUNuRCxJQUFNLGFBQWEsR0FBMEIsVUFBQSxDQUFDLElBQUksT0FBQSxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUExQixDQUEwQixDQUFBLENBQUMsT0FBTztJQUVwRixNQUFNLENBQUMsYUFBYSxDQUFDLG9CQUVkLEdBQUcsQ0FBQyxXQUFXLGdDQUNELEdBQUcsQ0FBQyxJQUFJLEVBQUUsd0JBRXpCLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxrQkFDekMsSUFBSSxDQUFDLFdBQVcsd0NBRW5CLElBQUksQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLElBQUksYUFDMUIsRUFKK0MsQ0FJL0MsQ0FBQyxDQUFDLHdCQUVELFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxrQkFDekMsSUFBSSxDQUFDLFdBQVcsd0NBRW5CLElBQUksQ0FBQyxJQUFJLFdBQU0sSUFBSSxDQUFDLElBQUksY0FDM0IsRUFKK0MsQ0FJL0MsQ0FBQyxDQUFDLDhCQUlOLENBQUMsQ0FBQTtBQUNKLENBQUM7QUF2QkQsNENBdUJDO0FBRUQsd0hBQXdIO0FBRXhILGtCQUF5QixHQUFVO0lBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxxQkFBNEIsSUFBYSxFQUFFLE1BQWM7SUFDdkQsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFBO0FBQzNCLENBQUM7QUFGRCxrQ0FFQztBQUVELHlHQUF5RztBQUN6RywyQ0FBMkM7QUFDM0MsR0FBRztBQUVILHdIQUF3SDtBQUN4SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmluaXRpb24gfSBmcm9tIFwiLi9EZWZpbml0aW9uXCJcblxuY29uc3QgSU5DTFVERV9OQU1FU1BBQ0VTID0gZmFsc2VcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRlZmluaXRpb24oZGVmOiBEZWZpbml0aW9uPGFueT4pIHtcbiAgY29uc3Qgd2l0aE5hbWVzcGFjZTogKHM6IHN0cmluZykgPT4gc3RyaW5nID0gcyA9PiBJTkNMVURFX05BTUVTUEFDRVMgPyBzIDogcyAvLyBUT0RPXG5cbiAgcmV0dXJuIHdpdGhOYW1lc3BhY2UoYFxuICAgIFxuICAgIC8vICR7ZGVmLmRlc2NyaXB0aW9ufX1cbiAgICBleHBvcnQgaW50ZXJmYWNlICR7ZGVmLm5hbWUoKX0ge1xuICAgIFxuICAgICAgJHtyZXBlYXRlZChkZWYucmVxdWlyZWRQcm9wZXJ0aWVzKCkubWFwKHByb3AgPT4gYFxuICAgICAgICAvLyAke3Byb3AuZGVzY3JpcHRpb259XG4gICAgICAgIC8vIEByZXF1aXJlZFxuICAgICAgICAke3Byb3AubmFtZX06ICR7cHJvcC50eXBlfVxuICAgICAgYCkpfVxuICAgICAgXG4gICAgICAke3JlcGVhdGVkKGRlZi5vcHRpb25hbFByb3BlcnRpZXMoKS5tYXAocHJvcCA9PiBgXG4gICAgICAgIC8vICR7cHJvcC5kZXNjcmlwdGlvbn1cbiAgICAgICAgLy8gQG9wdGlvbmFsXG4gICAgICAgICR7cHJvcC5uYW1lfT86ICR7cHJvcC50eXBlfTtcbiAgICAgIGApKX1cbiAgICAgIFxuICAgIH1cbiAgICBcbiAgYClcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZChhbnk6IGFueVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFueS5tYXAobyA9PiBvLnRvU3RyaW5nKCkpLmpvaW4oXCJcXG5cIilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmRpdGlvbmFsKGV4cHI6IGJvb2xlYW4sIG91dHB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGV4cHIgPyBvdXRwdXQgOiBcIlwiXG59XG5cbi8vZnVuY3Rpb24gYmluYXJ5PFQ+KGxlZnQ6IChmcm9tOiBUKSA9PiBzdHJpbmcsIHJpZ2h0OiAoZnJvbTogVCkgPT4gc3RyaW5nKSA6IChleHByOiBib29sZWFuKSA9PiBzdHJpbmcge1xuLy8gIHJldHVybiAoZXhwcjogYm9vbGVhbikgPT4gZXhwciA/IGxlZnQoKVxuLy99XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKlxuLypcbntcbiAgXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kTGlzdFwiOiB7XG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlBvZExpc3QgaXMgYSBsaXN0IG9mIFBvZHMuXCIsXG4gICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgICBcIml0ZW1zXCJcbiAgICBdLFxuICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICBcImFwaVZlcnNpb25cIjoge1xuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQVBJVmVyc2lvbiBkZWZpbmVzIHRoZSB2ZXJzaW9uZWQgc2NoZW1hIG9mIHRoaXMgcmVwcmVzZW50YXRpb24gb2YgYW4gb2JqZWN0LiBTZXJ2ZXJzIHNob3VsZCBjb252ZXJ0IHJlY29nbml6ZWQgc2NoZW1hcyB0byB0aGUgbGF0ZXN0IGludGVybmFsIHZhbHVlLCBhbmQgbWF5IHJlamVjdCB1bnJlY29nbml6ZWQgdmFsdWVzLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCNyZXNvdXJjZXNcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgIH0sXG4gICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxpc3Qgb2YgcG9kcy4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWRcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuUG9kXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwia2luZFwiOiB7XG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJLaW5kIGlzIGEgc3RyaW5nIHZhbHVlIHJlcHJlc2VudGluZyB0aGUgUkVTVCByZXNvdXJjZSB0aGlzIG9iamVjdCByZXByZXNlbnRzLiBTZXJ2ZXJzIG1heSBpbmZlciB0aGlzIGZyb20gdGhlIGVuZHBvaW50IHRoZSBjbGllbnQgc3VibWl0cyByZXF1ZXN0cyB0by4gQ2Fubm90IGJlIHVwZGF0ZWQuIEluIENhbWVsQ2FzZS4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjdHlwZXMta2luZHNcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgIH0sXG4gICAgICBcIm1ldGFkYXRhXCI6IHtcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YW5kYXJkIGxpc3QgbWV0YWRhdGEuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3R5cGVzLWtpbmRzXCIsXG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaW1hY2hpbmVyeS5wa2cuYXBpcy5tZXRhLnYxLkxpc3RNZXRhXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwieC1rdWJlcm5ldGVzLWdyb3VwLXZlcnNpb24ta2luZFwiOiBbXG4gICAgICB7XG4gICAgICAgIFwiZ3JvdXBcIjogXCJcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IFwidjFcIixcbiAgICAgICAgXCJraW5kXCI6IFwiUG9kTGlzdFwiXG4gICAgICB9XG4gICAgXVxuICB9XG59XG4qL1xuIl19