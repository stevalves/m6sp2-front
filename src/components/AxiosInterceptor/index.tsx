import { ReactNode, useEffect, useState } from "react"
import { api } from "../../services/api"
import axios from "axios"
import { NoPermissionModal } from "../NoPermissionModal"

interface AxiosInterceptorProps {
  children: ReactNode
}

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleModal = () => setIsOpenModal(!isOpenModal)

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if (!axios.isAxiosError(error)) {
        return Promise.reject(error)
      }

      if (error.response?.status === 401) {
        setIsOpenModal(true)
      }

      return Promise.reject(error)
    }


    const interceptor = api.interceptors.response.use(null, errorInterceptor)

    return () => api.interceptors.response.eject(interceptor)
  }, [])

  return (
    <>
      {isOpenModal && <NoPermissionModal toggleModal={handleModal}/>}
      {children}
    </>
  )
}