import * as React from "react";
import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  FormGroup,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material/";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FormNew({
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
      <Box id="FormNew" sx={{ my: 4 }}>
        <Grid container spacing={{ xs: 2, md: 16 }} columns={{ xs: 4, sm: 8 }}>
          <Grid item xs={4} sm={4} md={8}>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" component="h6" gutterBottom>
                1. Information
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  required
                  sx={{ my: 1 }}
                  onChange={(e) => handleFieldChange("your-name", e)}
                  id="outlined-basic"
                  label="Förnamn"
                  variant="outlined"
                />
                <TextField
                  required
                  sx={{ my: 1 }}
                  onChange={(e) => handleFieldChange("surname", e)}
                  id="outlined-basic"
                  label="Efternamn"
                  variant="outlined"
                />
                <TextField
                  required
                  sx={{ my: 1 }}
                  onChange={(e) => handleFieldChange("your-email", e)}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                />
              </Box>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" component="h6" gutterBottom>
                2. Testar du som användare eller rådgivare?
              </Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  required
                  aria-label="usertype"
                  defaultValue="user"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    onChange={(e) => handleFieldChange("radio-409", e)}
                    value="Användare"
                    control={<Radio />}
                    label="Användare"
                  />
                  <FormControlLabel
                    onChange={(e) => handleFieldChange("radio-409", e)}
                    value="Rådgivare"
                    control={<Radio />}
                    label="Rådgivare"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={8}>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" component="h6" gutterBottom>
                3. Vilka kategorier är mest intressant för dig?
              </Typography>
              <FormGroup>
                <FormControlLabel
                  onChange={(e) => handleFieldChange("checkbox-114[]", e)}
                  control={<Checkbox />}
                  value="home"
                  label="Bygg, Renovering &amp; Hemmafix"
                />
                <FormControlLabel
                  onChange={(e) => handleFieldChange("checkbox-115[]", e)}
                  control={<Checkbox />}
                  value="garden"
                  label="Trädgård, Tomt &amp; Mark"
                />
                <FormControlLabel
                  onChange={(e) => handleFieldChange("checkbox-116[]", e)}
                  control={<Checkbox />}
                  value="it"
                  label="IT, Hemelektronik &amp; Smarta Hem"
                />
                <FormControlLabel
                  onChange={(e) => handleFieldChange("checkbox-117[]", e)}
                  control={<Checkbox />}
                  value="design"
                  label="Inredning &amp; Hemdesign"
                />
                <FormControlLabel
                  onChange={(e) => handleFieldChange("checkbox-118[]", e)}
                  control={<Checkbox />}
                  value="kitchen"
                  label="Vitvaror &amp; Hushållsmaskiner"
                />
              </FormGroup>
              <TextField
                onChange={(e) => handleFieldChange("feedback", e)}
                sx={{ my: 1 }}
                id="outlined-basic"
                label="Tipsa oss"
                variant="outlined"
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <FormGroup>
                <FormControlLabel
                  onChange={(e) => handleFieldChange("checkbox-119[]", e)}
                  required
                  control={<Checkbox />}
                  value="accept"
                  label="Jag godkänner att Nemas lagrar ovan angivna uppgifter i syfte att erbjuda mig Nemas tjänster. Läs vår Integritetspolicy här."
                />
              </FormGroup>
              <Box sx={{ mt: 2, position: "relative", width: "fit-content" }}>
                <Button
                  name="submit"
                  type="submit"
                  disabled={isLoading}
                  sx={{ justifyContent: "space-between", padding: "16px 24px" }}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                >
                  Jag vill veta mer!
                </Button>
                {isLoading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
                {isSent && (
                  <Alert
                    sx={{ mt: 3 }}
                    severity="success"
                    icon={<CheckIcon fontSize="inherit" />}
                  >
                    Tack för din intresseanmälan!
                  </Alert>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
