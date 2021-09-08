interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
}
interface ICreateUserResponseDTO {
    id: number;
    name: string;
    email: string;
    updatedAt?: string;
    createdAt?: string;
}
export { ICreateUserRequestDTO, ICreateUserResponseDTO };
