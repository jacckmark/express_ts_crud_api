export const emptyOrRows = (rows: any) => {
  if (!rows) {
    return [];
  }
  return rows;
};

export const recheckIdFormat = (id: string, currentOperation: string) => {
  const isIdIncorrect = isNaN(Number(id));
  if (!isIdIncorrect) return;
  return `Error when trying to ${currentOperation}. Id is not in a correct format. Should be a number and got "${id}".`;
};
