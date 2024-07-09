import EventEmitter from "eventemitter3"
import { useEffect } from "react"

const emmiter = new EventEmitter()

export const useSubscribe = (event: any, callBack: any) => {
  const unsuscribe = () => {
    emmiter.off(event, callBack)
  }

  useEffect(() => {
    emmiter.on(event, callBack)
    return unsuscribe
  }, [])

  return unsuscribe
}

export const usePublisher = () => {
  return (event: any, data: any) => {
    emmiter.emit(event, data)
  }
}