export default async function findRecord(store, modelName, propertyName, propertyValue) {
  const records = await store.query(modelName, {
    orderBy: propertyName,
    endAt: propertyValue,
    limitToLast: 1
  });
  const firstObject = records.get('firstObject');
  return firstObject.get(propertyName) === propertyValue ? firstObject : null;
}
