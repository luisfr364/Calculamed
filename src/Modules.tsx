import "./modules.css";
import { useState } from "react";

const calculoPorc = (a: number, b: number, c: number) => {
    return (a * b) / c;
};

const calculosDiluicao = (a: number, b: number) => {
    return (a * 1) / b;
};

interface propForm {
    label1: string;
    label2: string;
    label3: string;
    addon1: string;
    addon2: string;
    addon3: string;
    calculusType: string;
}

const diluicao: propForm = {
    label1: "Peso do medicamento:",
    label2: "Concentração do medicamento:",
    label3: "Valor a se chegar:",
    addon1: "mg",
    addon2: "ml",
    addon3: "mg",
    calculusType: "diluicao",
};

const porcModule: propForm = {
    label1: "Peso do medicamento prescrito:",
    label2: "Concentração do medicamento prescrito:",
    label3: "concentração do medicamento disponível:",
    addon1: "mg",
    addon2: "%",
    addon3: "%",
    calculusType: "porcModule",
};

function Modules() {
    const [module, setModule] = useState("porcModule");
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    function whatCalc(prop: string) {
        switch (prop) {
            case "porcModule":
                return calculoPorc(value1, value2, value3);
            case "diluicao":
                return calculosDiluicao(value1, value2, value3);
        }
    }
    function form(prop: propForm) {
        return (
            <form
                className={
                    prop.calculusType == "porcModule" ? "inputs" : "inputs inputs-diluicao"
                }
            >
                <div className="form__div">
                    <div className="div-input">
                        <label htmlFor="basic-input" className="form-label">
                            {prop.label1}
                        </label>
                        <div className="input-group">
                            <input
                                type="number"
                                className="input-group-text input1"
                                id="basic-input"
                                onChange={(e) => {
                                    setValue1(Number(e.target.value));
                                }}
                            />
                            <span className="input-group-text" id="basic-addon">
                                {prop.addon1}
                            </span>
                        </div>
                    </div>
                    <div className="div-input">
                        <label htmlFor="basic-input" className="form-label">
                            {prop.label2}
                        </label>
                        <div className="input-group">
                            <input
                                type="number"
                                className="input-group-text"
                                onChange={(e) => {
                                    setValue2(Number(e.target.value));
                                }}
                                id="basic-input"
                            />
                            <span className="input-group-text" id="basic-addon">
                                {prop.addon2}
                            </span>
                        </div>
                    </div>
                    <div className={prop.calculusType === "diluicao" ? "hidden" : "div-input"}>
                        <label htmlFor="basic-input" className="form-label">
                            {prop.label3}
                        </label>
                        <div className={"input-group"}>
                            <input
                                type="number"
                                className="input-group-text"
                                onChange={(e) => {
                                    setValue3(Number(e.target.value));
                                }}
                                id="basic-input"
                            />
                            <span className="input-group-text" id="basic-addon">
                                {prop.addon3}
                            </span>
                        </div>
                    </div>
                    <div className="result">
                        <h3 id="result-title" className="result__title">
                            Resultado
                        </h3>
                        <h2 className="result__number">
                            {!isNaN(whatCalc(prop.calculusType))
                                ? whatCalc(prop.calculusType)?.toFixed(2) + " mg"
                                : "0.00"}{" "}
                            {prop.calculusType === "diluicao" ? "por ml" : null}
                        </h2>
                    </div>
                </div>
            </form>
        );
    }

    function whatToRender(prop: string) {
        if (prop === "porcModule") {
            return form(porcModule);
        } else if (prop === "diluicao") {
            return form(diluicao);
        }
    }

    return (
        <>
            <section className="section-module">
                <div className="buttons">
                    <button
                        type="button"
                        className={
                            module === "porcModule" ? "btn-porc--active btnn" : "btn-porc btnn"
                        }
                        onClick={() => setModule("porcModule")}
                    >
                        Porcentagem
                    </button>
                    <button
                        type="button"
                        className={
                            module === "diluicao" ? "btn-diluicao--active btnn" : "btn- btnn"
                        }
                        onClick={() => setModule("diluicao")}
                    >
                        Diluição
                    </button>
                </div>
                {whatToRender(module)}
            </section>
        </>
    );
}

export default Modules;
