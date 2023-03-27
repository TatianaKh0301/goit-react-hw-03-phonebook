import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 650px;
    padding: 20px;
`;

export const MainTitle = styled.h1`
    margin-bottom: 20px;
    text-align: center;
`;

export const LabelForm = styled.label`
    font-size: 15px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;

export const InputForm = styled(Field)`
    width: 500px;
    margin-bottom: 5px;
`;

export const ButtonForm = styled.button`
    width: 150px;
    height: 35px;
    margin-left: 500px;
    margin-top: 20px;
`;
