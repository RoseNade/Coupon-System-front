import { CustomerModel } from "../../Models/Beans";

export class CustomersAppState{
    public customers: CustomerModel[] = [];
}

export enum customersActionType{
    CustomersDownloaded = "CustomersDownloaded",
    CustomersAdded = "CustomersAdded",
    CustomersUpdated = "CustomersUpdated",
    CustomersDeleted = "CustomersDeleted",
    CustomersClear = "CustomersClear",
}

export interface CustomersAction {
    type: customersActionType;
    payload?: any;
}

export function customersDownloadedAction(customers: CustomerModel[]): CustomersAction {
    return { type: customersActionType.CustomersDownloaded, payload: customers};
}

export function customersAddedAction(customer: CustomerModel): CustomersAction {
    return { type: customersActionType.CustomersAdded, payload: customer };
}

export function customersUpdatedAction(customer: CustomerModel): CustomersAction {
    return { type: customersActionType.CustomersUpdated, payload: customer };
}

export function customersDeletedAction(id:number): CustomersAction {
    return { type: customersActionType.CustomersDeleted, payload: id };
}

export function customersReducer(
    currentState: CustomersAppState = new CustomersAppState(),
    action: CustomersAction
  ): CustomersAppState {
    const newState = { ...currentState }; //Spread Operator
  
    switch (action.type) {
      case customersActionType.CustomersDownloaded:
        newState.customers = action.payload;
        break;
      case customersActionType.CustomersAdded:
        newState.customers.push(action.payload);
        break;
      case customersActionType.CustomersUpdated:
        const idx = newState.customers.findIndex(t => t.id === action.payload.id);
        newState.customers[idx] = action.payload;
        break;
      case customersActionType.CustomersDeleted:
        newState.customers = newState.customers.filter(c => c.id !== action.payload);
        break;
      case customersActionType.CustomersClear:
        newState.customers = [];
        break;
    }
    return newState;
  }