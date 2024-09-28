import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterModalProps, initialFilterModalState } from "@components/Modal/FilterModal";

interface CartStateProps {
  search: {
    keyword: string,
    category: {
      name: string,
      value: string
    },
  },
  filterModal?: FilterModalProps
}

// Define the initial state using that type
const initialState: CartStateProps = {
  search: {
    keyword: '',
    category: {
      name: 'All',
      value: 'all'
    }
  },
  filterModal: initialFilterModalState
}

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.search = { ...state.search, keyword: action.payload }
    },
    updateCategory: (state, action: PayloadAction<{ name: string, value: string }>) => {
      state.search = { ...state.search, category: action.payload }
    },
    updateFilters: (state, action: PayloadAction<{ min?: number, max?: number, platformSelected?: any }>) => {
      state.filterModal = { ...state.filterModal, data: { ...state.filterModal?.data, ...action.payload} }
    },
    setFilterModal: (state, action: PayloadAction<FilterModalProps>) => {
      state.filterModal = { ...state.filterModal, ...action.payload }
    },
  },
});

export const {
  updateKeyword,
  setFilterModal,
  updateCategory,
  updateFilters
} = cartSlice.actions

export default cartSlice.reducer;
