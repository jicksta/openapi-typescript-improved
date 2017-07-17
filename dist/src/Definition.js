"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Definition = (function () {
    function Definition(fullName, source) {
        this.fullName = fullName;
        this.description = source.description;
        this.required = source.required;
        this.properties = this.properties ? Object.entries(source.properties).map(function (_a) {
            var name = _a[0], prop = _a[1];
            return new Property(name, prop);
        }) : [];
    }
    Definition.prototype.name = function () {
        var match = /^(.+\.)?([^.]+)$/.exec(this.fullName);
        if (!match)
            throw new Error("No name found!");
        return match[2];
    };
    Definition.prototype.namespace = function () {
        if (this.hasNamespace()) {
            var match = /^(.+)\.[^.]+$/.exec(this.fullName);
            if (match)
                return match[1];
        }
        throw new Error("Does not have a namespace!");
    };
    Definition.prototype.hasNamespace = function () {
        return !/^[^.]+$/.test(this.fullName);
    };
    Definition.prototype.requiredProperties = function () {
        var _this = this;
        return this.properties.filter(function (prop) { return _this.required.indexOf(prop.name) !== -1; });
    };
    Definition.prototype.optionalProperties = function () {
        var _this = this;
        return this.properties.filter(function (prop) { return _this.required.indexOf(prop.name) === -1; });
    };
    return Definition;
}());
exports.Definition = Definition;
var Property = (function () {
    function Property(name, source) {
        this.name = name;
        this.type = source.name;
        this.required = source.required;
    }
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxvQkFBWSxRQUFnQixFQUFFLE1BQXNCO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVk7Z0JBQVgsWUFBSSxFQUFFLFlBQUk7WUFBTSxPQUFBLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFBeEIsQ0FBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUM1SCxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNFLElBQU0sS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRU0sOEJBQVMsR0FBaEI7UUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVCLENBQUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVNLGlDQUFZLEdBQW5CO1FBQ0UsTUFBTSxDQUFDLENBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVNLHVDQUFrQixHQUF6QjtRQUFBLGlCQUVDO1FBREMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQUVNLHVDQUFrQixHQUF6QjtRQUFBLGlCQUVDO1FBREMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUE7SUFDaEYsQ0FBQztJQUVILGlCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSxnQ0FBVTtBQTREdkI7SUFNRSxrQkFBWSxJQUFZLEVBQUUsTUFBaUI7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVmaW5pdGlvbjxUPiBpbXBsZW1lbnRzIElEZWZpbml0aW9uPFQ+IHtcblxuICAvLyBlLmcuIFwiaW8uazhzLmFwaS5jb3JlLnYxLlBvZExpc3RcIlxuICBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZztcblxuICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBwdWJsaWMgcmVxdWlyZWQ6IHN0cmluZ1tdO1xuXG4gIHB1YmxpYyBwcm9wZXJ0aWVzOiBQcm9wZXJ0eVtdXG5cbiAgY29uc3RydWN0b3IoZnVsbE5hbWU6IHN0cmluZywgc291cmNlOiBJRGVmaW5pdGlvbjxUPikge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBzb3VyY2UuZGVzY3JpcHRpb25cbiAgICB0aGlzLnJlcXVpcmVkID0gc291cmNlLnJlcXVpcmVkXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzID8gT2JqZWN0LmVudHJpZXMoc291cmNlLnByb3BlcnRpZXMpLm1hcCgoW25hbWUsIHByb3BdKSA9PiBuZXcgUHJvcGVydHkobmFtZSwgcHJvcCkpIDogW11cbiAgfVxuXG4gIHB1YmxpYyBuYW1lKCkgOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdGNoID0gL14oLitcXC4pPyhbXi5dKykkLy5leGVjKHRoaXMuZnVsbE5hbWUpXG4gICAgaWYoIW1hdGNoKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBuYW1lIGZvdW5kIVwiKVxuICAgIHJldHVybiBtYXRjaFsyXVxuICB9XG5cbiAgcHVibGljIG5hbWVzcGFjZSgpIDogc3RyaW5nIHtcbiAgICBpZih0aGlzLmhhc05hbWVzcGFjZSgpKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IC9eKC4rKVxcLlteLl0rJC8uZXhlYyh0aGlzLmZ1bGxOYW1lKVxuICAgICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hbMV1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9lcyBub3QgaGF2ZSBhIG5hbWVzcGFjZSFcIilcbiAgfVxuXG4gIHB1YmxpYyBoYXNOYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuICEgL15bXi5dKyQvLnRlc3QodGhpcy5mdWxsTmFtZSlcbiAgfVxuXG4gIHB1YmxpYyByZXF1aXJlZFByb3BlcnRpZXMoKSA6IFByb3BlcnR5W10ge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZmlsdGVyKHByb3AgPT4gdGhpcy5yZXF1aXJlZC5pbmRleE9mKHByb3AubmFtZSkgIT09IC0xKVxuICB9XG5cbiAgcHVibGljIG9wdGlvbmFsUHJvcGVydGllcygpIDogUHJvcGVydHlbXSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiB0aGlzLnJlcXVpcmVkLmluZGV4T2YocHJvcC5uYW1lKSA9PT0gLTEpXG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEZWZpbml0aW9uPEdlbmVyYXRlZFR5cGU+IHtcblxuICBmdWxsTmFtZTogc3RyaW5nXG5cbiAgcHJvcGVydGllczogSVByb3BlcnR5W11cblxuICAvLyBlLmcuIFwiUG9kTGlzdCBpcyBhIGxpc3Qgb2YgUG9kc1wiXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgLy8gZS5nLlxuXG4gIC8vIGUuZy4gW1wiaXRlbXNcIl1cbiAgcmVxdWlyZWQ6IHN0cmluZ1tdXG5cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5IGltcGxlbWVudHMgSVByb3BlcnR5IHtcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgcHVibGljIHJlcXVpcmVkOiBib29sZWFuO1xuICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNvdXJjZTogSVByb3BlcnR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSBzb3VyY2UubmFtZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gc291cmNlLnJlcXVpcmVkO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcGVydHkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG4iXX0=