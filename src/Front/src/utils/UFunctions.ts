import { IAddState, IEditState } from './UApp';

export type TDataSend = Omit<IAddState, "msg"|"redirectTo"|"pop">;

export type TDataEdit = Omit<IEditState, "msg"|"redirectTo"|"pop">
