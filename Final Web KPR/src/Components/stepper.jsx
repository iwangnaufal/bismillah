import React from "react";
import "./stepper.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { Dialog, AppBar, TextField, MenuItem, FormControl, FormLabel, Grid, InputAdornment, Box, Typography, Button, ListItem } from '@material-ui/core';
import '../Styles/formStyle.css'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const styles = theme => createStyles({
  root: {
    "& .MuiFormLabel-root": {
      // color: "red"
    }
  },
  label: {
    color: "#490E73",
    fontSize: "12px",
    fontWeight: 600,
    fontFamily: "Open Sans"
  },
  formControl: {
    left: 150,
    right: 150
  },
  text: {
    width: "641px"
  }
});

const Stepper = props => {
  var stepPercentage = 0;

  if (props.currentStep === 2) {
    stepPercentage = 20;
  } else if (props.currentStep === 3) {
    stepPercentage = 40;
  } else if (props.currentStep === 4) {
    stepPercentage = 50;
  } else if (props.currentStep === 5) {
    stepPercentage = 60;
  } else if (props.currentStep === 6) {
    stepPercentage = 80;
  } else if (props.currentStep === 7) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className="mainForma">
      <ProgressBar percent={stepPercentage} filledBackground="linear-gradient(to right, #a304c7, #70008a)">
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {/* {index + 1} */}
              {/* <b className="text">Fasilitas Pembayaran</b> */}

            </div>
          )}
        </Step>
        <Step>
          {({ label, accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {/* {index + 1} */}
              {/* <b className="text">Data Angunan</b> */}
            </div>

          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {/* {index + 1} */}
              {/* <b className="text">Data Pemohon</b> */}

            </div>

          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {/* {index + 1} */}
              {/* <b className="text">Data Pekerjaan</b> */}

            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {/* {index + 1} */}
              {/* <b className="text">Kerabat yang Bisa Dihubungi</b> */}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {/* {index + 1} */}
              {/* <b className="text">Data Pembiayaan yang Dimiliki Saat Ini</b> */}
            </div>
          )}
        </Step>
      </ProgressBar>


      <div style={{
        width:'110%',
        margin:'5% -5%',
        height:'10vh',
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between',
        marginBottom:'-30px',
        // fontSize:"10px"
      }}>
        <div style={{width:'10%',height:'100%', display:'flex', textAlign:'center', color:"#6A0070" }}>
          <span style={{fontSize:"12px"}}>Fasilitas Pembayaran</span>
        </div>
        <div style={{width:'10%',height:'100%', display:'flex', textAlign:'center', color:"#6A0070"}}>
        <span style={{fontSize:"12px"}}>Data Angunan</span>
        </div>
        <div style={{width:'10%',height:'100%', display:'flex', textAlign:'center', color:"#6A0070"}}>
        <span style={{fontSize:"12px"}}>Data Pemohon</span>
        </div>
        <div style={{width:'10%',height:'100%', display:'flex', textAlign:'center', color:"#6A0070"}}>
        <span style={{fontSize:"12px"}}> Data Pekerjaan</span>
        </div>
        <div style={{width:'10%',height:'100%', display:'flex', textAlign:'center', color:"#6A0070"}}>
        <span style={{fontSize:"12px"}}>Kerabat yang Bisa Dihubungi</span>
        </div>
        <div style={{width:'10%',height:'100%', display:'flex', textAlign:'center', color:"#6A0070"}}>
        <span style={{fontSize:"12px"}}> Data Pembiayaan yang Dimiliki Saat Ini</span>
        </div>
        
      </div>
    </div>
    

  );
};

export default Stepper;
