export interface ITypeProps
{
	type: string;
}

export interface IListState
{
	data: any;
	msg?: string;
	openPop: boolean;
	openCircle: boolean;
	openDialog: boolean;
	id: string | null;
	redirectTo: string | null;
}
