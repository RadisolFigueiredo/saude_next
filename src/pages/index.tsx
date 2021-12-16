import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState, FormEvent } from "react";
import { createUser, deleteUser, getUsers, updateUser } from "../clients";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import * as S from "./styles";

interface Users {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const initialState = {
  name: "",
  email: "",
  gender: "",
  status: "",
};

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Users>();
  const [inputDisable, setInputDisable] = useState<boolean>(true);
  const [formValues, setFormValues] = useState({});
  const [userIdSelected, setUserIdSelected] = useState<number | null>(null);

  const fetchUsers = async () => {
    try {
      const { data: response } = await getUsers();
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [loading]);

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  const handleAddUser = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await createUser(data)
      .then(() => {
        alert("Usuário criado com sucesso");
        setFormValues(initialState);
      })
      .catch((error) => {
        console.warn("Error Create User", error);
      });
  };

  const handleEditUser = async (item: Users) => {
    setUserIdSelected(item.id);
    setInputDisable(!inputDisable);
  };

  const handleInputChange = (e: FormEvent) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await updateUser(userIdSelected, data)
      .then(() => {
        console.log("Editado");
      })
      .catch((error) => {
        console.warn("Error Edit User", error);
      });
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id)
      .then(() => {
        const userDeleted = users?.filter((item: Users) => {
          return item.id !== id;
        });
        setUsers(userDeleted);
      })
      .catch((error) => {
        console.warn("Error Delete User", error);
      });
  };

  return (
    <S.Container>
      <S.BoxCardAdd>
        <S.BoxTitle>
          <h2>Adicionar usuário</h2>
        </S.BoxTitle>
        <S.BoxFormAdd>
          <S.FormAdd onSubmit={handleAddUser}>
            <S.DirectionRow>
              <div>
                <S.BoxText>
                  <input
                    placeholder="Digite o nome"
                    type="text"
                    name="name"
                    value={formValues.name || ""}
                    onChange={handleInputChange}
                  />
                </S.BoxText>
                <S.BoxText>
                  <input
                    placeholder="Digite o email"
                    type="text"
                    name="email"
                    value={formValues.email || ""}
                    onChange={handleInputChange}
                  />
                </S.BoxText>
              </div>
              <S.BoxTextRadios>
                <S.DirectionRow>
                  <S.Text>Status:</S.Text>
                  <S.LabelRadio>
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      onChange={handleInputChange}
                    />
                    Ativo
                  </S.LabelRadio>
                  <S.LabelRadio>
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      onChange={handleInputChange}
                    />
                    Inativo
                  </S.LabelRadio>
                </S.DirectionRow>
                <S.Line />
                <S.DirectionRow>
                  <S.Text>Gênero:</S.Text>
                  <S.LabelRadio>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleInputChange}
                    />
                    Feminino
                  </S.LabelRadio>
                  <S.LabelRadio>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleInputChange}
                    />
                    Masculino
                  </S.LabelRadio>
                </S.DirectionRow>
              </S.BoxTextRadios>
            </S.DirectionRow>
            <S.ButtonAddUser type="submit">
              <FiPlusCircle size={20} color={"green"} />
            </S.ButtonAddUser>
          </S.FormAdd>
        </S.BoxFormAdd>
      </S.BoxCardAdd>
      {users?.map((item: Users) => (
        <S.BoxCard key={item.id}>
          <S.Card>
            <S.Form onSubmit={onSubmit}>
              <S.Left>
                <S.Text>Nome:</S.Text>
                <input
                  type="text"
                  name="name"
                  value={formValues.name ?? item.name}
                  onChange={handleInputChange}
                  disabled={item.id !== userIdSelected}
                />
              </S.Left>
              <S.Left>
                <S.Text>Email:</S.Text>
                <input
                  type="text"
                  name="email"
                  value={formValues.email ?? item.email.toLowerCase()}
                  onChange={handleInputChange}
                  disabled={item.id !== userIdSelected}
                />
              </S.Left>
              <S.Left>
                <S.Text>Status:</S.Text>
                <S.LabelRadio>
                  <input
                    type="radio"
                    name="status"
                    checked={item.status.toLowerCase() === "active"}
                    value="active"
                    disabled={item.id !== userIdSelected}
                    onChange={handleInputChange}
                  />
                  Ativo
                </S.LabelRadio>
                <S.LabelRadio>
                  <input
                    type="radio"
                    name="status"
                    checked={item.status.toLowerCase() === "inactive"}
                    value="inactive"
                    disabled={item.id !== userIdSelected}
                    onChange={handleInputChange}
                  />
                  Inativo
                </S.LabelRadio>
              </S.Left>
              {item.id === userIdSelected && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <button type="submit">Salvar</button>
                </div>
              )}
            </S.Form>
            <S.Right>
              <S.ButtonAction onClick={() => handleEditUser(item)}>
                <FiEdit size={20} color={"#ffb800"} />
              </S.ButtonAction>
              <S.ButtonAction onClick={() => handleDeleteUser(item.id)}>
                <FiTrash2 size={20} color="red" />
              </S.ButtonAction>
            </S.Right>
          </S.Card>
        </S.BoxCard>
      ))}
    </S.Container>
  );
};

export default Home;
