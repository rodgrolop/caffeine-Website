import { default as Grid } from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { AuthPageContainer } from "@components";
import { useProviderAuthentication } from "@api";

import type { VNode } from "preact";

import { styles } from "./styles";

const getProviderLogo = (provider?: string): VNode | null => {
  switch (provider) {
    case "google":
      return <GoogleIcon fontSize="large" />;
    default:
      return null;
  }
};

const ProviderAuth = (): VNode => {
  const { t } = useTranslation();
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("access_token");
  const { error, isFetching, providerError } = useProviderAuthentication(
    token,
    provider as string
  );

  return (
    <AuthPageContainer>
      <Helmet>
        <title>
          {`🔓 Login with ${provider} | Rodrigo Gross Lopez - Senior React Developer`}
        </title>
      </Helmet>
      <Grid
        container={true}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={styles.formContainer}
        spacing={2}
      >
        <Grid>{getProviderLogo(provider)}</Grid>
        <Grid>
          {error?.message || providerError?.message ? (
            <Typography variant="h5" component="div">
              {t("somethingHappened")}
            </Typography>
          ) : (
            <Typography variant="h5" component="div">
              {t("authenticating")}
            </Typography>
          )}
        </Grid>
        <Grid>
          {isFetching ? <CircularProgress color="secondary" /> : null}
        </Grid>
        {error?.message || providerError?.message ? (
          <>
            <Grid>
              <Typography variant="caption" gutterBottom component="div">
                {error?.message ?? providerError?.message}
              </Typography>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/auth/login"
              >
                {t("backLogin")}
              </Button>
            </Grid>
          </>
        ) : null}
      </Grid>
    </AuthPageContainer>
  );
};

export default ProviderAuth;
