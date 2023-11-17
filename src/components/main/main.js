import "./main.css";
import avatar from "../../assets/avatar.svg";
import Chart from "../charts/charts";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          <img src={avatar} alt="avatar" />
          <div className="main_greeting">
            <h1>Olá Wallace</h1>
            <p>Bem vindo ao seu painel</p>
          </div>
        </div>
        <div className="main_cards">
          <div className="card">
            <i className="fa fa-file-text fa-2x text-lightblue" />
            <div className="card_inner">
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-file-text fa-2x text-red" />
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$ 2.467</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-file-text fa-2x text-yellow" />
            <div className="card_inner">
              <p className="text-primary-p">Numero de produtos</p>
              <span className="font-bold text-title">565</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-file-text fa-2x text-green" />
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts_left">
            <div className="charts_left_title">
              <div>
                <h1>Daily Reports</h1>
                <p>Santos, São Paulo, BR</p>
              </div>
              <i className="fa fa-usd" />
            </div>
            <Chart />
          </div>

          <div className="charts_right">
            <div className="charts_right_title">
              <div>
                <h1>Daily Reports</h1>
                <p>Santos, São Paulo, BR</p>
              </div>
              <i className="fa fa-area-chart" />
            </div>

            <div className="charts_right_cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$ 2500</p>
              </div>
              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$ 250,00</p>
              </div>
              <div className="card3">
                <h1>Custos de hospedagem</h1>
                <p>R$ 150,00</p>
              </div>
              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$ 180,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
