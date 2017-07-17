"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwaggerDefinition = (function () {
    function SwaggerDefinition() {
    }
    return SwaggerDefinition;
}());
exports.SwaggerDefinition = SwaggerDefinition;
function Definition(fullPath) { }
function Reference(fullPath) { }
var PodStatus = (function () {
    function PodStatus() {
    }
    return PodStatus;
}());
exports.PodStatus = PodStatus;
var ObjectMetadata = (function () {
    function ObjectMetadata() {
    }
    return ObjectMetadata;
}());
exports.ObjectMetadata = ObjectMetadata;
var Container = (function () {
    function Container() {
    }
    return Container;
}());
exports.Container = Container;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ViZXJuZXRlcy5leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmVmZXJlbmNlL2t1YmVybmV0ZXMuZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFDQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURxQiw4Q0FBaUI7QUFHdkMsb0JBQW9CLFFBQWdCLElBQVcsQ0FBQztBQUNoRCxtQkFBbUIsUUFBZ0IsSUFBVyxDQUFDO0FBOEIvQztJQUFBO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWiw4QkFBUztBQUN0QjtJQUFBO0lBQTZCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFBOUIsSUFBOEI7QUFBakIsd0NBQWM7QUFDM0I7SUFBQTtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosOEJBQVM7QUFhdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBK0lFO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0NFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRERztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0VBY0UiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgU3dhZ2dlckRlZmluaXRpb248ST4ge1xufVxuXG5mdW5jdGlvbiBEZWZpbml0aW9uKGZ1bGxQYXRoOiBzdHJpbmcpIDogdm9pZCB7IH1cbmZ1bmN0aW9uIFJlZmVyZW5jZShmdWxsUGF0aDogc3RyaW5nKSA6IHZvaWQgeyB9XG5cbi8vIEBEZWZpbml0aW9uKFwiaW8uazhzLmFwaS5jb3JlLnYxLlBvZFwiKVxuLy8gQGRlc2NyaXB0aW9uIGV4cG9ydCBjbGFzcyBQb2QgZXh0ZW5kcyBTd2FnZ2VyRGVmaW5pdGlvbjxJUG9kPiBpbXBsZW1lbnRzIElQb2QgeyB9XG5cbm5hbWVzcGFjZSBpby5rOHMuYXBpLmNvcmUudjEge1xuXG4gIC8qKlxuICAgKiBQb2QgaXMgYSBjb2xsZWN0aW9uIG9mIGNvbnRhaW5lcnMgdGhhdCBjYW4gcnVuIG9uIGEgaG9zdC4gVGhpcyByZXNvdXJjZSBpcyBjcmVhdGVkIGJ5IGNsaWVudHMgYW5kIHNjaGVkdWxlZCBvbnRvIGhvc3RzLlxuICAgKi9cbiAgLy9ARGVmaW5pdGlvbihcImlvLms4cy5hcGkuY29yZS52MS5Qb2RcIilcbiAgZXhwb3J0IGludGVyZmFjZSBJUG9kIHtcbiAgICAvLyBBUElWZXJzaW9uIGRlZmluZXMgdGhlIHZlcnNpb25lZCBzY2hlbWEgb2YgdGhpcyByZXByZXNlbnRhdGlvbiBvZiBhbiBvYmplY3QuIFNlcnZlcnMgc2hvdWxkIGNvbnZlcnQgcmVjb2duaXplZCBzY2hlbWFzIHRvIHRoZSBsYXRlc3QgaW50ZXJuYWwgdmFsdWUsIGFuZCBtYXkgcmVqZWN0IHVucmVjb2duaXplZCB2YWx1ZXMuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3Jlc291cmNlc1xuICAgIGFwaVZlcnNpb24/OiBzdHJpbmdcblxuICAgIC8vIEtpbmQgaXMgYSBzdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBSRVNUIHJlc291cmNlIHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuIFNlcnZlcnMgbWF5IGluZmVyIHRoaXMgZnJvbSB0aGUgZW5kcG9pbnQgdGhlIGNsaWVudCBzdWJtaXRzIHJlcXVlc3RzIHRvLiBDYW5ub3QgYmUgdXBkYXRlZC4gSW4gQ2FtZWxDYXNlLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCN0eXBlcy1raW5kc1xuICAgIGtpbmQ/OiBzdHJpbmdcblxuICAgIC8vIFN0YW5kYXJkIG9iamVjdCdzIG1ldGFkYXRhLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCNtZXRhZGF0YVxuICAgIG1ldGFkYXRhPzogT2JqZWN0TWV0YWRhdGFcblxuICAgIC8vIFNwZWNpZmljYXRpb24gb2YgdGhlIGRlc2lyZWQgYmVoYXZpb3Igb2YgdGhlIHBvZC4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjc3BlYy1hbmQtc3RhdHVzXG4gICAgc3BlYz86IElQb2RTcGVjO1xuXG4gICAgLy8gTW9zdCByZWNlbnRseSBvYnNlcnZlZCBzdGF0dXMgb2YgdGhlIHBvZC4gVGhpcyBkYXRhIG1heSBub3QgYmUgdXAgdG8gZGF0ZS4gUG9wdWxhdGVkIGJ5IHRoZSBzeXN0ZW0uIFJlYWQtb25seS4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjc3BlYy1hbmQtc3RhdHVzXG4gICAgc3RhdHVzPzogUG9kU3RhdHVzXG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUG9kU3RhdHVzIHt9XG5leHBvcnQgY2xhc3MgT2JqZWN0TWV0YWRhdGEge31cbmV4cG9ydCBjbGFzcyBDb250YWluZXIge31cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlIHtcbiAgXCIvYXBpL1wiOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQb2RTcGVjIGlzIGEgZGVzY3JpcHRpb24gb2YgYSBwb2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVBvZFNwZWMge1xuICBjb250YWluZXJzOiBDb250YWluZXJbXVxufVxuXG4vKlxuXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kU3BlY1wiOiB7XG4gIFwiZGVzY3JpcHRpb25cIjogXCJQb2RTcGVjIGlzIGEgZGVzY3JpcHRpb24gb2YgYSBwb2QuXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICBcImNvbnRhaW5lcnNcIlxuICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcImFjdGl2ZURlYWRsaW5lU2Vjb25kc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT3B0aW9uYWwgZHVyYXRpb24gaW4gc2Vjb25kcyB0aGUgcG9kIG1heSBiZSBhY3RpdmUgb24gdGhlIG5vZGUgcmVsYXRpdmUgdG8gU3RhcnRUaW1lIGJlZm9yZSB0aGUgc3lzdGVtIHdpbGwgYWN0aXZlbHkgdHJ5IHRvIG1hcmsgaXQgZmFpbGVkIGFuZCBraWxsIGFzc29jaWF0ZWQgY29udGFpbmVycy4gVmFsdWUgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW50ZWdlclwiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwiaW50NjRcIlxuICAgIH0sXG4gICAgXCJhZmZpbml0eVwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSWYgc3BlY2lmaWVkLCB0aGUgcG9kJ3Mgc2NoZWR1bGluZyBjb25zdHJhaW50c1wiLFxuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLkFmZmluaXR5XCJcbiAgICB9LFxuICAgIFwiYXV0b21vdW50U2VydmljZUFjY291bnRUb2tlblwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQXV0b21vdW50U2VydmljZUFjY291bnRUb2tlbiBpbmRpY2F0ZXMgd2hldGhlciBhIHNlcnZpY2UgYWNjb3VudCB0b2tlbiBzaG91bGQgYmUgYXV0b21hdGljYWxseSBtb3VudGVkLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIlxuICAgIH0sXG4gICAgXCJjb250YWluZXJzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMaXN0IG9mIGNvbnRhaW5lcnMgYmVsb25naW5nIHRvIHRoZSBwb2QuIENvbnRhaW5lcnMgY2Fubm90IGN1cnJlbnRseSBiZSBhZGRlZCBvciByZW1vdmVkLiBUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IG9uZSBjb250YWluZXIgaW4gYSBQb2QuIENhbm5vdCBiZSB1cGRhdGVkLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLkNvbnRhaW5lclwiXG4gICAgICB9LFxuICAgICAgXCJ4LWt1YmVybmV0ZXMtcGF0Y2gtbWVyZ2Uta2V5XCI6IFwibmFtZVwiLFxuICAgICAgICAgIFwieC1rdWJlcm5ldGVzLXBhdGNoLXN0cmF0ZWd5XCI6IFwibWVyZ2VcIlxuICAgIH0sXG4gICAgXCJkbnNQb2xpY3lcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldCBETlMgcG9saWN5IGZvciBjb250YWluZXJzIHdpdGhpbiB0aGUgcG9kLiBPbmUgb2YgJ0NsdXN0ZXJGaXJzdFdpdGhIb3N0TmV0JywgJ0NsdXN0ZXJGaXJzdCcgb3IgJ0RlZmF1bHQnLiBEZWZhdWx0cyB0byBcXFwiQ2x1c3RlckZpcnN0XFxcIi4gVG8gaGF2ZSBETlMgb3B0aW9ucyBzZXQgYWxvbmcgd2l0aCBob3N0TmV0d29yaywgeW91IGhhdmUgdG8gc3BlY2lmeSBETlMgcG9saWN5IGV4cGxpY2l0bHkgdG8gJ0NsdXN0ZXJGaXJzdFdpdGhIb3N0TmV0Jy5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIH0sXG4gICAgXCJob3N0QWxpYXNlc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSG9zdEFsaWFzZXMgaXMgYW4gb3B0aW9uYWwgbGlzdCBvZiBob3N0cyBhbmQgSVBzIHRoYXQgd2lsbCBiZSBpbmplY3RlZCBpbnRvIHRoZSBwb2QncyBob3N0cyBmaWxlIGlmIHNwZWNpZmllZC4gVGhpcyBpcyBvbmx5IHZhbGlkIGZvciBub24taG9zdE5ldHdvcmsgcG9kcy5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGkuY29yZS52MS5Ib3N0QWxpYXNcIlxuICAgICAgfSxcbiAgICAgIFwieC1rdWJlcm5ldGVzLXBhdGNoLW1lcmdlLWtleVwiOiBcImlwXCIsXG4gICAgICAgICAgXCJ4LWt1YmVybmV0ZXMtcGF0Y2gtc3RyYXRlZ3lcIjogXCJtZXJnZVwiXG4gICAgfSxcbiAgICBcImhvc3RJUENcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlVzZSB0aGUgaG9zdCdzIGlwYyBuYW1lc3BhY2UuIE9wdGlvbmFsOiBEZWZhdWx0IHRvIGZhbHNlLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIlxuICAgIH0sXG4gICAgXCJob3N0TmV0d29ya1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSG9zdCBuZXR3b3JraW5nIHJlcXVlc3RlZCBmb3IgdGhpcyBwb2QuIFVzZSB0aGUgaG9zdCdzIG5ldHdvcmsgbmFtZXNwYWNlLiBJZiB0aGlzIG9wdGlvbiBpcyBzZXQsIHRoZSBwb3J0cyB0aGF0IHdpbGwgYmUgdXNlZCBtdXN0IGJlIHNwZWNpZmllZC4gRGVmYXVsdCB0byBmYWxzZS5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCJcbiAgICB9LFxuICAgIFwiaG9zdFBJRFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVXNlIHRoZSBob3N0J3MgcGlkIG5hbWVzcGFjZS4gT3B0aW9uYWw6IERlZmF1bHQgdG8gZmFsc2UuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiXG4gICAgfSxcbiAgICBcImhvc3RuYW1lXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIGhvc3RuYW1lIG9mIHRoZSBQb2QgSWYgbm90IHNwZWNpZmllZCwgdGhlIHBvZCdzIGhvc3RuYW1lIHdpbGwgYmUgc2V0IHRvIGEgc3lzdGVtLWRlZmluZWQgdmFsdWUuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwiaW1hZ2VQdWxsU2VjcmV0c1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW1hZ2VQdWxsU2VjcmV0cyBpcyBhbiBvcHRpb25hbCBsaXN0IG9mIHJlZmVyZW5jZXMgdG8gc2VjcmV0cyBpbiB0aGUgc2FtZSBuYW1lc3BhY2UgdG8gdXNlIGZvciBwdWxsaW5nIGFueSBvZiB0aGUgaW1hZ2VzIHVzZWQgYnkgdGhpcyBQb2RTcGVjLiBJZiBzcGVjaWZpZWQsIHRoZXNlIHNlY3JldHMgd2lsbCBiZSBwYXNzZWQgdG8gaW5kaXZpZHVhbCBwdWxsZXIgaW1wbGVtZW50YXRpb25zIGZvciB0aGVtIHRvIHVzZS4gRm9yIGV4YW1wbGUsIGluIHRoZSBjYXNlIG9mIGRvY2tlciwgb25seSBEb2NrZXJDb25maWcgdHlwZSBzZWNyZXRzIGFyZSBob25vcmVkLiBNb3JlIGluZm86IGh0dHBzOi8va3ViZXJuZXRlcy5pby9kb2NzL2NvbmNlcHRzL2NvbnRhaW5lcnMvaW1hZ2VzI3NwZWNpZnlpbmctaW1hZ2VwdWxsc2VjcmV0cy1vbi1hLXBvZFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLkxvY2FsT2JqZWN0UmVmZXJlbmNlXCJcbiAgICAgIH0sXG4gICAgICBcIngta3ViZXJuZXRlcy1wYXRjaC1tZXJnZS1rZXlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgXCJ4LWt1YmVybmV0ZXMtcGF0Y2gtc3RyYXRlZ3lcIjogXCJtZXJnZVwiXG4gICAgfSxcbiAgICBcImluaXRDb250YWluZXJzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMaXN0IG9mIGluaXRpYWxpemF0aW9uIGNvbnRhaW5lcnMgYmVsb25naW5nIHRvIHRoZSBwb2QuIEluaXQgY29udGFpbmVycyBhcmUgZXhlY3V0ZWQgaW4gb3JkZXIgcHJpb3IgdG8gY29udGFpbmVycyBiZWluZyBzdGFydGVkLiBJZiBhbnkgaW5pdCBjb250YWluZXIgZmFpbHMsIHRoZSBwb2QgaXMgY29uc2lkZXJlZCB0byBoYXZlIGZhaWxlZCBhbmQgaXMgaGFuZGxlZCBhY2NvcmRpbmcgdG8gaXRzIHJlc3RhcnRQb2xpY3kuIFRoZSBuYW1lIGZvciBhbiBpbml0IGNvbnRhaW5lciBvciBub3JtYWwgY29udGFpbmVyIG11c3QgYmUgdW5pcXVlIGFtb25nIGFsbCBjb250YWluZXJzLiBJbml0IGNvbnRhaW5lcnMgbWF5IG5vdCBoYXZlIExpZmVjeWNsZSBhY3Rpb25zLCBSZWFkaW5lc3MgcHJvYmVzLCBvciBMaXZlbmVzcyBwcm9iZXMuIFRoZSByZXNvdXJjZVJlcXVpcmVtZW50cyBvZiBhbiBpbml0IGNvbnRhaW5lciBhcmUgdGFrZW4gaW50byBhY2NvdW50IGR1cmluZyBzY2hlZHVsaW5nIGJ5IGZpbmRpbmcgdGhlIGhpZ2hlc3QgcmVxdWVzdC9saW1pdCBmb3IgZWFjaCByZXNvdXJjZSB0eXBlLCBhbmQgdGhlbiB1c2luZyB0aGUgbWF4IG9mIG9mIHRoYXQgdmFsdWUgb3IgdGhlIHN1bSBvZiB0aGUgbm9ybWFsIGNvbnRhaW5lcnMuIExpbWl0cyBhcmUgYXBwbGllZCB0byBpbml0IGNvbnRhaW5lcnMgaW4gYSBzaW1pbGFyIGZhc2hpb24uIEluaXQgY29udGFpbmVycyBjYW5ub3QgY3VycmVudGx5IGJlIGFkZGVkIG9yIHJlbW92ZWQuIENhbm5vdCBiZSB1cGRhdGVkLiBNb3JlIGluZm86IGh0dHBzOi8va3ViZXJuZXRlcy5pby9kb2NzL2NvbmNlcHRzL3dvcmtsb2Fkcy9wb2RzL2luaXQtY29udGFpbmVycy9cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGkuY29yZS52MS5Db250YWluZXJcIlxuICAgICAgfSxcbiAgICAgIFwieC1rdWJlcm5ldGVzLXBhdGNoLW1lcmdlLWtleVwiOiBcIm5hbWVcIixcbiAgICAgICAgICBcIngta3ViZXJuZXRlcy1wYXRjaC1zdHJhdGVneVwiOiBcIm1lcmdlXCJcbiAgICB9LFxuICAgIFwibm9kZU5hbWVcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5vZGVOYW1lIGlzIGEgcmVxdWVzdCB0byBzY2hlZHVsZSB0aGlzIHBvZCBvbnRvIGEgc3BlY2lmaWMgbm9kZS4gSWYgaXQgaXMgbm9uLWVtcHR5LCB0aGUgc2NoZWR1bGVyIHNpbXBseSBzY2hlZHVsZXMgdGhpcyBwb2Qgb250byB0aGF0IG5vZGUsIGFzc3VtaW5nIHRoYXQgaXQgZml0cyByZXNvdXJjZSByZXF1aXJlbWVudHMuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwibm9kZVNlbGVjdG9yXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOb2RlU2VsZWN0b3IgaXMgYSBzZWxlY3RvciB3aGljaCBtdXN0IGJlIHRydWUgZm9yIHRoZSBwb2QgdG8gZml0IG9uIGEgbm9kZS4gU2VsZWN0b3Igd2hpY2ggbXVzdCBtYXRjaCBhIG5vZGUncyBsYWJlbHMgZm9yIHRoZSBwb2QgdG8gYmUgc2NoZWR1bGVkIG9uIHRoYXQgbm9kZS4gTW9yZSBpbmZvOiBodHRwczovL2t1YmVybmV0ZXMuaW8vZG9jcy9jb25jZXB0cy9jb25maWd1cmF0aW9uL2Fzc2lnbi1wb2Qtbm9kZS9cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHJpb3JpdHlcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBwcmlvcml0eSB2YWx1ZS4gVmFyaW91cyBzeXN0ZW0gY29tcG9uZW50cyB1c2UgdGhpcyBmaWVsZCB0byBmaW5kIHRoZSBwcmlvcml0eSBvZiB0aGUgcG9kLiBXaGVuIFByaW9yaXR5IEFkbWlzc2lvbiBDb250cm9sbGVyIGlzIGVuYWJsZWQsIGl0IHByZXZlbnRzIHVzZXJzIGZyb20gc2V0dGluZyB0aGlzIGZpZWxkLiBUaGUgYWRtaXNzaW9uIGNvbnRyb2xsZXIgcG9wdWxhdGVzIHRoaXMgZmllbGQgZnJvbSBQcmlvcml0eUNsYXNzTmFtZS4gVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgdGhlIHByaW9yaXR5LlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcImludDMyXCJcbiAgICB9LFxuICAgIFwicHJpb3JpdHlDbGFzc05hbWVcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklmIHNwZWNpZmllZCwgaW5kaWNhdGVzIHRoZSBwb2QncyBwcmlvcml0eS4gXFxcIlNZU1RFTVxcXCIgaXMgYSBzcGVjaWFsIGtleXdvcmQgd2hpY2ggaW5kaWNhdGVzIHRoZSBoaWdoZXN0IHByaW9yaXR5LiBBbnkgb3RoZXIgbmFtZSBtdXN0IGJlIGRlZmluZWQgYnkgY3JlYXRpbmcgYSBQcmlvcml0eUNsYXNzIG9iamVjdCB3aXRoIHRoYXQgbmFtZS4gSWYgbm90IHNwZWNpZmllZCwgdGhlIHBvZCBwcmlvcml0eSB3aWxsIGJlIGRlZmF1bHQgb3IgemVybyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0LlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInJlc3RhcnRQb2xpY3lcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJlc3RhcnQgcG9saWN5IGZvciBhbGwgY29udGFpbmVycyB3aXRoaW4gdGhlIHBvZC4gT25lIG9mIEFsd2F5cywgT25GYWlsdXJlLCBOZXZlci4gRGVmYXVsdCB0byBBbHdheXMuIE1vcmUgaW5mbzogaHR0cHM6Ly9rdWJlcm5ldGVzLmlvL2RvY3MvY29uY2VwdHMvd29ya2xvYWRzL3BvZHMvcG9kLWxpZmVjeWNsZS8jcmVzdGFydC1wb2xpY3lcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIH0sXG4gICAgXCJzY2hlZHVsZXJOYW1lXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJZiBzcGVjaWZpZWQsIHRoZSBwb2Qgd2lsbCBiZSBkaXNwYXRjaGVkIGJ5IHNwZWNpZmllZCBzY2hlZHVsZXIuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBwb2Qgd2lsbCBiZSBkaXNwYXRjaGVkIGJ5IGRlZmF1bHQgc2NoZWR1bGVyLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInNlY3VyaXR5Q29udGV4dFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2VjdXJpdHlDb250ZXh0IGhvbGRzIHBvZC1sZXZlbCBzZWN1cml0eSBhdHRyaWJ1dGVzIGFuZCBjb21tb24gY29udGFpbmVyIHNldHRpbmdzLiBPcHRpb25hbDogRGVmYXVsdHMgdG8gZW1wdHkuICBTZWUgdHlwZSBkZXNjcmlwdGlvbiBmb3IgZGVmYXVsdCB2YWx1ZXMgb2YgZWFjaCBmaWVsZC5cIixcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGkuY29yZS52MS5Qb2RTZWN1cml0eUNvbnRleHRcIlxuICAgIH0sXG4gICAgXCJzZXJ2aWNlQWNjb3VudFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVwcmVjYXRlZFNlcnZpY2VBY2NvdW50IGlzIGEgZGVwcmVjaWF0ZWQgYWxpYXMgZm9yIFNlcnZpY2VBY2NvdW50TmFtZS4gRGVwcmVjYXRlZDogVXNlIHNlcnZpY2VBY2NvdW50TmFtZSBpbnN0ZWFkLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInNlcnZpY2VBY2NvdW50TmFtZVwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2VydmljZUFjY291bnROYW1lIGlzIHRoZSBuYW1lIG9mIHRoZSBTZXJ2aWNlQWNjb3VudCB0byB1c2UgdG8gcnVuIHRoaXMgcG9kLiBNb3JlIGluZm86IGh0dHBzOi8va3ViZXJuZXRlcy5pby9kb2NzL3Rhc2tzL2NvbmZpZ3VyZS1wb2QtY29udGFpbmVyL2NvbmZpZ3VyZS1zZXJ2aWNlLWFjY291bnQvXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwic3ViZG9tYWluXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJZiBzcGVjaWZpZWQsIHRoZSBmdWxseSBxdWFsaWZpZWQgUG9kIGhvc3RuYW1lIHdpbGwgYmUgXFxcIlxcdTAwM2Nob3N0bmFtZVxcdTAwM2UuXFx1MDAzY3N1YmRvbWFpblxcdTAwM2UuXFx1MDAzY3BvZCBuYW1lc3BhY2VcXHUwMDNlLnN2Yy5cXHUwMDNjY2x1c3RlciBkb21haW5cXHUwMDNlXFxcIi4gSWYgbm90IHNwZWNpZmllZCwgdGhlIHBvZCB3aWxsIG5vdCBoYXZlIGEgZG9tYWlubmFtZSBhdCBhbGwuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwidGVybWluYXRpb25HcmFjZVBlcmlvZFNlY29uZHNcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9wdGlvbmFsIGR1cmF0aW9uIGluIHNlY29uZHMgdGhlIHBvZCBuZWVkcyB0byB0ZXJtaW5hdGUgZ3JhY2VmdWxseS4gTWF5IGJlIGRlY3JlYXNlZCBpbiBkZWxldGUgcmVxdWVzdC4gVmFsdWUgbXVzdCBiZSBub24tbmVnYXRpdmUgaW50ZWdlci4gVGhlIHZhbHVlIHplcm8gaW5kaWNhdGVzIGRlbGV0ZSBpbW1lZGlhdGVseS4gSWYgdGhpcyB2YWx1ZSBpcyBuaWwsIHRoZSBkZWZhdWx0IGdyYWNlIHBlcmlvZCB3aWxsIGJlIHVzZWQgaW5zdGVhZC4gVGhlIGdyYWNlIHBlcmlvZCBpcyB0aGUgZHVyYXRpb24gaW4gc2Vjb25kcyBhZnRlciB0aGUgcHJvY2Vzc2VzIHJ1bm5pbmcgaW4gdGhlIHBvZCBhcmUgc2VudCBhIHRlcm1pbmF0aW9uIHNpZ25hbCBhbmQgdGhlIHRpbWUgd2hlbiB0aGUgcHJvY2Vzc2VzIGFyZSBmb3JjaWJseSBoYWx0ZWQgd2l0aCBhIGtpbGwgc2lnbmFsLiBTZXQgdGhpcyB2YWx1ZSBsb25nZXIgdGhhbiB0aGUgZXhwZWN0ZWQgY2xlYW51cCB0aW1lIGZvciB5b3VyIHByb2Nlc3MuIERlZmF1bHRzIHRvIDMwIHNlY29uZHMuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW50ZWdlclwiLFxuICAgICAgICAgIFwiZm9ybWF0XCI6IFwiaW50NjRcIlxuICAgIH0sXG4gICAgXCJ0b2xlcmF0aW9uc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSWYgc3BlY2lmaWVkLCB0aGUgcG9kJ3MgdG9sZXJhdGlvbnMuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuVG9sZXJhdGlvblwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInZvbHVtZXNcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxpc3Qgb2Ygdm9sdW1lcyB0aGF0IGNhbiBiZSBtb3VudGVkIGJ5IGNvbnRhaW5lcnMgYmVsb25naW5nIHRvIHRoZSBwb2QuIE1vcmUgaW5mbzogaHR0cHM6Ly9rdWJlcm5ldGVzLmlvL2RvY3MvY29uY2VwdHMvc3RvcmFnZS92b2x1bWVzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuVm9sdW1lXCJcbiAgICAgIH0sXG4gICAgICBcIngta3ViZXJuZXRlcy1wYXRjaC1tZXJnZS1rZXlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgXCJ4LWt1YmVybmV0ZXMtcGF0Y2gtc3RyYXRlZ3lcIjogXCJtZXJnZVwiXG4gICAgfVxuICB9XG59XG4qL1xuXG4vKlxuXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kXCI6IHtcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJhcGlWZXJzaW9uXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBUElWZXJzaW9uIGRlZmluZXMgdGhlIHZlcnNpb25lZCBzY2hlbWEgb2YgdGhpcyByZXByZXNlbnRhdGlvbiBvZiBhbiBvYmplY3QuIFNlcnZlcnMgc2hvdWxkIGNvbnZlcnQgcmVjb2duaXplZCBzY2hlbWFzIHRvIHRoZSBsYXRlc3QgaW50ZXJuYWwgdmFsdWUsIGFuZCBtYXkgcmVqZWN0IHVucmVjb2duaXplZCB2YWx1ZXMuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3Jlc291cmNlc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcImtpbmRcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIktpbmQgaXMgYSBzdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBSRVNUIHJlc291cmNlIHRoaXMgb2JqZWN0IHJlcHJlc2VudHMuIFNlcnZlcnMgbWF5IGluZmVyIHRoaXMgZnJvbSB0aGUgZW5kcG9pbnQgdGhlIGNsaWVudCBzdWJtaXRzIHJlcXVlc3RzIHRvLiBDYW5ub3QgYmUgdXBkYXRlZC4gSW4gQ2FtZWxDYXNlLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCN0eXBlcy1raW5kc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcIm1ldGFkYXRhXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTdGFuZGFyZCBvYmplY3QncyBtZXRhZGF0YS4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjbWV0YWRhdGFcIixcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5PYmplY3RNZXRhXCJcbiAgICB9LFxuICAgIFwic3BlY1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWNhdGlvbiBvZiB0aGUgZGVzaXJlZCBiZWhhdmlvciBvZiB0aGUgcG9kLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCNzcGVjLWFuZC1zdGF0dXNcIixcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGkuY29yZS52MS5Qb2RTcGVjXCJcbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNb3N0IHJlY2VudGx5IG9ic2VydmVkIHN0YXR1cyBvZiB0aGUgcG9kLiBUaGlzIGRhdGEgbWF5IG5vdCBiZSB1cCB0byBkYXRlLiBQb3B1bGF0ZWQgYnkgdGhlIHN5c3RlbS4gUmVhZC1vbmx5LiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCNzcGVjLWFuZC1zdGF0dXNcIixcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGkuY29yZS52MS5Qb2RTdGF0dXNcIlxuICAgIH1cbiAgfSxcbiAgXCJ4LWt1YmVybmV0ZXMtZ3JvdXAtdmVyc2lvbi1raW5kXCI6IFtcbiAgICB7XG4gICAgICBcImdyb3VwXCI6IFwiXCIsXG4gICAgICBcInZlcnNpb25cIjogXCJ2MVwiLFxuICAgICAgXCJraW5kXCI6IFwiUG9kXCJcbiAgICB9XG4gIF1cbn1cbiovXG4vKlxuXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kQWZmaW5pdHlcIjoge1xuICBcImRlc2NyaXB0aW9uXCI6IFwiUG9kIGFmZmluaXR5IGlzIGEgZ3JvdXAgb2YgaW50ZXIgcG9kIGFmZmluaXR5IHNjaGVkdWxpbmcgcnVsZXMuXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwicHJlZmVycmVkRHVyaW5nU2NoZWR1bGluZ0lnbm9yZWREdXJpbmdFeGVjdXRpb25cIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBzY2hlZHVsZXIgd2lsbCBwcmVmZXIgdG8gc2NoZWR1bGUgcG9kcyB0byBub2RlcyB0aGF0IHNhdGlzZnkgdGhlIGFmZmluaXR5IGV4cHJlc3Npb25zIHNwZWNpZmllZCBieSB0aGlzIGZpZWxkLCBidXQgaXQgbWF5IGNob29zZSBhIG5vZGUgdGhhdCB2aW9sYXRlcyBvbmUgb3IgbW9yZSBvZiB0aGUgZXhwcmVzc2lvbnMuIFRoZSBub2RlIHRoYXQgaXMgbW9zdCBwcmVmZXJyZWQgaXMgdGhlIG9uZSB3aXRoIHRoZSBncmVhdGVzdCBzdW0gb2Ygd2VpZ2h0cywgaS5lLiBmb3IgZWFjaCBub2RlIHRoYXQgbWVldHMgYWxsIG9mIHRoZSBzY2hlZHVsaW5nIHJlcXVpcmVtZW50cyAocmVzb3VyY2UgcmVxdWVzdCwgcmVxdWlyZWREdXJpbmdTY2hlZHVsaW5nIGFmZmluaXR5IGV4cHJlc3Npb25zLCBldGMuKSwgY29tcHV0ZSBhIHN1bSBieSBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgZWxlbWVudHMgb2YgdGhpcyBmaWVsZCBhbmQgYWRkaW5nIFxcXCJ3ZWlnaHRcXFwiIHRvIHRoZSBzdW0gaWYgdGhlIG5vZGUgaGFzIHBvZHMgd2hpY2ggbWF0Y2hlcyB0aGUgY29ycmVzcG9uZGluZyBwb2RBZmZpbml0eVRlcm07IHRoZSBub2RlKHMpIHdpdGggdGhlIGhpZ2hlc3Qgc3VtIGFyZSB0aGUgbW9zdCBwcmVmZXJyZWQuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuV2VpZ2h0ZWRQb2RBZmZpbml0eVRlcm1cIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyZXF1aXJlZER1cmluZ1NjaGVkdWxpbmdJZ25vcmVkRHVyaW5nRXhlY3V0aW9uXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOT1QgWUVUIElNUExFTUVOVEVELiBUT0RPOiBVbmNvbW1lbnQgZmllbGQgb25jZSBpdCBpcyBpbXBsZW1lbnRlZC4gSWYgdGhlIGFmZmluaXR5IHJlcXVpcmVtZW50cyBzcGVjaWZpZWQgYnkgdGhpcyBmaWVsZCBhcmUgbm90IG1ldCBhdCBzY2hlZHVsaW5nIHRpbWUsIHRoZSBwb2Qgd2lsbCBub3QgYmUgc2NoZWR1bGVkIG9udG8gdGhlIG5vZGUuIElmIHRoZSBhZmZpbml0eSByZXF1aXJlbWVudHMgc3BlY2lmaWVkIGJ5IHRoaXMgZmllbGQgY2Vhc2UgdG8gYmUgbWV0IGF0IHNvbWUgcG9pbnQgZHVyaW5nIHBvZCBleGVjdXRpb24gKGUuZy4gZHVlIHRvIGEgcG9kIGxhYmVsIHVwZGF0ZSksIHRoZSBzeXN0ZW0gd2lsbCB0cnkgdG8gZXZlbnR1YWxseSBldmljdCB0aGUgcG9kIGZyb20gaXRzIG5vZGUuIFdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGVsZW1lbnRzLCB0aGUgbGlzdHMgb2Ygbm9kZXMgY29ycmVzcG9uZGluZyB0byBlYWNoIHBvZEFmZmluaXR5VGVybSBhcmUgaW50ZXJzZWN0ZWQsIGkuZS4gYWxsIHRlcm1zIG11c3QgYmUgc2F0aXNmaWVkLiBSZXF1aXJlZER1cmluZ1NjaGVkdWxpbmdSZXF1aXJlZER1cmluZ0V4ZWN1dGlvbiBbXVBvZEFmZmluaXR5VGVybSAgYGpzb246XFxcInJlcXVpcmVkRHVyaW5nU2NoZWR1bGluZ1JlcXVpcmVkRHVyaW5nRXhlY3V0aW9uLG9taXRlbXB0eVxcXCJgIElmIHRoZSBhZmZpbml0eSByZXF1aXJlbWVudHMgc3BlY2lmaWVkIGJ5IHRoaXMgZmllbGQgYXJlIG5vdCBtZXQgYXQgc2NoZWR1bGluZyB0aW1lLCB0aGUgcG9kIHdpbGwgbm90IGJlIHNjaGVkdWxlZCBvbnRvIHRoZSBub2RlLiBJZiB0aGUgYWZmaW5pdHkgcmVxdWlyZW1lbnRzIHNwZWNpZmllZCBieSB0aGlzIGZpZWxkIGNlYXNlIHRvIGJlIG1ldCBhdCBzb21lIHBvaW50IGR1cmluZyBwb2QgZXhlY3V0aW9uIChlLmcuIGR1ZSB0byBhIHBvZCBsYWJlbCB1cGRhdGUpLCB0aGUgc3lzdGVtIG1heSBvciBtYXkgbm90IHRyeSB0byBldmVudHVhbGx5IGV2aWN0IHRoZSBwb2QgZnJvbSBpdHMgbm9kZS4gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgZWxlbWVudHMsIHRoZSBsaXN0cyBvZiBub2RlcyBjb3JyZXNwb25kaW5nIHRvIGVhY2ggcG9kQWZmaW5pdHlUZXJtIGFyZSBpbnRlcnNlY3RlZCwgaS5lLiBhbGwgdGVybXMgbXVzdCBiZSBzYXRpc2ZpZWQuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuUG9kQWZmaW5pdHlUZXJtXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiovXG4vKlxuXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kQWZmaW5pdHlUZXJtXCI6IHtcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRlZmluZXMgYSBzZXQgb2YgcG9kcyAobmFtZWx5IHRob3NlIG1hdGNoaW5nIHRoZSBsYWJlbFNlbGVjdG9yIHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBuYW1lc3BhY2UocykpIHRoYXQgdGhpcyBwb2Qgc2hvdWxkIGJlIGNvLWxvY2F0ZWQgKGFmZmluaXR5KSBvciBub3QgY28tbG9jYXRlZCAoYW50aS1hZmZpbml0eSkgd2l0aCwgd2hlcmUgY28tbG9jYXRlZCBpcyBkZWZpbmVkIGFzIHJ1bm5pbmcgb24gYSBub2RlIHdob3NlIHZhbHVlIG9mIHRoZSBsYWJlbCB3aXRoIGtleSBcXHUwMDNjdG9wb2xvZ3lLZXlcXHUwMDNlIHRjaGVzIHRoYXQgb2YgYW55IG5vZGUgb24gd2hpY2ggYSBwb2Qgb2YgdGhlIHNldCBvZiBwb2RzIGlzIHJ1bm5pbmdcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJsYWJlbFNlbGVjdG9yXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxhYmVsIHF1ZXJ5IG92ZXIgYSBzZXQgb2YgcmVzb3VyY2VzLCBpbiB0aGlzIGNhc2UgcG9kcy5cIixcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5MYWJlbFNlbGVjdG9yXCJcbiAgICB9LFxuICAgIFwibmFtZXNwYWNlc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwibmFtZXNwYWNlcyBzcGVjaWZpZXMgd2hpY2ggbmFtZXNwYWNlcyB0aGUgbGFiZWxTZWxlY3RvciBhcHBsaWVzIHRvIChtYXRjaGVzIGFnYWluc3QpOyBudWxsIG9yIGVtcHR5IGxpc3QgbWVhbnMgXFxcInRoaXMgcG9kJ3MgbmFtZXNwYWNlXFxcIlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInRvcG9sb2d5S2V5XCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIHBvZCBzaG91bGQgYmUgY28tbG9jYXRlZCAoYWZmaW5pdHkpIG9yIG5vdCBjby1sb2NhdGVkIChhbnRpLWFmZmluaXR5KSB3aXRoIHRoZSBwb2RzIG1hdGNoaW5nIHRoZSBsYWJlbFNlbGVjdG9yIGluIHRoZSBzcGVjaWZpZWQgbmFtZXNwYWNlcywgd2hlcmUgY28tbG9jYXRlZCBpcyBkZWZpbmVkIGFzIHJ1bm5pbmcgb24gYSBub2RlIHdob3NlIHZhbHVlIG9mIHRoZSBsYWJlbCB3aXRoIGtleSB0b3BvbG9neUtleSBtYXRjaGVzIHRoYXQgb2YgYW55IG5vZGUgb24gd2hpY2ggYW55IG9mIHRoZSBzZWxlY3RlZCBwb2RzIGlzIHJ1bm5pbmcuIEZvciBQcmVmZXJyZWREdXJpbmdTY2hlZHVsaW5nIHBvZCBhbnRpLWFmZmluaXR5LCBlbXB0eSB0b3BvbG9neUtleSBpcyBpbnRlcnByZXRlZCBhcyBcXFwiYWxsIHRvcG9sb2dpZXNcXFwiIChcXFwiYWxsIHRvcG9sb2dpZXNcXFwiIGhlcmUgbWVhbnMgYWxsIHRoZSB0b3BvbG9neUtleXMgaW5kaWNhdGVkIGJ5IHNjaGVkdWxlciBjb21tYW5kLWxpbmUgYXJndW1lbnQgLS1mYWlsdXJlLWRvbWFpbnMpOyBmb3IgYWZmaW5pdHkgYW5kIGZvciBSZXF1aXJlZER1cmluZ1NjaGVkdWxpbmcgcG9kIGFudGktYWZmaW5pdHksIGVtcHR5IHRvcG9sb2d5S2V5IGlzIG5vdCBhbGxvd2VkLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfVxuICB9XG59XG4qL1xuLypcblwiaW8uazhzLmFwaS5jb3JlLnYxLlBvZEFudGlBZmZpbml0eVwiOiB7XG4gIFwiZGVzY3JpcHRpb25cIjogXCJQb2QgYW50aSBhZmZpbml0eSBpcyBhIGdyb3VwIG9mIGludGVyIHBvZCBhbnRpIGFmZmluaXR5IHNjaGVkdWxpbmcgcnVsZXMuXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwicHJlZmVycmVkRHVyaW5nU2NoZWR1bGluZ0lnbm9yZWREdXJpbmdFeGVjdXRpb25cIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBzY2hlZHVsZXIgd2lsbCBwcmVmZXIgdG8gc2NoZWR1bGUgcG9kcyB0byBub2RlcyB0aGF0IHNhdGlzZnkgdGhlIGFudGktYWZmaW5pdHkgZXhwcmVzc2lvbnMgc3BlY2lmaWVkIGJ5IHRoaXMgZmllbGQsIGJ1dCBpdCBtYXkgY2hvb3NlIGEgbm9kZSB0aGF0IHZpb2xhdGVzIG9uZSBvciBtb3JlIG9mIHRoZSBleHByZXNzaW9ucy4gVGhlIG5vZGUgdGhhdCBpcyBtb3N0IHByZWZlcnJlZCBpcyB0aGUgb25lIHdpdGggdGhlIGdyZWF0ZXN0IHN1bSBvZiB3ZWlnaHRzLCBpLmUuIGZvciBlYWNoIG5vZGUgdGhhdCBtZWV0cyBhbGwgb2YgdGhlIHNjaGVkdWxpbmcgcmVxdWlyZW1lbnRzIChyZXNvdXJjZSByZXF1ZXN0LCByZXF1aXJlZER1cmluZ1NjaGVkdWxpbmcgYW50aS1hZmZpbml0eSBleHByZXNzaW9ucywgZXRjLiksIGNvbXB1dGUgYSBzdW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGVsZW1lbnRzIG9mIHRoaXMgZmllbGQgYW5kIGFkZGluZyBcXFwid2VpZ2h0XFxcIiB0byB0aGUgc3VtIGlmIHRoZSBub2RlIGhhcyBwb2RzIHdoaWNoIG1hdGNoZXMgdGhlIGNvcnJlc3BvbmRpbmcgcG9kQWZmaW5pdHlUZXJtOyB0aGUgbm9kZShzKSB3aXRoIHRoZSBoaWdoZXN0IHN1bSBhcmUgdGhlIG1vc3QgcHJlZmVycmVkLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLldlaWdodGVkUG9kQWZmaW5pdHlUZXJtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwicmVxdWlyZWREdXJpbmdTY2hlZHVsaW5nSWdub3JlZER1cmluZ0V4ZWN1dGlvblwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTk9UIFlFVCBJTVBMRU1FTlRFRC4gVE9ETzogVW5jb21tZW50IGZpZWxkIG9uY2UgaXQgaXMgaW1wbGVtZW50ZWQuIElmIHRoZSBhbnRpLWFmZmluaXR5IHJlcXVpcmVtZW50cyBzcGVjaWZpZWQgYnkgdGhpcyBmaWVsZCBhcmUgbm90IG1ldCBhdCBzY2hlZHVsaW5nIHRpbWUsIHRoZSBwb2Qgd2lsbCBub3QgYmUgc2NoZWR1bGVkIG9udG8gdGhlIG5vZGUuIElmIHRoZSBhbnRpLWFmZmluaXR5IHJlcXVpcmVtZW50cyBzcGVjaWZpZWQgYnkgdGhpcyBmaWVsZCBjZWFzZSB0byBiZSBtZXQgYXQgc29tZSBwb2ludCBkdXJpbmcgcG9kIGV4ZWN1dGlvbiAoZS5nLiBkdWUgdG8gYSBwb2QgbGFiZWwgdXBkYXRlKSwgdGhlIHN5c3RlbSB3aWxsIHRyeSB0byBldmVudHVhbGx5IGV2aWN0IHRoZSBwb2QgZnJvbSBpdHMgbm9kZS4gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgZWxlbWVudHMsIHRoZSBsaXN0cyBvZiBub2RlcyBjb3JyZXNwb25kaW5nIHRvIGVhY2ggcG9kQWZmaW5pdHlUZXJtIGFyZSBpbnRlcnNlY3RlZCwgaS5lLiBhbGwgdGVybXMgbXVzdCBiZSBzYXRpc2ZpZWQuIFJlcXVpcmVkRHVyaW5nU2NoZWR1bGluZ1JlcXVpcmVkRHVyaW5nRXhlY3V0aW9uIFtdUG9kQWZmaW5pdHlUZXJtICBganNvbjpcXFwicmVxdWlyZWREdXJpbmdTY2hlZHVsaW5nUmVxdWlyZWREdXJpbmdFeGVjdXRpb24sb21pdGVtcHR5XFxcImAgSWYgdGhlIGFudGktYWZmaW5pdHkgcmVxdWlyZW1lbnRzIHNwZWNpZmllZCBieSB0aGlzIGZpZWxkIGFyZSBub3QgbWV0IGF0IHNjaGVkdWxpbmcgdGltZSwgdGhlIHBvZCB3aWxsIG5vdCBiZSBzY2hlZHVsZWQgb250byB0aGUgbm9kZS4gSWYgdGhlIGFudGktYWZmaW5pdHkgcmVxdWlyZW1lbnRzIHNwZWNpZmllZCBieSB0aGlzIGZpZWxkIGNlYXNlIHRvIGJlIG1ldCBhdCBzb21lIHBvaW50IGR1cmluZyBwb2QgZXhlY3V0aW9uIChlLmcuIGR1ZSB0byBhIHBvZCBsYWJlbCB1cGRhdGUpLCB0aGUgc3lzdGVtIG1heSBvciBtYXkgbm90IHRyeSB0byBldmVudHVhbGx5IGV2aWN0IHRoZSBwb2QgZnJvbSBpdHMgbm9kZS4gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgZWxlbWVudHMsIHRoZSBsaXN0cyBvZiBub2RlcyBjb3JyZXNwb25kaW5nIHRvIGVhY2ggcG9kQWZmaW5pdHlUZXJtIGFyZSBpbnRlcnNlY3RlZCwgaS5lLiBhbGwgdGVybXMgbXVzdCBiZSBzYXRpc2ZpZWQuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuUG9kQWZmaW5pdHlUZXJtXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAqL1xuLypcblxuIFwiaW8uazhzLmFwaS5jb3JlLnYxLlBvZENvbmRpdGlvblwiOiB7XG4gIFwiZGVzY3JpcHRpb25cIjogXCJQb2RDb25kaXRpb24gY29udGFpbnMgZGV0YWlscyBmb3IgdGhlIGN1cnJlbnQgY29uZGl0aW9uIG9mIHRoaXMgcG9kLlwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgXCJ0eXBlXCIsXG4gICAgXCJzdGF0dXNcIlxuICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcImxhc3RQcm9iZVRpbWVcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxhc3QgdGltZSB3ZSBwcm9iZWQgdGhlIGNvbmRpdGlvbi5cIixcbiAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5UaW1lXCJcbiAgICB9LFxuICAgIFwibGFzdFRyYW5zaXRpb25UaW1lXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMYXN0IHRpbWUgdGhlIGNvbmRpdGlvbiB0cmFuc2l0aW9uZWQgZnJvbSBvbmUgc3RhdHVzIHRvIGFub3RoZXIuXCIsXG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpbWFjaGluZXJ5LnBrZy5hcGlzLm1ldGEudjEuVGltZVwiXG4gICAgfSxcbiAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkh1bWFuLXJlYWRhYmxlIG1lc3NhZ2UgaW5kaWNhdGluZyBkZXRhaWxzIGFib3V0IGxhc3QgdHJhbnNpdGlvbi5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIH0sXG4gICAgXCJyZWFzb25cIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlVuaXF1ZSwgb25lLXdvcmQsIENhbWVsQ2FzZSByZWFzb24gZm9yIHRoZSBjb25kaXRpb24ncyBsYXN0IHRyYW5zaXRpb24uXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwic3RhdHVzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTdGF0dXMgaXMgdGhlIHN0YXR1cyBvZiB0aGUgY29uZGl0aW9uLiBDYW4gYmUgVHJ1ZSwgRmFsc2UsIFVua25vd24uIE1vcmUgaW5mbzogaHR0cHM6Ly9rdWJlcm5ldGVzLmlvL2RvY3MvY29uY2VwdHMvd29ya2xvYWRzL3BvZHMvcG9kLWxpZmVjeWNsZSNwb2QtY29uZGl0aW9uc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInR5cGVcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlR5cGUgaXMgdGhlIHR5cGUgb2YgdGhlIGNvbmRpdGlvbi4gQ3VycmVudGx5IG9ubHkgUmVhZHkuIE1vcmUgaW5mbzogaHR0cHM6Ly9rdWJlcm5ldGVzLmlvL2RvY3MvY29uY2VwdHMvd29ya2xvYWRzL3BvZHMvcG9kLWxpZmVjeWNsZSNwb2QtY29uZGl0aW9uc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfVxuICB9XG59XG4gKi9cbi8qXG5cbiBcImlvLms4cy5hcGkuY29yZS52MS5Qb2RMaXN0XCI6IHtcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBvZExpc3QgaXMgYSBsaXN0IG9mIFBvZHMuXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICBcIml0ZW1zXCJcbiAgXSxcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJhcGlWZXJzaW9uXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBUElWZXJzaW9uIGRlZmluZXMgdGhlIHZlcnNpb25lZCBzY2hlbWEgb2YgdGhpcyByZXByZXNlbnRhdGlvbiBvZiBhbiBvYmplY3QuIFNlcnZlcnMgc2hvdWxkIGNvbnZlcnQgcmVjb2duaXplZCBzY2hlbWFzIHRvIHRoZSBsYXRlc3QgaW50ZXJuYWwgdmFsdWUsIGFuZCBtYXkgcmVqZWN0IHVucmVjb2duaXplZCB2YWx1ZXMuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3Jlc291cmNlc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcIml0ZW1zXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMaXN0IG9mIHBvZHMuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuUG9kXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwia2luZFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiS2luZCBpcyBhIHN0cmluZyB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIFJFU1QgcmVzb3VyY2UgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gU2VydmVycyBtYXkgaW5mZXIgdGhpcyBmcm9tIHRoZSBlbmRwb2ludCB0aGUgY2xpZW50IHN1Ym1pdHMgcmVxdWVzdHMgdG8uIENhbm5vdCBiZSB1cGRhdGVkLiBJbiBDYW1lbENhc2UuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3R5cGVzLWtpbmRzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwibWV0YWRhdGFcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YW5kYXJkIGxpc3QgbWV0YWRhdGEuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3R5cGVzLWtpbmRzXCIsXG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpbWFjaGluZXJ5LnBrZy5hcGlzLm1ldGEudjEuTGlzdE1ldGFcIlxuICAgIH1cbiAgfSxcbiAgXCJ4LWt1YmVybmV0ZXMtZ3JvdXAtdmVyc2lvbi1raW5kXCI6IFtcbiAgICB7XG4gICAgICBcImdyb3VwXCI6IFwiXCIsXG4gICAgICBcInZlcnNpb25cIjogXCJ2MVwiLFxuICAgICAgXCJraW5kXCI6IFwiUG9kTGlzdFwiXG4gICAgfVxuICBdXG59XG4gKi9cbi8qXG5cbiBcImlvLms4cy5hcGkuY29yZS52MS5Qb2RTZWN1cml0eUNvbnRleHRcIjoge1xuICBcImRlc2NyaXB0aW9uXCI6IFwiUG9kU2VjdXJpdHlDb250ZXh0IGhvbGRzIHBvZC1sZXZlbCBzZWN1cml0eSBhdHRyaWJ1dGVzIGFuZCBjb21tb24gY29udGFpbmVyIHNldHRpbmdzLiBTb21lIGZpZWxkcyBhcmUgYWxzbyBwcmVzZW50IGluIGNvbnRhaW5lci5zZWN1cml0eUNvbnRleHQuICBGaWVsZCB2YWx1ZXMgb2YgY29udGFpbmVyLnNlY3VyaXR5Q29udGV4dCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBmaWVsZCB2YWx1ZXMgb2YgUG9kU2VjdXJpdHlDb250ZXh0LlwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcImZzR3JvdXBcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgc3BlY2lhbCBzdXBwbGVtZW50YWwgZ3JvdXAgdGhhdCBhcHBsaWVzIHRvIGFsbCBjb250YWluZXJzIGluIGEgcG9kLiBTb21lIHZvbHVtZSB0eXBlcyBhbGxvdyB0aGUgS3ViZWxldCB0byBjaGFuZ2UgdGhlIG93bmVyc2hpcCBvZiB0aGF0IHZvbHVtZSB0byBiZSBvd25lZCBieSB0aGUgcG9kOlxcblxcbjEuIFRoZSBvd25pbmcgR0lEIHdpbGwgYmUgdGhlIEZTR3JvdXAgMi4gVGhlIHNldGdpZCBiaXQgaXMgc2V0IChuZXcgZmlsZXMgY3JlYXRlZCBpbiB0aGUgdm9sdW1lIHdpbGwgYmUgb3duZWQgYnkgRlNHcm91cCkgMy4gVGhlIHBlcm1pc3Npb24gYml0cyBhcmUgT1InZCB3aXRoIHJ3LXJ3LS0tLVxcblxcbklmIHVuc2V0LCB0aGUgS3ViZWxldCB3aWxsIG5vdCBtb2RpZnkgdGhlIG93bmVyc2hpcCBhbmQgcGVybWlzc2lvbnMgb2YgYW55IHZvbHVtZS5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgXCJmb3JtYXRcIjogXCJpbnQ2NFwiXG4gICAgfSxcbiAgICBcInJ1bkFzTm9uUm9vdFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW5kaWNhdGVzIHRoYXQgdGhlIGNvbnRhaW5lciBtdXN0IHJ1biBhcyBhIG5vbi1yb290IHVzZXIuIElmIHRydWUsIHRoZSBLdWJlbGV0IHdpbGwgdmFsaWRhdGUgdGhlIGltYWdlIGF0IHJ1bnRpbWUgdG8gZW5zdXJlIHRoYXQgaXQgZG9lcyBub3QgcnVuIGFzIFVJRCAwIChyb290KSBhbmQgZmFpbCB0byBzdGFydCB0aGUgY29udGFpbmVyIGlmIGl0IGRvZXMuIElmIHVuc2V0IG9yIGZhbHNlLCBubyBzdWNoIHZhbGlkYXRpb24gd2lsbCBiZSBwZXJmb3JtZWQuIE1heSBhbHNvIGJlIHNldCBpbiBTZWN1cml0eUNvbnRleHQuICBJZiBzZXQgaW4gYm90aCBTZWN1cml0eUNvbnRleHQgYW5kIFBvZFNlY3VyaXR5Q29udGV4dCwgdGhlIHZhbHVlIHNwZWNpZmllZCBpbiBTZWN1cml0eUNvbnRleHQgdGFrZXMgcHJlY2VkZW5jZS5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCJcbiAgICB9LFxuICAgIFwicnVuQXNVc2VyXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgVUlEIHRvIHJ1biB0aGUgZW50cnlwb2ludCBvZiB0aGUgY29udGFpbmVyIHByb2Nlc3MuIERlZmF1bHRzIHRvIHVzZXIgc3BlY2lmaWVkIGluIGltYWdlIG1ldGFkYXRhIGlmIHVuc3BlY2lmaWVkLiBNYXkgYWxzbyBiZSBzZXQgaW4gU2VjdXJpdHlDb250ZXh0LiAgSWYgc2V0IGluIGJvdGggU2VjdXJpdHlDb250ZXh0IGFuZCBQb2RTZWN1cml0eUNvbnRleHQsIHRoZSB2YWx1ZSBzcGVjaWZpZWQgaW4gU2VjdXJpdHlDb250ZXh0IHRha2VzIHByZWNlZGVuY2UgZm9yIHRoYXQgY29udGFpbmVyLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImludGVnZXJcIixcbiAgICAgICAgICBcImZvcm1hdFwiOiBcImludDY0XCJcbiAgICB9LFxuICAgIFwic2VMaW51eE9wdGlvbnNcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBTRUxpbnV4IGNvbnRleHQgdG8gYmUgYXBwbGllZCB0byBhbGwgY29udGFpbmVycy4gSWYgdW5zcGVjaWZpZWQsIHRoZSBjb250YWluZXIgcnVudGltZSB3aWxsIGFsbG9jYXRlIGEgcmFuZG9tIFNFTGludXggY29udGV4dCBmb3IgZWFjaCBjb250YWluZXIuICBNYXkgYWxzbyBiZSBzZXQgaW4gU2VjdXJpdHlDb250ZXh0LiAgSWYgc2V0IGluIGJvdGggU2VjdXJpdHlDb250ZXh0IGFuZCBQb2RTZWN1cml0eUNvbnRleHQsIHRoZSB2YWx1ZSBzcGVjaWZpZWQgaW4gU2VjdXJpdHlDb250ZXh0IHRha2VzIHByZWNlZGVuY2UgZm9yIHRoYXQgY29udGFpbmVyLlwiLFxuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLlNFTGludXhPcHRpb25zXCJcbiAgICB9LFxuICAgIFwic3VwcGxlbWVudGFsR3JvdXBzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGxpc3Qgb2YgZ3JvdXBzIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHByb2Nlc3MgcnVuIGluIGVhY2ggY29udGFpbmVyLCBpbiBhZGRpdGlvbiB0byB0aGUgY29udGFpbmVyJ3MgcHJpbWFyeSBHSUQuICBJZiB1bnNwZWNpZmllZCwgbm8gZ3JvdXBzIHdpbGwgYmUgYWRkZWQgdG8gYW55IGNvbnRhaW5lci5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICBcImZvcm1hdFwiOiBcImludDY0XCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiAqL1xuLypcblxuLypcblxuIFwiaW8uazhzLmFwaS5jb3JlLnYxLlBvZFN0YXR1c1wiOiB7XG4gIFwiZGVzY3JpcHRpb25cIjogXCJQb2RTdGF0dXMgcmVwcmVzZW50cyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhdHVzIG9mIGEgcG9kLiBTdGF0dXMgbWF5IHRyYWlsIHRoZSBhY3R1YWwgc3RhdGUgb2YgYSBzeXN0ZW0uXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwiY29uZGl0aW9uc1wiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VycmVudCBzZXJ2aWNlIHN0YXRlIG9mIHBvZC4gTW9yZSBpbmZvOiBodHRwczovL2t1YmVybmV0ZXMuaW8vZG9jcy9jb25jZXB0cy93b3JrbG9hZHMvcG9kcy9wb2QtbGlmZWN5Y2xlI3BvZC1jb25kaXRpb25zXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuUG9kQ29uZGl0aW9uXCJcbiAgICAgIH0sXG4gICAgICBcIngta3ViZXJuZXRlcy1wYXRjaC1tZXJnZS1rZXlcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgXCJ4LWt1YmVybmV0ZXMtcGF0Y2gtc3RyYXRlZ3lcIjogXCJtZXJnZVwiXG4gICAgfSxcbiAgICBcImNvbnRhaW5lclN0YXR1c2VzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbGlzdCBoYXMgb25lIGVudHJ5IHBlciBjb250YWluZXIgaW4gdGhlIG1hbmlmZXN0LiBFYWNoIGVudHJ5IGlzIGN1cnJlbnRseSB0aGUgb3V0cHV0IG9mIGBkb2NrZXIgaW5zcGVjdGAuIE1vcmUgaW5mbzogaHR0cHM6Ly9rdWJlcm5ldGVzLmlvL2RvY3MvY29uY2VwdHMvd29ya2xvYWRzL3BvZHMvcG9kLWxpZmVjeWNsZSNwb2QtYW5kLWNvbnRhaW5lci1zdGF0dXNcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2lvLms4cy5hcGkuY29yZS52MS5Db250YWluZXJTdGF0dXNcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJob3N0SVBcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIklQIGFkZHJlc3Mgb2YgdGhlIGhvc3QgdG8gd2hpY2ggdGhlIHBvZCBpcyBhc3NpZ25lZC4gRW1wdHkgaWYgbm90IHlldCBzY2hlZHVsZWQuXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwiaW5pdENvbnRhaW5lclN0YXR1c2VzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbGlzdCBoYXMgb25lIGVudHJ5IHBlciBpbml0IGNvbnRhaW5lciBpbiB0aGUgbWFuaWZlc3QuIFRoZSBtb3N0IHJlY2VudCBzdWNjZXNzZnVsIGluaXQgY29udGFpbmVyIHdpbGwgaGF2ZSByZWFkeSA9IHRydWUsIHRoZSBtb3N0IHJlY2VudGx5IHN0YXJ0ZWQgY29udGFpbmVyIHdpbGwgaGF2ZSBzdGFydFRpbWUgc2V0LiBNb3JlIGluZm86IGh0dHBzOi8va3ViZXJuZXRlcy5pby9kb2NzL2NvbmNlcHRzL3dvcmtsb2Fkcy9wb2RzL3BvZC1saWZlY3ljbGUjcG9kLWFuZC1jb250YWluZXItc3RhdHVzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuQ29udGFpbmVyU3RhdHVzXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBodW1hbiByZWFkYWJsZSBtZXNzYWdlIGluZGljYXRpbmcgZGV0YWlscyBhYm91dCB3aHkgdGhlIHBvZCBpcyBpbiB0aGlzIGNvbmRpdGlvbi5cIixcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIH0sXG4gICAgXCJwaGFzZVwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VycmVudCBjb25kaXRpb24gb2YgdGhlIHBvZC4gTW9yZSBpbmZvOiBodHRwczovL2t1YmVybmV0ZXMuaW8vZG9jcy9jb25jZXB0cy93b3JrbG9hZHMvcG9kcy9wb2QtbGlmZWN5Y2xlI3BvZC1waGFzZVwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInBvZElQXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJUCBhZGRyZXNzIGFsbG9jYXRlZCB0byB0aGUgcG9kLiBSb3V0YWJsZSBhdCBsZWFzdCB3aXRoaW4gdGhlIGNsdXN0ZXIuIEVtcHR5IGlmIG5vdCB5ZXQgYWxsb2NhdGVkLlwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInFvc0NsYXNzXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgUXVhbGl0eSBvZiBTZXJ2aWNlIChRT1MpIGNsYXNzaWZpY2F0aW9uIGFzc2lnbmVkIHRvIHRoZSBwb2QgYmFzZWQgb24gcmVzb3VyY2UgcmVxdWlyZW1lbnRzIFNlZSBQb2RRT1NDbGFzcyB0eXBlIGZvciBhdmFpbGFibGUgUU9TIGNsYXNzZXMgTW9yZSBpbmZvOiBodHRwczovL2dpdGh1Yi5jb20va3ViZXJuZXRlcy9rdWJlcm5ldGVzL2Jsb2IvbWFzdGVyL2RvY3MvZGVzaWduL3Jlc291cmNlLXFvcy5tZFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInJlYXNvblwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBicmllZiBDYW1lbENhc2UgbWVzc2FnZSBpbmRpY2F0aW5nIGRldGFpbHMgYWJvdXQgd2h5IHRoZSBwb2QgaXMgaW4gdGhpcyBzdGF0ZS4gZS5nLiAnT3V0T2ZEaXNrJ1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcInN0YXJ0VGltZVwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUkZDIDMzMzkgZGF0ZSBhbmQgdGltZSBhdCB3aGljaCB0aGUgb2JqZWN0IHdhcyBhY2tub3dsZWRnZWQgYnkgdGhlIEt1YmVsZXQuIFRoaXMgaXMgYmVmb3JlIHRoZSBLdWJlbGV0IHB1bGxlZCB0aGUgY29udGFpbmVyIGltYWdlKHMpIGZvciB0aGUgcG9kLlwiLFxuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaW1hY2hpbmVyeS5wa2cuYXBpcy5tZXRhLnYxLlRpbWVcIlxuICAgIH1cbiAgfVxufVxuICovXG4vKlxuXG4gXCJpby5rOHMuYXBpLmNvcmUudjEuUG9kVGVtcGxhdGVcIjoge1xuICBcImRlc2NyaXB0aW9uXCI6IFwiUG9kVGVtcGxhdGUgZGVzY3JpYmVzIGEgdGVtcGxhdGUgZm9yIGNyZWF0aW5nIGNvcGllcyBvZiBhIHByZWRlZmluZWQgcG9kLlwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcImFwaVZlcnNpb25cIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFQSVZlcnNpb24gZGVmaW5lcyB0aGUgdmVyc2lvbmVkIHNjaGVtYSBvZiB0aGlzIHJlcHJlc2VudGF0aW9uIG9mIGFuIG9iamVjdC4gU2VydmVycyBzaG91bGQgY29udmVydCByZWNvZ25pemVkIHNjaGVtYXMgdG8gdGhlIGxhdGVzdCBpbnRlcm5hbCB2YWx1ZSwgYW5kIG1heSByZWplY3QgdW5yZWNvZ25pemVkIHZhbHVlcy4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjcmVzb3VyY2VzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwia2luZFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiS2luZCBpcyBhIHN0cmluZyB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIFJFU1QgcmVzb3VyY2UgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gU2VydmVycyBtYXkgaW5mZXIgdGhpcyBmcm9tIHRoZSBlbmRwb2ludCB0aGUgY2xpZW50IHN1Ym1pdHMgcmVxdWVzdHMgdG8uIENhbm5vdCBiZSB1cGRhdGVkLiBJbiBDYW1lbENhc2UuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3R5cGVzLWtpbmRzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwibWV0YWRhdGFcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YW5kYXJkIG9iamVjdCdzIG1ldGFkYXRhLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCNtZXRhZGF0YVwiLFxuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaW1hY2hpbmVyeS5wa2cuYXBpcy5tZXRhLnYxLk9iamVjdE1ldGFcIlxuICAgIH0sXG4gICAgXCJ0ZW1wbGF0ZVwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGVtcGxhdGUgZGVmaW5lcyB0aGUgcG9kcyB0aGF0IHdpbGwgYmUgY3JlYXRlZCBmcm9tIHRoaXMgcG9kIHRlbXBsYXRlLiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjc3BlYy1hbmQtc3RhdHVzXCIsXG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpLmNvcmUudjEuUG9kVGVtcGxhdGVTcGVjXCJcbiAgICB9XG4gIH0sXG4gIFwieC1rdWJlcm5ldGVzLWdyb3VwLXZlcnNpb24ta2luZFwiOiBbXG4gICAge1xuICAgICAgXCJncm91cFwiOiBcIlwiLFxuICAgICAgXCJ2ZXJzaW9uXCI6IFwidjFcIixcbiAgICAgIFwia2luZFwiOiBcIlBvZFRlbXBsYXRlXCJcbiAgICB9XG4gIF1cbn1cbiAqL1xuLypcblxuIFwiaW8uazhzLmFwaS5jb3JlLnYxLlBvZFRlbXBsYXRlTGlzdFwiOiB7XG4gIFwiZGVzY3JpcHRpb25cIjogXCJQb2RUZW1wbGF0ZUxpc3QgaXMgYSBsaXN0IG9mIFBvZFRlbXBsYXRlcy5cIixcbiAgICAgIFwicmVxdWlyZWRcIjogW1xuICAgIFwiaXRlbXNcIlxuICBdLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcImFwaVZlcnNpb25cIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFQSVZlcnNpb24gZGVmaW5lcyB0aGUgdmVyc2lvbmVkIHNjaGVtYSBvZiB0aGlzIHJlcHJlc2VudGF0aW9uIG9mIGFuIG9iamVjdC4gU2VydmVycyBzaG91bGQgY29udmVydCByZWNvZ25pemVkIHNjaGVtYXMgdG8gdGhlIGxhdGVzdCBpbnRlcm5hbCB2YWx1ZSwgYW5kIG1heSByZWplY3QgdW5yZWNvZ25pemVkIHZhbHVlcy4gTW9yZSBpbmZvOiBodHRwczovL2dpdC5rOHMuaW8vY29tbXVuaXR5L2NvbnRyaWJ1dG9ycy9kZXZlbC9hcGktY29udmVudGlvbnMubWQjcmVzb3VyY2VzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwiaXRlbXNcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxpc3Qgb2YgcG9kIHRlbXBsYXRlc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLlBvZFRlbXBsYXRlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwia2luZFwiOiB7XG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiS2luZCBpcyBhIHN0cmluZyB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIFJFU1QgcmVzb3VyY2UgdGhpcyBvYmplY3QgcmVwcmVzZW50cy4gU2VydmVycyBtYXkgaW5mZXIgdGhpcyBmcm9tIHRoZSBlbmRwb2ludCB0aGUgY2xpZW50IHN1Ym1pdHMgcmVxdWVzdHMgdG8uIENhbm5vdCBiZSB1cGRhdGVkLiBJbiBDYW1lbENhc2UuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3R5cGVzLWtpbmRzXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwibWV0YWRhdGFcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YW5kYXJkIGxpc3QgbWV0YWRhdGEuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3R5cGVzLWtpbmRzXCIsXG4gICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9pby5rOHMuYXBpbWFjaGluZXJ5LnBrZy5hcGlzLm1ldGEudjEuTGlzdE1ldGFcIlxuICAgIH1cbiAgfSxcbiAgXCJ4LWt1YmVybmV0ZXMtZ3JvdXAtdmVyc2lvbi1raW5kXCI6IFtcbiAgICB7XG4gICAgICBcImdyb3VwXCI6IFwiXCIsXG4gICAgICBcInZlcnNpb25cIjogXCJ2MVwiLFxuICAgICAgXCJraW5kXCI6IFwiUG9kVGVtcGxhdGVMaXN0XCJcbiAgICB9XG4gIF1cbn1cbiAqL1xuLypcbiBcImlvLms4cy5hcGkuY29yZS52MS5Qb2RUZW1wbGF0ZVNwZWNcIjoge1xuICBcImRlc2NyaXB0aW9uXCI6IFwiUG9kVGVtcGxhdGVTcGVjIGRlc2NyaWJlcyB0aGUgZGF0YSBhIHBvZCBzaG91bGQgaGF2ZSB3aGVuIGNyZWF0ZWQgZnJvbSBhIHRlbXBsYXRlXCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwibWV0YWRhdGFcIjoge1xuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlN0YW5kYXJkIG9iamVjdCdzIG1ldGFkYXRhLiBNb3JlIGluZm86IGh0dHBzOi8vZ2l0Lms4cy5pby9jb21tdW5pdHkvY29udHJpYnV0b3JzL2RldmVsL2FwaS1jb252ZW50aW9ucy5tZCNtZXRhZGF0YVwiLFxuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaW1hY2hpbmVyeS5wa2cuYXBpcy5tZXRhLnYxLk9iamVjdE1ldGFcIlxuICAgIH0sXG4gICAgXCJzcGVjXCI6IHtcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpY2F0aW9uIG9mIHRoZSBkZXNpcmVkIGJlaGF2aW9yIG9mIHRoZSBwb2QuIE1vcmUgaW5mbzogaHR0cHM6Ly9naXQuazhzLmlvL2NvbW11bml0eS9jb250cmlidXRvcnMvZGV2ZWwvYXBpLWNvbnZlbnRpb25zLm1kI3NwZWMtYW5kLXN0YXR1c1wiLFxuICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvaW8uazhzLmFwaS5jb3JlLnYxLlBvZFNwZWNcIlxuICAgIH1cbiAgfVxufSxcbiovIl19