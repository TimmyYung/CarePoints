'use client'
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import CaretakerSignUp from "@/components/caretaker-shared-components/CaretakerSignUp";

const CaretakerSignUpSection = () => {
    return (
        <CaretakerSignUp signup={true}/>
    )
}
export default CaretakerSignUpSection;