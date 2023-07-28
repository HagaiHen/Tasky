import { useState } from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@mui/material/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { MenuItem, Menu } from "@mui/material";
import { ROLES } from "@/utils/consts";
import { controllerSignUpSession } from "@/controller/auth";
import { appContext } from "@/pages/index";
import { useContext } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
    },
  }));
  
  const theme = createTheme();
  
  const UserType = {
    INDEPENDENT: 1,
    ORGANIZATION: 2,
  };
  
  function getSteps(selectedUserType) {
    return [
      <Typography variant="p" gutterBottom>Enter your nickname</Typography>,
      <Typography variant="p" gutterBottom>Tell us your work status</Typography>,
      selectedUserType == null ? <Typography variant="p" gutterBottom>All most done</Typography> :
        selectedUserType == UserType.ORGANIZATION ? <Typography variant="p" gutterBottom>Enter your organization UID</Typography> :
          <Typography variant="p" gutterBottom>Choose role / postion</Typography>,
    ];
  }
  
  
  function getStepContent(step, handleUserType, selectedUserType, handleTextChange, 
    handleMenuClose, handleMenuOpen, anchorEl, handleRoleSelect, selectedRole) {
    switch (step) {
      case 0:
        return (
          <TextField
            required
            fullWidth
            id="nicname"
            label="nickname"
            name="nickname"
            autoComplete="nickname"
            onChange={(e) => handleTextChange(e)}
          />
        );
      case 1:
        return (
          <div>
            <Button
              variant={selectedUserType === UserType.INDEPENDENT ? 'contained' : 'outlined'}
              onClick={() => handleUserType(UserType.INDEPENDENT)}
              startIcon={<PersonIcon />}
            >
              Independent
            </Button>
            <Button
              variant={selectedUserType === UserType.ORGANIZATION ? 'contained' : 'outlined'}
              onClick={() => handleUserType(UserType.ORGANIZATION)}
              startIcon={<GroupIcon />}
            >
              Organization
            </Button>
          </div>
        );
      case 2:
        const ret = selectedUserType === UserType.ORGANIZATION ? ((
          <div>
            <Typography variant="p" gutterBottom>If you did'nt get your organization UID contact your employer.</Typography>
            <Box
              sx={{
                marginTop: 2,
              }}>
              <TextField
                required
                fullWidth
                id="organizationUID"
                label="organizationUID"
                name="organizationUID"
                autoComplete="organizationUID"
                onChange={(e) => handleTextChange(e)}
              />
            </Box>
          </div>
        )) : (
          <div>
            <Button
              variant="outlined"
              startIcon={<PersonIcon />}
              onClick={handleMenuOpen}
            >
              {selectedRole || 'Select Role'}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {ROLES.map((role) => (
                <MenuItem key={role} onClick={() => handleRoleSelect(role)}>
                  {role}
                </MenuItem>
              ))}
            </Menu>
          </div>
        );
        return ret;
      default:
        return 'Unknown step';
    }
  }
  
const SignupStepper = (probs) => {
    const app = useContext(appContext);
    const token = probs.token;
    const uid = probs.uid;
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [selecteduserType, setSelectedUserType] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');
    const [anchorEl, setAnchorEl] = useState(null); // for role selection
    const [signUpFormData, setSignUpFormData] = useState({
      nickname: null,
      organizationUID: null,
    });
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleRoleSelect = (role) => {
      setSelectedRole(role);
      handleMenuClose();
    };
  
    const handleUserType = (buttonId) => {
      setSelectedUserType(buttonId);
    };
  
    const handleTextChange = (e) => {
      setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
    };
  
  
    const handleNext = async () => {
      if (activeStep === getSteps(selecteduserType).length - 1) {
        // submit form
        const user = {
          nickname: signUpFormData.nickname,
          organizationUID: signUpFormData.organizationUID == null? "independent": signUpFormData.organizationUID,
          role: selectedRole == ''? "take from organization": selectedRole,
          uid: uid,
        };
        const res = await controllerSignUpSession(user, token, app);
        if (!res.success) {
          alert(res.error);
        }
        return;
      }
      if (activeStep === 0 && signUpFormData.nickname === null) {
        alert("Please enter your nickname");
        return;
      }
      if (activeStep === 1 && selecteduserType === null) {
        alert("Please select your user type");
        return;
      }
      if (activeStep === 2 && signUpFormData.organizationUID === null && selectedRole === '') {
        if (selecteduserType === UserType.ORGANIZATION)
          alert("Please enter your organization UID");
        else
          alert("Please select your role");
        return;
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h5">
                    Tasky Sign Up Session
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {getSteps(selecteduserType).map((label, index) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <div>{getStepContent(index, handleUserType, selecteduserType, handleTextChange, handleMenuClose, handleMenuOpen, anchorEl, handleRoleSelect, selectedRole)}</div>
                            </Grid>
                            <Grid item xs={12}>
                              <div className={"next-button"}>
                                <div>
                                  <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={"button"}>
                                    Back
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={"button"}
                                  >
                                    {activeStep === getSteps(selecteduserType).length - 1 ? 'Take me to Tasky' : 'Next'}
                                  </Button>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>
                <Grid item xs={12}>
                  {activeStep === getSteps(selecteduserType).length && (
                    <Paper square elevation={0} className={"reset-text"}>
                      <Typography>Form is submitted</Typography>
                      <Button onClick={handleReset} className={"reset-button"}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    );
  }

export default SignupStepper;