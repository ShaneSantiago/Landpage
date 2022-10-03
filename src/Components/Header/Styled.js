import styled from "styled-components"

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    position: absolute;

.container-header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    

}
.container-nav{
    width: 100%;
    margin: 20px;
    display: flex;
    justify-content: space-around;
}

img{
    width: 100px;

}
nav{
    display: flex;
    align-items: center;
}
ul{
    list-style: none;
    display: flex;
    overflow: hidden;
    transition: all 0.5s;
}
li{
    color: white;
    margin: 15px;
    font-size: 15px;
}
    
// ul{
//     list-style: none;   
//     padding: 0;
//     overflow: hidden;
//     transition: all 0.5s;
//     margin: 0 5px;
//     display: flex;
// }

button{
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 28px;
    position: relative;
    display: none;
}
li:hover, h2:hover, button:hover{
    cursor: pointer;
    
}
button:focus ~ ul{
    height: 150px;
    z-index: 999;
    display: flex;
    flex-direction: column;
}
@media(max-width: 800px) {
    display: flex;
    .container-header{
        width: 100%;
    }

    .container-nav{  
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
    }
    img{
        display: none;
    }
    nav{
        width: 200px;
        display: flex;
        flex-direction: column;
    }
    nav:hover{
        display: block;
        background-color: #29abe2;
        display: flex;   
    }
    ul{
        display: flex;
        flex-direction: column;
        height: 0;
    }
    button{
        display: flex;
        margin-right: 150px;
    }
    
}
`;