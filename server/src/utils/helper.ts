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

export const recheckEmailFormat = (email: string, currentOperation: string) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
  const isEmailCorrect = String(email)
  .toLowerCase()
  .match(emailRegex);

  if (isEmailCorrect) return;
  return `Error when trying to ${currentOperation}. Email is not in a correct format. Got "${email}" and it should look like this "example@email.com".`;
};