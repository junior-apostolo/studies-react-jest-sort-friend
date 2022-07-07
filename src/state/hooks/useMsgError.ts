import { useRecoilValue } from "recoil"
import { erroState } from "../atom"


export const useMsgError = () => {
    const msg = useRecoilValue(erroState)
    return msg;
}