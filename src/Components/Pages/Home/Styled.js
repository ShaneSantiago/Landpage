import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 100%;

.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(assets/index-image.jpg);
}
.info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 500px;
    margin-bottom: 100px;
    
}
.teste{
    display: flex;
    flex-direction: column;
    
}
h2{
    color: white;
    font-family: Helvetica 25 UltraLight Regular;
    font-size: 80px;
    font-weight: lighter;
    margin: 0;

}
.container-title > p{
    font-size: 50px;
    margin-top: 0;
    font-weight: lighter;
    color: rgb(230, 230, 230);
}

@media(max-width: 950px) {
        width: 100%;
        margin: 0 auto;
    .container{
        width: 100%;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(assets/index-image-mobile.jpg)
    }
    .info {
        display: flex;
        width: 100%;
        height: 300px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    .container-title h2{
        font-size: 60px;
        margin-top: 50px;
        font-weight: lighter;
    }
    .container-title p{
        font-size: 25px;
    }
}
`;


export const ContainerTabela = styled.div`
    width: 100%;
    height: 500px;
    overflow-y: auto;

.title-column{
    
}
h2{
    margin-top: 20px;
    color: #29abe2;
    font-family: "Roboto Flex", sans-serif;
    font-size: 39px;
    margin-bottom: 50px;
}
.container-table{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.number-table{
    color: #012d51;
}

table{
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}
table th, tr, td{
    padding: 15px;
    color: #012d51;
    width: 100px;
}
.row-name-info{
    text-align: center;
    border-left: 2px solid #29abe2;
    border-bottom: 2px solid #29abe2;
    color: #012d51;
    font-family: Roboto-Regular;
    font-size: 12px;
    width: 10px;
}
.row-name{
    text-align: center;
    border-bottom: 2px solid #29abe2;
}
.row-info{
    text-align: center;
    border-left: 2px solid #29abe2;
    border-bottom: 2px solid #29abe2;
    color: #808080;
    font-family: Helvetica-Regular;
}
.row-info2{
    text-align: center;
    border-left: 2px solid #29abe2;
    text-align: center;
    color: #808080;
    font-family: Helvetica Condensed Regular;
}
.row-number{
    width: 10px;
    text-align: center;
    border-bottom: 2px solid #29abe2;
    color: #012d51;
    font-family: Roboto;
}
.row-number2{
    text-align: center;
    color: #012d51;
    font-family: Roboto;
}

@media(max-width: 800px){
    width: 100%;
    .container-table{
        width: 500px;
        display: flex;

    }
}
`;