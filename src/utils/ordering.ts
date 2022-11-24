export const order = (
  list: Array<any>,
  propertyToSortBy: string,
  order: "asc" | "desc"
) => {
  const isDate = ["signedDate", "autoClosingDate", "closingDate"].includes(
    propertyToSortBy
  );

  return list.sort((a: any, b: any) => {
    const propertyA = isDate
      ? new Date(a[propertyToSortBy]).getTime()
      : a[propertyToSortBy];
    const propertyB = isDate
      ? new Date(b[propertyToSortBy]).getTime()
      : b[propertyToSortBy];

    if (propertyA < propertyB) {
      return order === "asc" ? -1 : 1;
    }
    if (propertyA > propertyB) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};
