global.expectedPostUserSchema =
{
  type: "object",
  properties:{
    "name":{type: "string"},
    "job":{type: "string"},
    "id":{type: "string"},
    "createdAt":{type: "string"}
  },
  required: ["id", "job", "name", "createdAt"]
}
