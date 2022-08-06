import { AuthErrorCodes } from "firebase/auth";

const AuthErrorCodeValues = Object.values(AuthErrorCodes)

export type ErrorCode = typeof AuthErrorCodeValues[number] | ''

type ErrorMessages = {
    [key in ErrorCode]?: string;
}

const errorMessages: ErrorMessages = {
    [AuthErrorCodes.USER_DELETED]: "User with this e-mail not found",
    [AuthErrorCodes.INVALID_PASSWORD]: "Wrong password",
    [AuthErrorCodes.EMAIL_EXISTS]: "This email address is already being used",
}

export const getMessageFromErrorCode = (errorCode?: ErrorCode) => {
    if (!errorCode) {
        return errorCode
    }
    return errorMessages[errorCode]
}
