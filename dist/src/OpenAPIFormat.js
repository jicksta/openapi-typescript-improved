"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Definition_1 = require("./Definition");
var OpenAPIFormat = (function () {
    function OpenAPIFormat(source) {
        this.info = source.info;
        this.swagger = source.swagger;
        this.paths = source.paths;
        this.definitions = Object.entries(source.definitions).reduce(function (memo, _a) {
            var fullName = _a[0], definition = _a[1];
            memo[fullName] = new Definition_1.Definition(fullName, definition);
            return memo;
        }, {});
    }
    OpenAPIFormat.prototype.definition = function (name) {
        var def = this.definitions[name];
        if (!def)
            throw new Error("Could not find definition named '" + name + "'");
        return def;
    };
    return OpenAPIFormat;
}());
exports.OpenAPIFormat = OpenAPIFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkFQSUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9PcGVuQVBJRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNEO0FBU3REO0lBUUUsdUJBQVksTUFBZ0I7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsRUFBc0I7Z0JBQXJCLGdCQUFRLEVBQUUsa0JBQVU7WUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNiLENBQUMsRUFBMEMsRUFBRSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUMxRSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmluaXRpb24sIElEZWZpbml0aW9uIH0gZnJvbSBcIi4vRGVmaW5pdGlvblwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wZW5BUEkge1xuICBzd2FnZ2VyOiBzdHJpbmdcbiAgcGF0aHM6IG9iamVjdFxuICBpbmZvOiB7IHRpdGxlOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9XG4gIGRlZmluaXRpb25zOiB7W2Z1bGxOYW1lOiBzdHJpbmddOiBJRGVmaW5pdGlvbjxhbnk+fVxufVxuXG5leHBvcnQgY2xhc3MgT3BlbkFQSUZvcm1hdCBpbXBsZW1lbnRzIElPcGVuQVBJIHtcblxuICBkZWZpbml0aW9uczoge1tmdWxsTmFtZTogc3RyaW5nXTogRGVmaW5pdGlvbjxhbnk+fVxuXG4gIHN3YWdnZXI6IHN0cmluZ1xuICBwYXRoczogb2JqZWN0XG4gIGluZm86IHsgdGl0bGU6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nOyB9XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBJT3BlbkFQSSkge1xuICAgIHRoaXMuaW5mbyA9IHNvdXJjZS5pbmZvXG4gICAgdGhpcy5zd2FnZ2VyID0gc291cmNlLnN3YWdnZXJcbiAgICB0aGlzLnBhdGhzID0gc291cmNlLnBhdGhzXG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHNvdXJjZS5kZWZpbml0aW9ucykucmVkdWNlKChtZW1vLCBbZnVsbE5hbWUsIGRlZmluaXRpb25dKSA9PiB7XG4gICAgICBtZW1vW2Z1bGxOYW1lXSA9IG5ldyBEZWZpbml0aW9uKGZ1bGxOYW1lLCBkZWZpbml0aW9uKVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LCA8e1tmdWxsTmFtZTogc3RyaW5nXTogRGVmaW5pdGlvbjxhbnk+fT4ge30pXG4gIH1cblxuICBkZWZpbml0aW9uKG5hbWU6IHN0cmluZykgOiBEZWZpbml0aW9uPGFueT4ge1xuICAgIGNvbnN0IGRlZiA9IHRoaXMuZGVmaW5pdGlvbnNbbmFtZV1cbiAgICBpZighZGVmKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBkZWZpbml0aW9uIG5hbWVkICdcIiArIG5hbWUgKyBcIidcIilcbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbn0iXX0=