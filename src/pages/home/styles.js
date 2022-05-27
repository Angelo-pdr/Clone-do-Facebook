import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 0;
    margin: 0 184.5px;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-item center;
    
`

export const Description = styled.div`
    

    .imagem{
        height: 106px;
        margin: -26px;
        padding: 112px 0 16px;
       
    }

    h2{
        max-width: 500px;
        font-size: 28px;
        font-weight: normal;
        line-height: 32px;
        color: #1c1e21;
        margin: 0;
    }
`

export const AreaForm = styled.div`
    
`


export const AreaRegister = styled.div`
    
    
    padding-top: 10px;
    padding: 24px 0 28px;;
    text-align: center;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    max-width: 396px;
    margin-top 40px;
    box-shadow: 0 2px 4px 
    rgb(0 0 0 / 10%), 
    0 8px 16px 
    rgb(0 0 0 / 10%);
    border-sizing: border-box;
`
export const InputArea = styled.div`
    max-width: 100%;
    display: grid;
    grid-items: center;
    
`

export const Label = styled.label`
    font-size: 17px;
    max-width: 100%;

    input{
        width: 100%;
        font-size: 17px;

        padding: 14px 16px;
        border-radius: 6px;
        border: 1px solid #ccd0d5;
    }
`