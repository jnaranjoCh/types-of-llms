import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export type AuthenticatedRequest = Request & {
  userId: string;
  email: string;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): AuthenticatedRequest => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
