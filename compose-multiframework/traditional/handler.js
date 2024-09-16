exports.handler = async (event) => {
  return {
    service: "traditional",
    tableName: process.env.TABLE_NAME,
    domain: process.env.DOMAIN,
  };
};
