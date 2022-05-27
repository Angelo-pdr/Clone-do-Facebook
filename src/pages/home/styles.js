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
    text-align: center;
    font-size: 14px;
    color: #1c1e21;
    font-weight: normal;
    a{
        font-size: 14px;
        font-weight: 600;
        color: #1c1e21;
        cursor: pointer;
        text-decoration: none;
    }
    a:hover{
        text-decoration: unrdeline;
    }
`

export const AreaRegister = styled.div`
    margin-top 40px;
    padding: 16px;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px 
    rgb(0 0 0 / 10%), 
    0 8px 16px 
    rgb(0 0 0 / 10%);
`  

export const Label = styled.label`
    font-size: 17px;
    border-radius: 6px;
    display: block;
    width: 330px;
    padding: 6px 0;

    input{
        font-size: 17px;
        padding: 14px 16px;
        border-radius: 6px;
        border: 1px solid #ccd0d5;
        width: 100%;
    }
`

export const Button = styled.button`
    width: 100%;
    border-radius: 6px;
    border: none;
    background-color: #1877f2;
    font-size: 20px;
    font-weight: normal;
    color: white;
    line-height: 48px;
    margin: 6px 0;
    cursor: pointer;
`