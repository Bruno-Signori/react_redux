import { Reducer } from "redux";
import { ICartState } from "./types";


// seto um valor inicial para o state 
const INITIAL_STATE: ICartState = {
  items: []
}
const cart: Reducer<ICartState> = (state, action) => {
  return INITIAL_STATE;

}
export default cart;