import React from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import { Box } from '@mui/system'
import Fab from '@mui/material/Fab'

const StyledFab = styled(Fab)({
	position: 'absolute',
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: '0 auto',
})

export interface IAppBarFooterProps {}
export default function AppBarFooter(props: IAppBarFooterProps) {
	return (
		<AppBar
			position="fixed"
			color="primary"
			sx={{ top: 'auto', bottom: 0, display: { xs: 'block', sm: 'none' } }}
		>
			<Toolbar>
				<IconButton color="inherit" aria-label="open drawer">
					<MenuIcon />
				</IconButton>
				<StyledFab color="secondary" aria-label="add">
					<AddIcon />
				</StyledFab>
				<Box sx={{ flexGrow: 1 }} />
				<IconButton color="inherit">
					<SearchIcon />
				</IconButton>
				<IconButton color="inherit">
					<MoreVertOutlinedIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
