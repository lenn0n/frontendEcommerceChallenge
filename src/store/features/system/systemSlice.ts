import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertModalProps, initialAlertModalState } from "@components/Modal/AlertModal";

interface SystemState {
  alertModal?: AlertModalProps,
  offcanvas: {
    show: boolean
  }
}

// Define the initial state using that type
const initialState: SystemState = {
  alertModal: initialAlertModalState,
  offcanvas: {
    show: false
  }
}

export const systemSlice = createSlice({
  name: "system",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAlertModal: (state, action: PayloadAction<AlertModalProps>) => {
      state.alertModal = { ...state.alertModal, ...action.payload}
    },
    setOffCanvas: (state, action: PayloadAction<any>) => {
      state.offcanvas = { ...state.offcanvas, ...action.payload}
    },
  },
});

export const {
  setAlertModal,
  setOffCanvas
} = systemSlice.actions

export default systemSlice.reducer;
