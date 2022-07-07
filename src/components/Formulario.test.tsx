import { fireEvent, render, screen, act } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Formulario from './Formulario';

describe('O comportamento do Formulario', () => {
    test('quando o input esta vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // econtrar o botão
        const botao = screen.getByRole('button')
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        //garantir que o botão esteja no desabilitado
        expect(botao).toBeDisabled()
    })

    test('adicionar um participante caso exista um nome preechido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // econtrar o botão
        const botao = screen.getByRole('button')

        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Junior'
            }
        })
        // clicar no botão de submit
        fireEvent.click(botao)
        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
        // garantir que o input não tenha um valor
        expect(input).toHaveValue("")
    })

    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Junior'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Junior'
            }
        })
        fireEvent.click(botao)

        const msgError = screen.getByRole('alert')

        expect(msgError.textContent).toBe('Nomes duplicados não são permitidos')
    })

    test('a mensagem de erro deve sumir após o timer', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Junior'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Junior'
            }
        })
        fireEvent.click(botao)

        let msgError = screen.queryByRole('alert')
        expect(msgError).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        })

        msgError = screen.queryByRole('alert')
        expect(msgError).toBeNull()
    })
})

