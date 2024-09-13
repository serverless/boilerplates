exports.handler = async (event) => {
  return {
    tableName: process.env.TABLE_NAME,
    stageLabel: process.env.STAGE_LABEL,
    service: "sam-compose-service",
    message:
      "This is the staged table name that was constructed using the compose outputs and params",
  };
};
