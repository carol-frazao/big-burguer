import styled from "styled-components"
import { FaCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <Home className="Inicio">
            {/* <div className="Marketing">
                <Characteristics className="Characteristics">
                    <Strong> Gigante </Strong>
                    <FaCircle className="faCircle" />
                    <Strong> Gostoso </Strong>
                    <FaCircle className="faCircle" />
                    <Strong> Irresistível </Strong>
                </Characteristics>

                <div className="Description">
                    <DescriptionText>
                        Experimente o melhor hambúrguer de São Paulo. Viva essa experiência!
                    </DescriptionText>
                </div>

                <Link to="/burguers">
                    <ProductsBtn className="productsBtn"> Conheça nossos produtos </ProductsBtn>
                </Link>
            </div>

            <div className="BurguerImg">
                <img src="/images/burguer-img.png" alt="Burguer Img" />
            </div> */}
        </Home>
    )
}

// Styles
const Home = styled.section`
    background-color: #151515;
    display: flex;
    align-items: center;
    min-height: 100vh;
`
const Characteristics = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
`
const Strong = styled.strong`
    color: #FF9F46;
    text-transform: uppercase;
`
const DescriptionText = styled.span`
    color: #ffffff;
    text-transform: uppercase;
`
const ProductsBtn = styled.button`
    border: none;
    border-radius: 5px;
    background: #FF9F46;
    text-transform: uppercase;
`

export default Inicio