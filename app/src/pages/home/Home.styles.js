import styled from "styled-components";

export const DivMaior = styled.div`
    min-width:100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(68,201,125);
    form{
        display: grid;
        gap: 20px 0;
        width: 400px;
    }
`
export const DivInputLabel = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivContent = styled.div`
 color: white;
 padding: 50px;
 border-radius: 10px;
`
export const Logo = styled.div`
margin-bottom: 40px;
`
export const Button = styled.button`
    background-color: white;
    color: rgb(68,201,125);
    border: 0;
    padding:5px ;
    border-radius: 8px;
    cursor: pointer;
`
export const Input = styled.input`
    padding: 5px 15px;
    border: 0;
    outline: 0;
    border-radius: 8px;
`