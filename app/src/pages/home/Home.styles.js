import styled from "styled-components";

export const DivMaior = styled.div`
    min-width:100vw;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:rgb(68,201,125);
    form{
        display: grid;
        gap: 20px 0;
        width: 370px;
    }
`
export const DivInputLabel = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivContent = styled.div`
 color: white;
 width: 60%;
 padding: 50px;
 border-radius: 10px;
`
export const Logo = styled.div`
margin-bottom: 50px;
img{
    width: 100%;
    width: 100px;
}
`
export const Button = styled.button`
    background-color: white;
    color: rgb(68,201,125);
    border: 0;
    width: 35%;
    margin-top: 20px;
    padding:10px ;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
        :hover{     
            -webkit-box-shadow: 0px 10px 39px -7px #000000; 
            box-shadow: 0px 10px 39px -7px #000000;
        }
`
export const Input = styled.input`
    padding: 10px 20px;
    border: 0;
    font-size: 14px;
    outline: 0;
    border-radius: 8px;
`
export const DivBar = styled.div`
 margin-bottom: 20px;
 a{ 
    font-weight: bold;
     color: white;
     text-decoration: none;
 }
`
export const DivBoxA = styled.div`
 padding: 10px 0;
 width: 45px;
 border-bottom: 2px solid white;
`
export const DivLeft = styled.div`
    width: 40%;
    background-color: white;
    color: rgb(6,78,137);
    padding:86px;
    img{
        width: 100%;
        width: 350px;
    }
`
export const DivContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px 0;
`