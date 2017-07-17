#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var OpenAPIFormat_1 = require("./OpenAPIFormat");
var templates_1 = require("./templates");
var referencePath = fs.realpathSync(__dirname + "/../reference");
var exampleK8sJSON = referencePath + "/kubernetes.json";
var k8s = JSON.parse(fs.readFileSync(exampleK8sJSON).toString());
var api = new OpenAPIFormat_1.OpenAPIFormat(k8s);
var podListDefinition = api.definition("io.k8s.api.core.v1.PodList");
//templates.definition(podListDefinition)
console.log(podListDefinition);
console.log("\n\n", templates_1.renderDefinition(podListDefinition));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUJBQXdCO0FBQ3hCLGlEQUE2QztBQUM3Qyx5Q0FBOEM7QUFHOUMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLENBQUM7QUFDbkUsSUFBTSxjQUFjLEdBQUcsYUFBYSxHQUFHLGtCQUFrQixDQUFDO0FBRTFELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLElBQU0sR0FBRyxHQUFHLElBQUksNkJBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVuQyxJQUFNLGlCQUFpQixHQUFvQixHQUFHLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDeEYseUNBQXlDO0FBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSw0QkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiB0cy1ub2RlXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIlxuaW1wb3J0IHtPcGVuQVBJRm9ybWF0fSBmcm9tIFwiLi9PcGVuQVBJRm9ybWF0XCJcbmltcG9ydCB7IHJlbmRlckRlZmluaXRpb24gfSBmcm9tIFwiLi90ZW1wbGF0ZXNcIlxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCIuL0RlZmluaXRpb25cIlxuXG5jb25zdCByZWZlcmVuY2VQYXRoID0gZnMucmVhbHBhdGhTeW5jKF9fZGlybmFtZSArIFwiLy4uL3JlZmVyZW5jZVwiKTtcbmNvbnN0IGV4YW1wbGVLOHNKU09OID0gcmVmZXJlbmNlUGF0aCArIFwiL2t1YmVybmV0ZXMuanNvblwiO1xuXG5jb25zdCBrOHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhleGFtcGxlSzhzSlNPTikudG9TdHJpbmcoKSk7XG5jb25zdCBhcGkgPSBuZXcgT3BlbkFQSUZvcm1hdChrOHMpO1xuXG5jb25zdCBwb2RMaXN0RGVmaW5pdGlvbjogRGVmaW5pdGlvbjxhbnk+ID0gYXBpLmRlZmluaXRpb24oXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kTGlzdFwiKTtcbi8vdGVtcGxhdGVzLmRlZmluaXRpb24ocG9kTGlzdERlZmluaXRpb24pXG5cbmNvbnNvbGUubG9nKHBvZExpc3REZWZpbml0aW9uKTtcbmNvbnNvbGUubG9nKFwiXFxuXFxuXCIsIHJlbmRlckRlZmluaXRpb24ocG9kTGlzdERlZmluaXRpb24pKTsiXX0=