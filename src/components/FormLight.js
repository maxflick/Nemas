import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material/";
import * as React from "react";
import { useState } from "react";

export default function FormLight({
  handler,
  isLoading,
  isSent,
  hasError,
  isOpen,
}) {
  const [formState, setFormState] = useState({});

  const handleFieldChange = (field, e) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    handler(e, formState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="overline" gutterBottom>
        FÅ MER INFORMATION OM NEMAS!
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h3" component="h3" gutterBottom>
          Fyll i din epost så kontaktar vi dig inom kort med mer information om
          hur du kan ansluta.
        </Typography>
      </Box>
      <Box>
        <TextField
          required
          sx={{ my: 1 }}
          onChange={(e) => handleFieldChange("your-email", e)}
          id="outlined-basic"
          disabled={isSent}
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
        />
        <FormGroup>
          <FormControlLabel
            onChange={(e) => handleFieldChange("checkbox-975[]", e)}
            required
            control={<Checkbox />}
            disabled={isSent}
            value="accept"
            label="Jag godkänner att Nemas lagrar ovan angivna uppgifter i syfte att erbjuda mig Nemas tjänster. Läs vår Integritetspolicy här."
          />
        </FormGroup>
      </Box>
      <Box sx={{ mt: 2, position: "relative", width: "100%" }}>
        {isSent ? (
          <Alert
            sx={{ mt: 3 }}
            severity="success"
            icon={<CheckIcon fontSize="inherit" />}
          >
            Tack för din intresseanmälan!
          </Alert>
        ) : (
          <LoadingButton
            name="submit"
            type="submit"
            loading={isLoading}
            disabled={false}
            sx={{ justifyContent: "space-between", padding: "16px 24px" }}
            color="primary"
            variant="contained"
            loadingPosition="center"
            endIcon={<ArrowForwardIcon />}
            fullWidth
          >
            Jag vill veta mer!
          </LoadingButton>
        )}
      </Box>
    </form>
  );
}
