export default async function findRecord(store, modelName, propertyName, propertyValue) {
  const records = await store.query(modelName, {
    orderBy: propertyName,
    startAt: propertyValue,
    limitToFirst: 1
  });
  return records.get('firstObject');
}
