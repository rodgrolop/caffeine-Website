import { useT } from "talkr";
import { Link } from "wouter-preact";
import { LoginForm, AuthPageContainer, DocumentHead } from "@components";

import { default as Grid } from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import GoogleIcon from "./../../../components/custom-icons/GoogleIcon";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";

import type { VNode } from "preact";

import { styles } from "./styles";

const Login = (): VNode => {
  const { T } = useT();

  return (
    <AuthPageContainer>
      <DocumentHead>
        <title>🔓 Login | Rodrigo Gross Lopez - Senior React Developer</title>
      </DocumentHead>
      <Grid
        container={true}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={styles.formContainer}
        spacing={2}
      >
        <LoginForm />
        <Grid>
          <Typography variant="caption" sx={{ marginBottom: 2, marginTop: 2 }}>
            {T("orLoginWithProvider")}
          </Typography>
        </Grid>
        <Grid>
          <a
            href={`${import.meta.env.VITE_STRAPI_ENDPOINT}/api/connect/google`}
          >
            <Button
              sx={styles.googleButton}
              size="medium"
              variant="contained"
              startIcon={
                <SvgIcon sx={styles.icon}>
                  <GoogleIcon />
                </SvgIcon>
              }
            >
              Google
            </Button>
          </a>
        </Grid>
      </Grid>
    </AuthPageContainer>
  );
};

export default Login;
