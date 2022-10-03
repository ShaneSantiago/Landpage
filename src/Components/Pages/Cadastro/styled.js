import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #29abe2;
    height: 500px;

.container-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 380px;
    height: 380px;
}
.title-cadastro{
    font-size: 35px;
    margin-top: 20px;
    color: rgb(230, 230, 230);
}
h2{
    color: white;
    font-weight: lighter;
}

.form{
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.label-float{
    position: relative;
    padding-top: 14px;
    color: white;
}
.label-float input{
    border: 0;
    border-bottom: 2px solid lightgrey;
    outline: none;
    color: white;
    font-size: 16px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -webkit-appearance:none;
    border-radius: 0;
    width: 380px;
    padding: 8px;
    background-color: transparent;
    font-family: inherit;
    outline: 0;
    z-index: 2;
    postion: relative;
    box-sizing: content-box;
  }
  
  .label-float input:focus{
    border-bottom: 2px solid #3951b2;
  }
  
  .label-float input::placeholder{
    color: transparent;
    
  }
  
  .label-float label{
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
  }

  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label{
    font-size: 13px;
    margin-top: 0;
    color: white;
  }
button{
    color: #29abe2;
    background-color: #012d51;
    font-size: 30px;
    font-weight: lighter;
    width: 380px;
    border: none;
    padding: 15px;
    cursor: pointer;
    margin: 30px auto;
}
@media(max-width: 800px){
    .container-form{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form{
        width: 300px;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    .label-float input{
        width: 320px;
    }
    button{
    width: 100%;
}
`;

