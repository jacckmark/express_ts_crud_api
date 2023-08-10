import { Request, Response, NextFunction } from "express";

export const requestTime = (req: Request, res: Response, next: NextFunction) => {
  const currDate = new Date();
  const day = currDate.getDate();
  const month = currDate.getMonth() + 1;
  const year = currDate.getFullYear();

  const formattedDay = String(day).length > 1 ? day : `0${day}`;
  const formattedMonth = String(month).length > 1 ? month : `0${month}`;

  console.log(`${formattedDay}-${formattedMonth}-${year}`);
  next();
};
