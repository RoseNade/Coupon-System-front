import { CouponModel } from "../../Models/Beans";

export class CouponsAppState{
    public coupons: CouponModel[] = [];
}

export enum couponActionType{
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted",
    CouponsClear = "CouponsClear",
}

export interface CouponAction {
    type: couponActionType;
    payload?: any;
}

export function couponsDownloadedAction(coupons: CouponModel[]): CouponAction {
    return { type: couponActionType.CouponsDownloaded, payload: coupons};
}

export function couponsAddedAction(coupon: CouponModel): CouponAction {
    return { type: couponActionType.CouponAdded, payload: coupon };
}

export function couponsUpdatedAction(coupon: CouponModel): CouponAction {
    return { type: couponActionType.CouponUpdated, payload: coupon };
}

export function couponsDeletedAction(id:number): CouponAction {
    return { type: couponActionType.CouponDeleted, payload: id };
}

export function couponsClearAction(): CouponAction {
  return { type: couponActionType.CouponDeleted, payload: {} };
}

export function couponsReducer(
    currentState: CouponsAppState = new CouponsAppState(),
    action: CouponAction
  ): CouponsAppState {
    const newState = { ...currentState }; //Spread Operator
  
    switch (action.type) {
      case couponActionType.CouponsDownloaded:
        newState.coupons = action.payload;
        break;
      case couponActionType.CouponAdded:
        newState.coupons.push(action.payload);
        break;
      case couponActionType.CouponUpdated:
        const idx = newState.coupons.findIndex(t => t.id === action.payload.id);
        newState.coupons[idx] = action.payload;
        break;
      case couponActionType.CouponDeleted:
        newState.coupons = newState.coupons.filter(c => c.id !== action.payload);
        break;
      case couponActionType.CouponsClear:
        newState.coupons = [];
        break;
    }
    return newState;
  }