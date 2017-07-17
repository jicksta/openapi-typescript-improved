export declare abstract class SwaggerDefinition<I> {
}
export declare class PodStatus {
}
export declare class ObjectMetadata {
}
export declare class Container {
}
export interface Service {
    "/api/": string;
}
/**
 * PodSpec is a description of a pod.
 */
export interface IPodSpec {
    containers: Container[];
}
