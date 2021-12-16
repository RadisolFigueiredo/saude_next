import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxCard = styled.div`
  width: 50%;
  margin-bottom: 10px;
  padding: 20px 10px;
  cursor: pointer;
  background-color: #17181f;
  border-radius: 30px;
`;

export const BoxCardAdd = styled.div`
  width: 50%;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #17181f;
  border-radius: 30px;
  align-items: center;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
`;

export const BoxFormAdd = styled.div`
  display: flex;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-betwen;
  width: 100%;
  flex-wrap: wrap;
`;

export const ButtonAddUser = styled.button`
  background-color: transparent;
  border: none;
`;

export const DirectionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const BoxText = styled(DirectionRow)`
  height: 25px;
  align-items: center;
`;

export const BoxTextRadios = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  width: 50%;
`;

export const Line = styled.div`
  border: 1px solid #20212c;
  width: 90%;
  margin-right: 25px;
`;

export const LabelRadio = styled.label`
  cursor: pointer;
  width: 50%;
  color: #ffffff;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-right: 10px;
  text-align: left;
  width: 30%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormAdd = styled(Form)`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Left = styled.label`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 50%;
`;
