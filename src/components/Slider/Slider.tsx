import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.scss'
import BGSlider from "images/BGSlider.png"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

type Props = {}

const Slider = (props: Props) => {
	return (
		<>
			<AwesomeSlider>
				<div data-src={BGSlider} className="awesomeSlider" />
				<div data-src={BGSlider} className="awesomeSlider" />
				<div data-src={BGSlider} className="awesomeSlider" />
			</AwesomeSlider>
		</>
	)
}

export default Slider