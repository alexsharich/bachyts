import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { uApi } from 'src/api/uApi/users.api'
import { users } from 'src/features/users/USlice'

export const store = configureStore({
  reducer: {
    users,
    [uApi.reducerPath]: uApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(uApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch