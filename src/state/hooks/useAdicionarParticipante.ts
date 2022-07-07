import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantes } from "../atom"

export const useAdicionaParticipante = () => {
    const setList = useSetRecoilState(listaParticipantes)
    const list = useRecoilValue(listaParticipantes)
    const setErro = useSetRecoilState(erroState)

    return (nomeParticipante: string) => {
        if(list.includes(nomeParticipante)){
            setErro("Nomes duplicados não são permitidos")
            setTimeout(() => {
                setErro("")
            },3000)
            return
        }
        return setList(listaAtual => [...listaAtual, nomeParticipante])
    }
}