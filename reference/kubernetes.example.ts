export abstract class SwaggerDefinition<I> {
}

function Definition(fullPath: string) : void { }
function Reference(fullPath: string) : void { }

// @Definition("io.k8s.api.core.v1.Pod")
// @description export class Pod extends SwaggerDefinition<IPod> implements IPod { }

namespace io.k8s.api.core.v1 {

  /**
   * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
   */
  //@Definition("io.k8s.api.core.v1.Pod")
  export interface IPod {
    // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    apiVersion?: string

    // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    kind?: string

    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    metadata?: ObjectMetadata

    // Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    spec?: IPodSpec;

    // Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    status?: PodStatus
  }

}

export class PodStatus {}
export class ObjectMetadata {}
export class Container {}

export interface Service {
  "/api/": string
}

/**
 * PodSpec is a description of a pod.
 */
export interface IPodSpec {
  containers: Container[]
}

/*
"io.k8s.api.core.v1.PodSpec": {
  "description": "PodSpec is a description of a pod.",
      "required": [
    "containers"
  ],
      "properties": {
    "activeDeadlineSeconds": {
      "description": "Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.",
          "type": "integer",
          "format": "int64"
    },
    "affinity": {
      "description": "If specified, the pod's scheduling constraints",
          "$ref": "#/definitions/io.k8s.api.core.v1.Affinity"
    },
    "automountServiceAccountToken": {
      "description": "AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.",
          "type": "boolean"
    },
    "containers": {
      "description": "List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.Container"
      },
      "x-kubernetes-patch-merge-key": "name",
          "x-kubernetes-patch-strategy": "merge"
    },
    "dnsPolicy": {
      "description": "Set DNS policy for containers within the pod. One of 'ClusterFirstWithHostNet', 'ClusterFirst' or 'Default'. Defaults to \"ClusterFirst\". To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.",
          "type": "string"
    },
    "hostAliases": {
      "description": "HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.HostAlias"
      },
      "x-kubernetes-patch-merge-key": "ip",
          "x-kubernetes-patch-strategy": "merge"
    },
    "hostIPC": {
      "description": "Use the host's ipc namespace. Optional: Default to false.",
          "type": "boolean"
    },
    "hostNetwork": {
      "description": "Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.",
          "type": "boolean"
    },
    "hostPID": {
      "description": "Use the host's pid namespace. Optional: Default to false.",
          "type": "boolean"
    },
    "hostname": {
      "description": "Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.",
          "type": "string"
    },
    "imagePullSecrets": {
      "description": "ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.LocalObjectReference"
      },
      "x-kubernetes-patch-merge-key": "name",
          "x-kubernetes-patch-strategy": "merge"
    },
    "initContainers": {
      "description": "List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.Container"
      },
      "x-kubernetes-patch-merge-key": "name",
          "x-kubernetes-patch-strategy": "merge"
    },
    "nodeName": {
      "description": "NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.",
          "type": "string"
    },
    "nodeSelector": {
      "description": "NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/",
          "type": "object",
          "additionalProperties": {
        "type": "string"
      }
    },
    "priority": {
      "description": "The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.",
          "type": "integer",
          "format": "int32"
    },
    "priorityClassName": {
      "description": "If specified, indicates the pod's priority. \"SYSTEM\" is a special keyword which indicates the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.",
          "type": "string"
    },
    "restartPolicy": {
      "description": "Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy",
          "type": "string"
    },
    "schedulerName": {
      "description": "If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.",
          "type": "string"
    },
    "securityContext": {
      "description": "SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.",
          "$ref": "#/definitions/io.k8s.api.core.v1.PodSecurityContext"
    },
    "serviceAccount": {
      "description": "DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.",
          "type": "string"
    },
    "serviceAccountName": {
      "description": "ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
          "type": "string"
    },
    "subdomain": {
      "description": "If specified, the fully qualified Pod hostname will be \"\u003chostname\u003e.\u003csubdomain\u003e.\u003cpod namespace\u003e.svc.\u003ccluster domain\u003e\". If not specified, the pod will not have a domainname at all.",
          "type": "string"
    },
    "terminationGracePeriodSeconds": {
      "description": "Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.",
          "type": "integer",
          "format": "int64"
    },
    "tolerations": {
      "description": "If specified, the pod's tolerations.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.Toleration"
      }
    },
    "volumes": {
      "description": "List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.Volume"
      },
      "x-kubernetes-patch-merge-key": "name",
          "x-kubernetes-patch-strategy": "merge"
    }
  }
}
*/

/*
"io.k8s.api.core.v1.Pod": {
      "properties": {
    "apiVersion": {
      "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources",
          "type": "string"
    },
    "kind": {
      "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds",
          "type": "string"
    },
    "metadata": {
      "description": "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"
    },
    "spec": {
      "description": "Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status",
          "$ref": "#/definitions/io.k8s.api.core.v1.PodSpec"
    },
    "status": {
      "description": "Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status",
          "$ref": "#/definitions/io.k8s.api.core.v1.PodStatus"
    }
  },
  "x-kubernetes-group-version-kind": [
    {
      "group": "",
      "version": "v1",
      "kind": "Pod"
    }
  ]
}
*/
/*
"io.k8s.api.core.v1.PodAffinity": {
  "description": "Pod affinity is a group of inter pod affinity scheduling rules.",
      "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "description": "The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.WeightedPodAffinityTerm"
      }
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "description": "NOT YET IMPLEMENTED. TODO: Uncomment field once it is implemented. If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system will try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. RequiredDuringSchedulingRequiredDuringExecution []PodAffinityTerm  `json:\"requiredDuringSchedulingRequiredDuringExecution,omitempty\"` If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.PodAffinityTerm"
      }
    }
  }
}
*/
/*
"io.k8s.api.core.v1.PodAffinityTerm": {
  "description": "Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key \u003ctopologyKey\u003e tches that of any node on which a pod of the set of pods is running",
      "properties": {
    "labelSelector": {
      "description": "A label query over a set of resources, in this case pods.",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector"
    },
    "namespaces": {
      "description": "namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means \"this pod's namespace\"",
          "type": "array",
          "items": {
        "type": "string"
      }
    },
    "topologyKey": {
      "description": "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. For PreferredDuringScheduling pod anti-affinity, empty topologyKey is interpreted as \"all topologies\" (\"all topologies\" here means all the topologyKeys indicated by scheduler command-line argument --failure-domains); for affinity and for RequiredDuringScheduling pod anti-affinity, empty topologyKey is not allowed.",
          "type": "string"
    }
  }
}
*/
/*
"io.k8s.api.core.v1.PodAntiAffinity": {
  "description": "Pod anti affinity is a group of inter pod anti affinity scheduling rules.",
      "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "description": "The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.WeightedPodAffinityTerm"
      }
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "description": "NOT YET IMPLEMENTED. TODO: Uncomment field once it is implemented. If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system will try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. RequiredDuringSchedulingRequiredDuringExecution []PodAffinityTerm  `json:\"requiredDuringSchedulingRequiredDuringExecution,omitempty\"` If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.PodAffinityTerm"
      }
    }
  }
}
 */
/*

 "io.k8s.api.core.v1.PodCondition": {
  "description": "PodCondition contains details for the current condition of this pod.",
      "required": [
    "type",
    "status"
  ],
      "properties": {
    "lastProbeTime": {
      "description": "Last time we probed the condition.",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time"
    },
    "lastTransitionTime": {
      "description": "Last time the condition transitioned from one status to another.",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time"
    },
    "message": {
      "description": "Human-readable message indicating details about last transition.",
          "type": "string"
    },
    "reason": {
      "description": "Unique, one-word, CamelCase reason for the condition's last transition.",
          "type": "string"
    },
    "status": {
      "description": "Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions",
          "type": "string"
    },
    "type": {
      "description": "Type is the type of the condition. Currently only Ready. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions",
          "type": "string"
    }
  }
}
 */
/*

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
 */
/*

 "io.k8s.api.core.v1.PodSecurityContext": {
  "description": "PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.",
      "properties": {
    "fsGroup": {
      "description": "A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:\n\n1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----\n\nIf unset, the Kubelet will not modify the ownership and permissions of any volume.",
          "type": "integer",
          "format": "int64"
    },
    "runAsNonRoot": {
      "description": "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
          "type": "boolean"
    },
    "runAsUser": {
      "description": "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
          "type": "integer",
          "format": "int64"
    },
    "seLinuxOptions": {
      "description": "The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.",
          "$ref": "#/definitions/io.k8s.api.core.v1.SELinuxOptions"
    },
    "supplementalGroups": {
      "description": "A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.",
          "type": "array",
          "items": {
        "type": "integer",
            "format": "int64"
      }
    }
  }
}
 */
/*

/*

 "io.k8s.api.core.v1.PodStatus": {
  "description": "PodStatus represents information about the status of a pod. Status may trail the actual state of a system.",
      "properties": {
    "conditions": {
      "description": "Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.PodCondition"
      },
      "x-kubernetes-patch-merge-key": "type",
          "x-kubernetes-patch-strategy": "merge"
    },
    "containerStatuses": {
      "description": "The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.ContainerStatus"
      }
    },
    "hostIP": {
      "description": "IP address of the host to which the pod is assigned. Empty if not yet scheduled.",
          "type": "string"
    },
    "initContainerStatuses": {
      "description": "The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.ContainerStatus"
      }
    },
    "message": {
      "description": "A human readable message indicating details about why the pod is in this condition.",
          "type": "string"
    },
    "phase": {
      "description": "Current condition of the pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase",
          "type": "string"
    },
    "podIP": {
      "description": "IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.",
          "type": "string"
    },
    "qosClass": {
      "description": "The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://github.com/kubernetes/kubernetes/blob/master/docs/design/resource-qos.md",
          "type": "string"
    },
    "reason": {
      "description": "A brief CamelCase message indicating details about why the pod is in this state. e.g. 'OutOfDisk'",
          "type": "string"
    },
    "startTime": {
      "description": "RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time"
    }
  }
}
 */
/*

 "io.k8s.api.core.v1.PodTemplate": {
  "description": "PodTemplate describes a template for creating copies of a predefined pod.",
      "properties": {
    "apiVersion": {
      "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources",
          "type": "string"
    },
    "kind": {
      "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds",
          "type": "string"
    },
    "metadata": {
      "description": "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"
    },
    "template": {
      "description": "Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status",
          "$ref": "#/definitions/io.k8s.api.core.v1.PodTemplateSpec"
    }
  },
  "x-kubernetes-group-version-kind": [
    {
      "group": "",
      "version": "v1",
      "kind": "PodTemplate"
    }
  ]
}
 */
/*

 "io.k8s.api.core.v1.PodTemplateList": {
  "description": "PodTemplateList is a list of PodTemplates.",
      "required": [
    "items"
  ],
      "properties": {
    "apiVersion": {
      "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources",
          "type": "string"
    },
    "items": {
      "description": "List of pod templates",
          "type": "array",
          "items": {
        "$ref": "#/definitions/io.k8s.api.core.v1.PodTemplate"
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
      "kind": "PodTemplateList"
    }
  ]
}
 */
/*
 "io.k8s.api.core.v1.PodTemplateSpec": {
  "description": "PodTemplateSpec describes the data a pod should have when created from a template",
      "properties": {
    "metadata": {
      "description": "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata",
          "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"
    },
    "spec": {
      "description": "Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status",
          "$ref": "#/definitions/io.k8s.api.core.v1.PodSpec"
    }
  }
},
*/