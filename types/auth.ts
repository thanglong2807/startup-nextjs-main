// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ILogin {
    password: string;
    email: string;
    phonenumber?: string;
    name?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ILoginResponse {
    data: {
        accessToken: string;
    };
    status: number;
    [key: string]: any;
}
