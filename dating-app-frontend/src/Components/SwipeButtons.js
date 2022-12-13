import React from "react";
import './SwipeButtons.css';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CancelIcon from '@mui/icons-material/Cancel';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayCircleFilledIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CancelIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarBorderPurple500Icon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>

        </div>
    )
}

export default SwipeButtons;