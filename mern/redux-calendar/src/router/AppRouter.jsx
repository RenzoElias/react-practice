import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { CalendarPage } from '../calendar'

export const AppRouter = () => {

  const authStatus = 'authenticated'
  // const authStatus = 'not-authenticated'

  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path="/auth/*" element={<LoginPage />} />
          : <Route path="/*" element={<CalendarPage />} />
      }
      
      {/* Validacion para que no entre a una ruta no existente */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
