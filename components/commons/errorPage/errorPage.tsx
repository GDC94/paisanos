import { PATHS } from "config/paths";
import Head from "next/head";
import { MainLayout } from "layouts/mainLayout";
import { Button } from "components/commons/button";
import {
  ErrorContainer,
  ErrorNumberAndMessage,
  Number,
  MessageButton,
  Message,
  MessageLine,
  ButtonWrapper,
} from "./errorPage.styles";

interface ErrorPageProps {
  statusCode?: string | number;
  message: string;
  textButton?: string;
  linkButton?: string;
}

export const ErrorPage = ({
  statusCode,
  message,
  textButton = "Corre hacia la Home, Forest! corre!!",
  linkButton = `${PATHS.ROOT}`,
}: ErrorPageProps) => {
  return (
    <MainLayout full>
      <Head>
        <title>😨 Algo ha salido mal </title>
      </Head>
      <ErrorContainer>
        <ErrorNumberAndMessage>
          <Number>{statusCode}</Number>
          <MessageButton>
            <Message>
              {message}
              <MessageLine />
            </Message>
            <ButtonWrapper>
              <Button text={textButton} link={linkButton} center />
            </ButtonWrapper>
          </MessageButton>
        </ErrorNumberAndMessage>
      </ErrorContainer>
    </MainLayout>
  );
};

export default ErrorPage;
