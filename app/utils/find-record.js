export default async function findRecord(store, modelName, propertyName, propertyValue) {
  const records = await store.query(modelName, {
    orderBy: propertyName,
    endAt: propertyValue,
    limitToLast: 1
  });
  return records.get('firstObject');
}
