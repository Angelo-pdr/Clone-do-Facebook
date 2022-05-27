import * as C from "./styles"


export const Home = () => {

    return(
        <C.Container>
            <C.Description>
                <a href="/"><img src="../src/img/logoFacebook.svg" alt="logo_do_facebook" className="imagem" /></a>
                <h2>
                O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
                </h2>
            </C.Description>
            <C.AreaForm>
                <C.AreaRegister>
                    <C.Label>
                        <input type="text"  placeholder="Email ou Telefone"/>
                    </C.Label>
                    <C.Label>
                        <input type="password" placeholder="Senha" />
                    </C.Label>
                    <C.Button>Entrar</C.Button>
                </C.AreaRegister>
                <p><a href="">Criar uma Página</a> para uma celebridade, uma marca ou uma empresa.</p>
            </C.AreaForm>
        </C.Container>
    )
}